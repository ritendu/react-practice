import React from 'react'

export const Tour = ({name,info,image}) => {

  return (
    <>
    <img src={image} alt={name}></img>
    <h1>{name}</h1>
    </>
  )
}
