

import './App.css';
import ContextAPI from './components/ContextAPI';
import menu from './components/data';
import { useState,useContext } from 'react';
function App() {
const [people,setPeople] = useState(menu);
const removeItem = (id)=>{
const newPeople = people.filter((people)=>{return people.id!==id});
setPeople(newPeople)
}
  return (
 <>
<ContextAPI people={people} removeItem={removeItem}></ContextAPI>
 </>
  
  );
}

export default App;
