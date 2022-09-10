

import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import SharedLayout from './components/SharedLayout';

function App() {

  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<div><SharedLayout></SharedLayout></div>}>
    <Route index element={<Home></Home>}></Route>
  <Route path='/about' element={<div><About/></div>}/>
  <Route path='/products' element={<div><Products></Products></div>}/>
  <Route path='*' element={<div><PageNotFound></PageNotFound></div>}/>
  </Route>
 </Routes>
 </BrowserRouter>
  
  );
}

export default App;
