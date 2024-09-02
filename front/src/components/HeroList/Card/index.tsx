import { IContextData } from "../../../provider"

interface ICharacterData {
    character: IContextData;
}

export const Card = ({ character }: ICharacterData) => {

    return (
        <li className="bg-gray-300 gap-4 p-4 rounded-xl w-72">
            <div className="flex flex-col justify-center items-center text-white gap-4">
                <h1 className="text-2xl font-extrabold ">
                    {character.name}
                </h1>

                <figure className="w-56 lg:w-72 px-2 flex flex-col md:flex-wrap ">
                    <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={character.name}
                        title={character.name}
                        className="rounded-md max-h-96"
                    />
                    <figcaption className="mt-4 font-bold text-black text-sm">
                        <p>
                            {character.description}
                        </p>
                    </figcaption>
                </figure>
            </div>
        </li>
    )
}