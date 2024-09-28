import { useState } from "react";
import { IContextData } from "../../../provider";
import { FaBookSkull } from "react-icons/fa6";

interface ICharacterData {
    character: IContextData;
}

export const Card = ({ character }: ICharacterData) => {

    console.log(character)
    // console.log(character.comics)

    const limit = 18;
    const [isOpen, setIsOpen] = useState(false);

    const texto = !isOpen && character.name.length > limit ? `${character.name.slice(0, limit)}` : `${character.name}`;

    const open = () => {
        setIsOpen(!isOpen)
    }

    return (
        <li className="bg-gray-300 gap-4 p-2 rounded-xl w-72 box-border">
            <div className="flex flex-col justify-center items-center box-border text-white gap-4 max-w-full text-center">
                <h1 className="text-[23px] font-extrabold mb-4">

                    {texto}
                    {!isOpen && character.name.length > limit && (
                        <span onClick={open} className=" cursor-pointer">...</span>
                    )}

                    {isOpen && (
                        <span onClick={open} className="text-[18px] text-red-300 text-left cursor-pointer">       x</span>
                    )}


                    {/* {character.name.length > limit ?
                        <>
                            {character.name.slice(0, limit)}<span onClick={open}>...</span>
                        </>
                        : <> {character.name}</>} */}
                </h1>

                <div className="w-56 lg:w-72 px-2 flex flex-col md:flex-wrap">
                    <figure className="w-full max-h-96 h-full flex flex-col items-center justify-center">
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            title={character.name}
                            className="rounded-md max-w-60 w-full h-[230px]"
                        />

                        {/* {character && character.collectionURI &&
                            <a href={`${character.collectionURI}`} target="_blank">Aqui porra</a>
                        } */}
                        {/* 
                        {character && character.comics.items.map((item) =>
                            <>
                            <a href={`${item.resourceURI}`} target="_blank">Aqui porra</a>
                            <img src={`${item.resourceURI}`} alt="" />
                            </>
                        )} */}

                        <figcaption className="mb-2 font-bold text-black text-sm">
                            <p className="mt-2 text-xs ">
                                {character.description}
                            </p>

                            {character.urls.map((type, url) => {

                                if (type.type === "detail" && type.url.includes("comics")) {
                                    return (
                                        <a
                                            key={url}
                                            href={character.urls[0].url} target="__blank"
                                            className="font-extrabold text-xl text-Red-0 flex justify-center"
                                        >
                                            <div className="flex items-center">

                                                <FaBookSkull color="black" />
                                                <p className="ml-4 ">

                                                    Comics
                                                </p>
                                            </div>
                                        </a>
                                    )
                                }
                            }
                            )}

                        </figcaption>
                    </figure>
                </div>
            </div>
        </li>
    )
}