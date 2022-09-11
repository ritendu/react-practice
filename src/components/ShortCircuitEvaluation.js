import { useState } from "react"

const ShortCircuitEvaluation = ()=>{
    const [text,setText]= useState('peter');
    const [another,setAnother]= useState('Hellp')
    const handleClick = (another)=>{
setAnother((another)=>{
    return !another;
})
    }
    return (
        <div>{text || 'Hello World'}
        <button onClick={handleClick}>toggle</button>
        {another? <p>Hello</p>:<p>world</p>}</div>
    )
}

export default ShortCircuitEvaluation