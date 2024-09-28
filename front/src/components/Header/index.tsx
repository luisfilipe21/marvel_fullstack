import { useContext } from "react"
import { Inputs } from "../Inputs"
import { CharacterContext } from "../../provider"
import clsx from 'clsx';

export const Header = () => {
    const { getOneHero } = useContext(CharacterContext);

    const title = clsx(`
        font-marvel text-7xl text-slate-100 font-extrabold tracking-tight
    `)


    return (

        <header className="w-full bg-heroImage bg-cover">
            <div className="flex flex-col justify-center items-center w-full  h-96 p-8">

                <h1 className={`${title} bg-Red-0 `}>MARVEL</h1>
                <div className="flex flex-col justify-center items-center text-white font-extrabold mt-8">
                    <p className="pb-4 text-xl tracking-tight">Qual herós você está procurando?</p>
                    <Inputs type="text" onChange={getOneHero} />
                </div>
            </div>
        </header>
    )
}