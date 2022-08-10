import { useState } from "react"
const ComplexCounter = ()=>{
const [count,setCount] = useState(0);
const increment=()=>{
    setTimeout(()=>{
setCount(count+1);
    },2000)
}
    return(
        <>
       <h2>{count}</h2>
       <button type="button"  onClick={increment}>Increment</button>
        </>
    )
}

export default ComplexCounter