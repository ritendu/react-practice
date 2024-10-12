import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import axios from "axios"
const Form = ()=>{
    const [title,setTitle] = useState("")
    const { mutate: createTask, isPending } = useMutation({
      mutationFn: () => axios.post("http://localhost:4000/v1/create/task", { title }),
      // Set this option to false to prevent automatic execution
      manual: true,
    });
  
  console.log(title,"title")
    const handleSubmit = (e)=>{
      console.log("Hello World")
        e.preventDefault()
        createTask()
    }
    return (
        <h1>
       <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)}
       name="title" required/>
       <button type="submit" disabled={isPending}>Submit</button>
       </form>
        </h1>
    )
}

export default Form