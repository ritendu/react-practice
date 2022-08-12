import React from 'react'
import { Tour } from './Tour'
const Tours = ({tours,removeTour})=>{
  console.log(tours,"tours")
   
    return (
        <>
        {tours.map(tour=>{
            console.log(tour,"tour")
            return (
                <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
            )
        })}
        </>
    )
}

export default Tours