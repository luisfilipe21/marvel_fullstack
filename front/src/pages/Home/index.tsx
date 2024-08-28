import { useContext } from "react"
import { HeroList } from "../../components/HeroList"
import { FormCreateHero } from "../../form/FormCreateHero"
import { CharacterContext } from "../../provider"
import { Header } from "../../components/Header"

export const Home = () => {

    const { getMoreCharacters} = useContext(CharacterContext);

    return (
        <section>
            <Header />
            <button onClick={getMoreCharacters}>More characters</button>
            <HeroList />
            <FormCreateHero />
        </section>
    )
}