
import './App.css';
import ComponentA from './components/ComponentA';
import {createContext} from 'react';
const MyContext = createContext();
const MyContexts = createContext()
function App() {

  return (
 <>
 <MyContext.Provider value={"Dummy"}>
  <MyContexts.Provider value={"World"}>
  <ComponentA></ComponentA>
  </MyContexts.Provider>
 
 </MyContext.Provider>

 </>
  
  );
}

export default App;
export {MyContext,MyContexts}