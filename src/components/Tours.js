import React from 'react'
import { Tour } from './Tour'
const Tours = ({tours})=>{
    const tour_s = tours.data;
   
    return (
        <>
        {tour_s .map(tour=>{
            return (
                <Tour key={tour.id} {...tour}></Tour>
            )
        })}
        </>
    )
}

export default Tours