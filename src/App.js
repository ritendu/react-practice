
import './App.css';
import { useState,useMemo } from 'react';
function App() {
const [state,setState] = useState(0);
const [show,setShow] = useState(false)

const handleChange = ()=>{
setState(state+1)
}
const loop = (state)=>{
for(let i=0;i<=100000000;i++){

}

return state;
}
const checkData = useMemo(()=>{
  return loop(state)
 },[state])
  return (
<>
<button onClick={handleChange}>Counter</button>
{checkData}
<button onClick={()=>setShow(!show)}>{show?'Click Me':'Send Me'}</button>
</>



  );
}

export default App;
