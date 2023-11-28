import { useEffect } from "react"

const Todo = ({arr,setArr})=>{
    console.log("Child Render")
    const updateArr = ()=>{
     
setArr([...arr,"New Entry"])
    }
    useEffect(()=>{
// console.log("Child Render")
    },[])
    return (
        <div>
            <button onClick={updateArr}>Click Me</button>
            {arr.length!==0 && arr.map((item,index)=>{
                return (
                    <p key={index}>{`${item}${index}`}</p>
                )
            })}
        </div>
    )
}

export default Todo