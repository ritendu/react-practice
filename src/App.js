
import { useEffect, useState } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import axios from "axios"
import { Container } from '@mui/material';
function App() {
const [meanings,setMeanings] = useState([]);

  const fetchApi = async()=>{
    try {
      const data = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
    setMeanings(data.data);
    } catch (error) {
      
    }
    
  }
useEffect(()=>{
fetchApi()
},[])
  return (
<div className='App' style={{height:'100vh', backgroundColor:"#282c34"}}>
 <Container maxWidth="md">
Dictionary
 </Container>
</div>


  );
}

export default App;
