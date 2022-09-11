import { useState,useRef } from "react"

const ShortCircuitEvaluation = ()=>{
const refContainer = useRef(null);
const handleSubmit = (e)=>{
e.preventDefault();
console.log(refContainer.current.value);

}
    return (
<form onSubmit={handleSubmit}>
<input type="text" ref={refContainer}/>
<button type="submit">submit</button>
</form>
    )
}

export default ShortCircuitEvaluation