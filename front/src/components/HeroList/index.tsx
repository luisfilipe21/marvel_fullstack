import { useContext } from "react";
import { CharacterContext } from "../../provider";
import { Card } from "./Card";


export const HeroList = () => {
    const { getMoreCharacters, characterList, isLoading } = useContext(CharacterContext);

    return (
        <section className="flex flex-col box-border justify-center items-center w-full max-w-xl md:max-w-7xl">

            <button
                className="my-8 text-white text-lg font-semibold border-2 border-Yellow-0 bg-Yellow-0 p-2 rounded-3xl hover:bg-Blue-0 hover:border-Blue-0 hover:text-black"
                onClick={getMoreCharacters}>
                More characters
            </button>

            <div className="w-full max-w-5xl flex flex-wrap">
                Lista

                <ul className="flex flex-wrap justify-center gap-4">
                    {isLoading ?
                        <h1>
                            Carregando.........
                        </h1>

                        : characterList && characterList.map(character =>
                            <Card
                                key={character.id}
                                character={character}

                            />
                        )}
                </ul>
            </div>
        </section>
    )
}