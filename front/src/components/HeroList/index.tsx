import { useContext } from "react";
import { CharacterContext } from "../../provider";
import { Card } from "./Card";


export const HeroList = () => {
    const { getMoreCharacters, characterList, isLoading } = useContext(CharacterContext);

    return (
        <section className="flex flex-col justify-center items-center w-full md:max-w-xl">
            <button 
            className="text-white text-lg font-semibold border-2 border-yellow-500 bg-yellow-500 p-2 rounded-3xl hover:bg-gray-400 hover:text-white"
             onClick={getMoreCharacters}>
                More characters
            </button>

            <div >
                Lista

                <ul className="flex flex-col gap-4 max-w-xl w-72 md:flex-row md:flex-wrap lg:w-96 ">
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