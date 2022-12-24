import { useState,useContext } from 'react';
import {AppContext} from '../context/userContext'
const ComponentA = ()=>{
const {name,setname} = useContext(AppContext)
    return (
      <div>
         {name}
<h1>Component A</h1>
<button onClick={()=>{setname('Hello')}}>set name</button>
      </div>

    )
}

export default ComponentA