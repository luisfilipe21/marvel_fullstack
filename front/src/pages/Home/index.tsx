import { HeroList } from "../../components/HeroList"
import { Header } from "../../components/Header"

export const Home = () => {
    
    return (
        <>
            <Header />
            <main className=" h-auto flex flex-col items-center justify-center">
                <HeroList />
            </main>
        </>
    )
}