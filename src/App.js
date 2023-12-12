
import { useEffect, useState } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import axios from "axios"
import { Container } from '@mui/material';
import Header from './components/Header/Header';
function App() {
const [meanings,setMeanings] = useState([]);
const [category, setCategory] = useState("en");
const [word, setWord] = useState("");
  const fetchApi = async()=>{
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      console.log(data.data,"??????????")
    setMeanings(data.data);
    } catch (error) {
      
    }
    
  }
useEffect(()=>{
  console.log(category,"??????")
fetchApi()
},[category,word])
  return (
<div className='App' style={{height:'100vh', backgroundColor:"#282c34", color:"white"}}>
 <Container maxWidth="md" style={{display:"flex",flexDirection:"column", height:"100vh"}}>
<Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
 </Container>
</div>


  );
}

export default App;
