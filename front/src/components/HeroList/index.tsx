import { useContext } from "react";
import { CharacterContext } from "../../provider";
import { Card } from "./Card";


export const HeroList = () => {
    const { characterList, characterSelected, isLoading } = useContext(CharacterContext);

    console.log(characterSelected);
    
    return (
        <div>
            Lista

            <ul>
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
    )
}