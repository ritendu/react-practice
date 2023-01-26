import { useEffect, useReducer, useState } from "react";
import "./App.css";


  
const reducer = (state,action)=>{

  if(action.type === 'submit'){
  
 
//   console.log(action.payload,'////////')
const item = {name:action.payload}
    const obj ={...state,name:action.payload,list:[...state.list,item]};
    console.log(obj,"???????????")
    return obj;
  }
  
    }
function App() {
   
    const initialState = {
        name:'',
        list:[]
    }
const [name,setName] = useState('');
const [state,dispatch]=useReducer(reducer,initialState);
const handleSubmit = (e)=>{
e.preventDefault();
console.log(name,">>>>>>>>>>>>>>")
    dispatch({type:'submit',payload:name})
}
return (
<>
<form onSubmit={handleSubmit}>
<input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
<button type="submit">submit</button>
</form>
</>
)
}

export default App;
