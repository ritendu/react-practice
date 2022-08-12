import React, { useState } from 'react'

export const Tour = ({id,name,info,image,removeTour}) => {
const [readMore,setReadMore] = useState(false)
  return (
    <>
    <img src={image} alt={name}></img>
    <h1>{name}</h1>
    <p>{id}</p>
    <p>{readMore?info:`${info.substring(0,200)}...`}</p>
    <button onClick={()=>{setReadMore(!readMore)}}>Toggle</button>
    <button onClick={()=>{removeTour(id)}}>Not Interested</button>
    </>
  )
}
