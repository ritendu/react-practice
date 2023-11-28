
import './App.css';
import { useState,useMemo, useEffect } from 'react';
import Todo from './Todo';
function App() {
const [arr,setArr] = useState([]);
const [count,setCount] = useState(0);


const increaseCount = ()=>{
setCount(count + 1)
}



  return (
<>
<Todo arr={arr} setArr={setArr}/>
<button onClick={increaseCount}>Increase Count</button>
{count}
</>



  );
}

export default App;
