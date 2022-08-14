import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Questions = ({title,info})=>{
    const [showInfo,setShowInfo]= useState(false);
    return(
        <div>
            <p>{title}</p>
            <button onClick={()=>setShowInfo(!showInfo)}>
            {showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}
            </button>

            <p>{showInfo && info}</p>
        </div>
    )
}
 
export default Questions