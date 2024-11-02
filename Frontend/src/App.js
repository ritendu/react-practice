import { useState } from "react";
import "./App.css";
import axios from "axios";
import AutoComplete from "./components/AutoComplete/AutoComplete";
function App() {
  const [page,setPage] = useState(1);
  const [count,setCount] = useState(2)
  const fetchSuggestions = async (data,page=1) => {
 
    try {
      const response = await axios.get(`http://localhost:4000/v1/get/tasks?search=${data}&page=${page}`);
      console.log(response,"response")  
      setCount(response?.data?.pages)
      return {data:response?.data.data,count:response?.data?.pages,page:response?.data?.page}; 
    } catch (error) {
      
    }  
  };

  return (
<div>
<AutoComplete
fetchSuggessions={fetchSuggestions}
dataKey={"title"}
customLoading={"Loading..."}
page={page}
setPage={setPage}
count={count}
/>
</div>
  );
}

export default App;
