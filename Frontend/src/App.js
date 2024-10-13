import { useState } from "react";
import "./App.css";
import AutoComplete from "./components/AutoComplete/AutoComplete";
function App() {
  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
  
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.recipes;
  };

  return (
<div>
<AutoComplete
fetchSuggessions={fetchSuggestions}
dataKey={"name"}
customLoading={"Loading..."}
/>
</div>
  );
}

export default App;
