

import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'
import PageNotFound from './components/PageNotFound';

function App() {

  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<div><Home/></div>}/>
  <Route path='/about' element={<div><About/></div>}/>
  <Route path='*' element={<div><PageNotFound></PageNotFound></div>}/>
 </Routes>
 </BrowserRouter>
  
  );
}

export default App;
