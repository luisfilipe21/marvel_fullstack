import { useContext } from "react"
import { Inputs } from "../Inputs"
import { CharacterContext } from "../../provider"

export const Header = () => {
    const { getOneHero } = useContext(CharacterContext);

    return (

        <header>
            cabeçalho
            <Inputs type="text" onChange={getOneHero} />
        </header>
    )
}