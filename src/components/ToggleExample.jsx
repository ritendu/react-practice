import { useState } from "react"
import Toggle from "./Toggle"
const ToggleExample = ()=>{
    const {toggle,show} =Toggle(true)
    return(
        <div>
            <button onClick={toggle}>Click Me</button>
            {show && <h1>Hello World.</h1>}
        </div>
    )
}

export default ToggleExample