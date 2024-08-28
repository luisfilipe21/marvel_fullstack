import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { UpdateHero } from "../pages/UpdateHero"

export const RoutesMain = () => {
  
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/updateHero" element={<UpdateHero/> } />
            </Routes>
        </>
    )
}