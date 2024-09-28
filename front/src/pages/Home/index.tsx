import { HeroList } from "../../components/HeroList"
import { Header } from "../../components/Header"
import { useContext } from "react"
import { CharacterContext } from "../../provider"

export const Home = () => {
    const { comicId, comicBg } = useContext(CharacterContext);


    console.log(comicId)
    // console.log(comicBg)

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