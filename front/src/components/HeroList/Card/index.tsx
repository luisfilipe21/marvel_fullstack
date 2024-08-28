import { IContextData } from "../../../provider"

interface ICharacterData {
    character: IContextData;
}

export const Card = ({character}: ICharacterData) => {

    return (
        <li>
            <div>
                <h1>
                    {character.name}
                    {character.description}
                </h1>
                <figure>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} title={character.name} />
                </figure>
            </div>
        </li>
    )
}