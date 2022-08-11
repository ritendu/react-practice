
import { useState } from 'react';
import './App.css';
import { data } from './components/data';
import List from './components/List';
function App() {
 const [people,setPeople] = useState(data);

  return (
  <><List people={people}/>
  <button type='button' onClick={()=>{setPeople([])}}>Click Me</button>
  </>
  
  );
}

export default App;
