import { useEffect, useReducer, useState } from "react";
import "./App.css";


  
const reducer = (state,action)=>{
  console.log(state.count+1,action);
  if(action.type === 'increment'){
    const obj ={...state,count:state.count+1}
    return obj;
  }
  
    }
function App() {
   
    const initialState = {
        count:0
    }

const [state,dispatch]=useReducer(reducer,initialState);
const handle = ()=>{
    dispatch({type:'increment'})
}
return (
<>
{state.count}
<button onClick={handle}>increment</button>
</>
)
}

export default App;
