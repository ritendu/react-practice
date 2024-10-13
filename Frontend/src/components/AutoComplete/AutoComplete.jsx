import { useEffect, useState } from 'react'
import '../style.css'
import SuggestionsList from '../SuggestionsList/SuggessionList';

const AutoComplete = ({fetchSuggessions,customLoading,dataKey})=>{
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [inputValue,setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const handleInputChange = (event)=>{
     setInputValue(event.target.value)   
    }
    const handleSuggestionClick = (suggestion) => {
        setInputValue(dataKey ? suggestion[dataKey] : dataKey);
        // onSelect(suggestion);
        setSuggestions([]);
      };
    const getSuggessions = async(data)=>{
        setLoading(true)
        setError(null)
        if(fetchSuggessions){
          try {
            const result = await fetchSuggessions(data)  
            setSuggestions(result)
            setLoading(false)
          } catch (error) {
            setError("Failed to fetch suggestions");
            setSuggestions([])  
          }  
        
        }
        else{
          setSuggestions([])  
        }
    }

    useEffect(()=>{
        if(inputValue?.length>=1){
            getSuggessions(inputValue)      
        }
     else{
        setSuggestions([]);
     }
    },[inputValue])

    console.log(inputValue,"inputValue")
    return (
        <div className="container">
        <input 
          type="text"
          value={inputValue}
        //   placeholder={placeholder}
        //   style={customStyles}
        //   onBlur={onBlur}
        //   onFocus={onFocus}
          onChange={handleInputChange}
        />
  
        {(suggestions.length > 0 || loading || error) && (
          <ul className="suggestions-list" role="listbox">
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">{customLoading}</div>}
            <SuggestionsList
            //   dataKey={dataKey}
            //   highlight={inputValue}
              suggestions={suggestions}
              onSuggestionClick={handleSuggestionClick}
            />
          </ul>
        )}
      </div>
    )
}

export default AutoComplete