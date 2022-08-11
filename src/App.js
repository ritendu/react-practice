
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';
import axios from 'axios';
const url = 'https://course-api.com/react-tours-project'

function App() {
const [loading,setLoading] = useState(true);
const [tours,setTours] = useState([]);
const fetchTours = async()=>{
  setLoading(true);
  try {
    const tours = await axios(url);

    setLoading(false);
    setTours(tours);
    
  } catch (error) {
    console.log()
  }
}
useEffect(()=>{
  fetchTours()
},[])
if(loading){
  return (
    <Loading></Loading>
  )
}

  return (
  <>
<Tours tours={tours}></Tours>
  </>
  
  );
}

export default App;
