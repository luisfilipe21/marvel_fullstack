import { HeroList } from "../../components/HeroList"
import { FormCreateHero } from "../../form/FormCreateHero"
import { Header } from "../../components/Header"

export const Home = () => {


    return (
        <main className="bg-black flex flex-col items-center justify-center">
            <Header />
            <HeroList />
            <FormCreateHero />
        </main>
    )
}