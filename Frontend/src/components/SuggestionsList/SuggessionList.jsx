const SuggestionsList =({suggestions,onSuggestionClick})=>{
  console.log(suggestions,"suggestions")  
  return (
      <>
            {suggestions.map((suggestion, index) => {
        // const currSuggestion = dataKey ? suggestion[dataKey] : suggestion;

        return (
          <li
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="suggestion-item"
            id={`suggestion-${index}`}
          >
           {suggestion?.title} 
          </li>
        );
      })}
      </>
    )
}

export default SuggestionsList
