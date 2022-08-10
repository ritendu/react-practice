import { useState } from "react";
const State = ()=>{
    
    const [title,setTitle]= useState('Random Title');

   
    return (
        <>
        <h2>{title}</h2>
        <button type="button" onClick={()=>{
            if(title === 'Random Title')
            setTitle('hello world')
            else{
                setTitle('Hello')   
            }
            
            }}>change title</button>
        </>
    )
}

export default State