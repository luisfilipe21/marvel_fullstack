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

        <header className="flex flex-col justify-center items-center p-8">
            <h1 className= {`${title} bg-Red-0 `}>MARVEL</h1>
            <div className="flex flex-col justify-center items-center text-white mt-8">
                <p className="pb-4 text-xl tracking-tight">Qual herós você está procurando?</p>
                <Inputs type="text" onChange={getOneHero} />
            </div>
        </header>
    )
}