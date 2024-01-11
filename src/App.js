
import { useEffect, useState } from 'react';
import './App.css';
import { useToggle } from './customHooks/Toggle';

function App() {
  const [value,toggle] =useToggle(false)
return (
  <>
  {value?'true' : 'false'}
  <button onClick={toggle}>click me</button>
  </>

)

}

export default App;
