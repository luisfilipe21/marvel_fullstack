import { HeroList } from "../../components/HeroList"
import { Header } from "../../components/Header"

export const Home = () => {
    
    return (
        <>
            <Header />
            <main className=" h-auto flex flex-col items-center justify-center">

                {/* {comicId && comicId.digitalId && comicId.map(images => {
                    <div>
                        <h1>aqui</h1>
                        <a href={`${images.path}.${images.extension}`} target="_blank">Link </a>
                    </div>
                })

                } */}

                <HeroList />
            </main>
        </>
    )
}