import { useEffect, useState } from "react"
// import { useState } from "react"

const UseEffect = ()=>{
    const [title,setTitle] = useState('title');

    useEffect(()=>{
console.log('hello ---------------')
    },[title])
    const settitle=()=>{
if(title==='title')
setTitle('random title')
else{
    setTitle('-- title')
}
    }
    return(
        <>
      <h2>{title}</h2>
      <button type="button" onClick={settitle}>Click Me</button>
       </>
    )
}

export default UseEffect