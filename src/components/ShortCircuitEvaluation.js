import { useState } from "react"

const ShortCircuitEvaluation = ()=>{
    const [text,setText]= useState('peter');
    const [another,setAnother]= useState('Hellp')
    return (
        <div>{text || 'Hello World'}
        {another && 'Blob'}</div>
    )
}

export default ShortCircuitEvaluation