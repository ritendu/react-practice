import { useState } from "react";
import "./App.css";
import axios from "axios";
import AutoComplete from "./components/AutoComplete/AutoComplete";
function App() {
  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get(`http://localhost:4000/v1/get/tasks?search=${query}`)  
      return response.data.data; 
    } catch (error) {
      
    }  
  };

  return (
<div>
<AutoComplete
fetchSuggessions={fetchSuggestions}
dataKey={"title"}
customLoading={"Loading..."}
/>
</div>
  );
}

export default App;
