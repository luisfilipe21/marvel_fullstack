import React, { BaseSyntheticEvent, createContext, ProviderProps, useEffect, useState } from "react";
import { api } from "../service/api";

export interface IContextProps {
    children: React.ReactNode;
}

export interface IContextData {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
    urls: [
        {
            type: string;
            url: string;
        }
    ];
    collectionURI: string;
    comics: {
        items: [
            {
                name: string;
                resourceURI: string;
            }
        ]
    }
}

export interface IContextBackgroundData {
    id: number;
    digitalId: number;
    title: string;
    comics: {
        items: [
            resourceURI: string,
        ]
    };
    images: [
        {
            extension: string,
            path: string,
        }
    ]
    events: {
        items: [
            resourceURI: string,
        ]
    };
    series: {
        items: [
            resourceURI: string,
        ]
    }
    urls: [
        {
            type: string;
            url: string;
        }
    ];
}

export interface IContextType {
    characterList: IContextData[] | undefined;
    setCharacterList: React.Dispatch<React.SetStateAction<IContextData[] | undefined>>;
    characterSelected: IContextData[] | undefined;
    setCharacterSelected: React.Dispatch<React.SetStateAction<IContextData[] | undefined>>;
    offsetCharacters: number;
    setOffsetCharacters: React.Dispatch<React.SetStateAction<number>>
    getMoreCharacters: React.MouseEventHandler<HTMLButtonElement> | undefined;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    getOneHero: ProviderProps<IContextType> | any;
    comicId: IContextBackgroundData[] | undefined;

    comicBg: IContextBackgroundData[] | undefined

}

export const CharacterContext = createContext({} as IContextType);

export const CharacterProvider = ({ children }: IContextProps) => {

    const [characterList, setCharacterList] = useState<IContextData[]>();
    const [characterSelected, setCharacterSelected] = useState<IContextData[]>();
    const [offsetCharacters, setOffsetCharacters] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [comicId, setComicId] = useState<IContextBackgroundData[]>();
    const [comicBg, setComicBg] = useState<IContextBackgroundData[]>();

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const { data } = await api.get("/characters",{
                    params:{
                        limit: 40
                    }
                });

                setCharacterList(data.data.results);
                setIsLoading(false);
            } catch (error) {
                console.error(error)
            }
        }
        getCharacters();
    }, [])

    useEffect(() => {
        const getBackground = async () => {
            try {
                const { data } = await api.get("/comics", {
                    params: {
                        // limit: 99,
                        // offset: 200
                        // digitalId: 68901
                    }
                })
                setComicId(data.data.results)
            } catch (error) {
                console.log(error)
            }
            // 68901
            // 68960
            // 68943
            // 68917
            // const avengers = comicId?.filter((data) => data.title.toLowerCase().includes("x-men"));
            // console.log(avengers)
            // setComicBg(avengers)
        }

        getBackground();
    }, [])

    const getMoreCharacters = async () => {
        setIsLoading(true);

        try {
            const { data } = await api.get("/characters", {
                params: {
                    offset: offsetCharacters + 40,
                }
            });
            setOffsetCharacters(offsetCharacters + 40);
            setCharacterList(data.data.results);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }


    const getOneHero = async (character: BaseSyntheticEvent) => {
        const name = character.target.value;
        try {
            const { data } = await api.get("/characters", {
                params: {
                    nameStartsWith: name,

                }
            });
            setCharacterList(data.data.results);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }

        setTimeout(() => {
            if (name.length > 2) {
                const newHero = characterList?.filter((filteredCharacter) => filteredCharacter.name.includes(name));
                setCharacterSelected(newHero);
            }

        }, 1000)
    }




    return (
        <CharacterContext.Provider value={{ characterList, setCharacterList, characterSelected, setCharacterSelected, offsetCharacters, setOffsetCharacters, getMoreCharacters, isLoading, setIsLoading, getOneHero, comicId, comicBg }}>
            {children}
        </CharacterContext.Provider>
    )
}