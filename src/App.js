
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Jobs from './components/Jobs';
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading,setLoading]= useState(true);
  const [jobs,setJobs] = useState([])
const fetchJobs = async()=>{
  setLoading(true)
  try {
    const newJobs = await axios.get(url);  
    setJobs(newJobs.data);
    setLoading(false)
  } catch (error) {
    setLoading(true)
  }

}
useEffect(()=>{
fetchJobs()
},[])
if(loading){
  return (
    <Loading></Loading>
  )
}
return (
  <>
<Jobs jobs={jobs}></Jobs>  
  </>
)
}

export default App;
