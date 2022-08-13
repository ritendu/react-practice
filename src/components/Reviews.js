import { useState } from 'react';
import people from './data';
export const Reviews = ()=>{
    const [index,setindex] = useState(0);
    const {id,name,job,image,text} = people[index];
    const previousButton = ()=>{
       
        if(index>=1){
            setindex(index-1)
        }
        else if(index<=0){
setindex(people.length-1)
        }
        
    }

    const nextButton = ()=>{
        if(index>=people.length-1){
            setindex(0)
        }
        else{
            setindex(index+1)
        }
    }

const suprise = ()=>{
    
    const random = Math.floor(Math.random()*people.length);
    console.log(random,"random")
    if(random>people.length-1){
        setindex(0)
    }
    else if(random<=people.length-1){
        setindex(random)
    }
    
}    
    return (
        <div>
            <img src={image} alt={name}/>
             
            <p>{name}</p>
            <p>{job}</p>
            <p>{text}</p>
            <button onClick={previousButton}>previous</button>
            <button onClick={nextButton}>next</button>
            <button onClick={suprise}>Random Review</button>
        </div>
    )
}
