
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';
import axios from 'axios';
const url = 'https://course-api.com/react-tours-project'

function App() {
const [loading,setLoading]= useState(true);
const [tours,setTours]= useState([]);
const removeTour = (id)=>{
  const newTours = tours.filter((tour)=>tour.id!==id);
  setTours(newTours);
}
const fetchTours = async()=>{
setLoading(true);
try {
  // const response = await fetch(url);
  // const tours = await response.json();
  const tours = await axios(url);
  setLoading(false);
  setTours(tours.data);
} catch (error) {
  console.log(error);
  setLoading(true);
}
}
useEffect(()=>{
fetchTours()
},[])
if(loading){

  return (
    <Loading></Loading>
  );
 
}


  return (
<Tours tours={tours} removeTour={removeTour}></Tours>
  );
}

export default App;
