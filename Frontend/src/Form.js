import { useState } from "react"

const Form = ()=>{
    const [title,setTitle] = useState("")
    const handleSubmit = ()=>{
        e.preventDefault()
    }
    return (
        <h1>
       <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Enter title" required/>
       </form>
        </h1>
    )
}

export default Form