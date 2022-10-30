
import './App.css';
import ComponentA from './components/ComponentA';
import {createContext} from 'react';
const MyContext = createContext();

function App() {

  return (
 <>
 <MyContext.Provider value={"Hello"}>
 <ComponentA></ComponentA>
 </MyContext.Provider>

 </>
  
  );
}

export default App;
export {MyContext}