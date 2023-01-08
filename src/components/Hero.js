import { useContext } from "react"
import { AppContext } from "../context/context"
const Hero = ()=>{
const context = useContext(AppContext);

    return (
        <h2>Hero</h2>
    )
}

export default Hero