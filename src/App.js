
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import NoPageFound from './components/NoPageFound';
import Navbar from './components/Navbar';
function App() {

  return (
<Routes>
  <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path="*" element= {<NoPageFound/>}/>
  </Route>
</Routes>


  );
}

export default App;
