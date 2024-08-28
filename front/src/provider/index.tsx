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
}

export const CharacterContext = createContext({} as IContextType);

export const CharacterProvider = ({ children }: IContextProps) => {

    const [characterList, setCharacterList] = useState<IContextData[]>();
    const [characterSelected, setCharacterSelected] = useState<IContextData[]>();
    const [offsetCharacters, setOffsetCharacters] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const { data } = await api.get("/characters");
                setCharacterList(data.data.results);
                setIsLoading(false);
            } catch (error) {
                console.error(error)
            }
        }
        getCharacters();
    }, [])

    const getMoreCharacters = async () => {
        setIsLoading(true);

        try {
            const { data } = await api.get("/characters", {
                params: {
                    offset: offsetCharacters,
                }
            });
            setOffsetCharacters(offsetCharacters + 20);
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
        if (name.length > 2) {

            const newHero = characterList?.filter((filteredCharacter) => filteredCharacter.name.includes(name));
            setCharacterSelected(newHero);
        }
    }


    return (
        <CharacterContext.Provider value={{ characterList, setCharacterList, characterSelected, setCharacterSelected, offsetCharacters, setOffsetCharacters, getMoreCharacters, isLoading, setIsLoading, getOneHero }}>
            {children}
        </CharacterContext.Provider>
    )
}