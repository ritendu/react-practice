import { useEffect, useReducer, useState } from "react";
import "./App.css";



function App() {
    const initialstate =0
    const reducer = (state,action)=>{
        if(action.type === 'increment'){
            return state+1
        }
if(action.type === 'decrement'){
    return state-1
}
    }
    // const [count,setCount] = useState(0);
    const [state,dispatch]=useReducer(reducer,initialstate)
return (
<>
{state}
<br/>
<button onClick={()=>dispatch({type:'increment'})}>increment</button>
<button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
</>
)
}

export default App;
