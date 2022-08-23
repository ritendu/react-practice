

import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { Home } from './components/Home';
import {About} from './components/About'
import { PageNotFound } from './components/PageNotFound';

function App() {

  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<div><Home></Home></div>}>
  <Route path='about' element={<div><About></About></div>}></Route>
  <Route path='*' element={<div><PageNotFound></PageNotFound></div>} ></Route>
  </Route>
 </Routes>
 </BrowserRouter>
  
  );
}

export default App;
