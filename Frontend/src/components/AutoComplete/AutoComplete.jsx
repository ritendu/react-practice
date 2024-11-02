import { useEffect, useState } from 'react'
import '../style.css'
import SuggestionsList from '../SuggestionsList/SuggessionList';
import { useCallback } from 'react';
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";
import { useRef } from 'react';
const AutoComplete = ({fetchSuggessions,customLoading,dataKey,page,setPage,count})=>{
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [inputValue,setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    // const [hasMore,setHasMore] = useState(true)
    const containerRef = useRef(null);
    const handleInputChange = (event)=>{
     setInputValue(event.target.value)   
    }

    // const handleScroll = () => {
    //   console.log("Inside handleScroll");
  
    //   if (
    //     containerRef.current &&
    //     containerRef.current.scrollTop + containerRef.current.clientHeight >=
    //     containerRef.current.scrollHeight - 50
    //   ) {
    //     console.log("Reached bottom, incrementing page:", page);
    //     setPage((prevPage) => prevPage + 1);
    //     getSuggessions(inputValue, page + 1);
    //   }
    // };

    const throttledHandleScroll = throttle(() => {
      console.log("Inside throttled handleScroll");
      
      if (
        containerRef.current &&
        containerRef.current.scrollTop + containerRef.current.clientHeight >=
        containerRef.current.scrollHeight - 50
      ) {
        console.log("Reached bottom, incrementing page:", page);
        setPage((prevPage) => prevPage + 1);
        getSuggessions(inputValue, page + 1);
      }
    }, 1000);
  
    const handleSuggestionClick = (suggestion) => {
        setInputValue(dataKey ? suggestion[dataKey] : dataKey);
        // onSelect(suggestion);
        setSuggestions([]);
      };

      const getSuggessions = async(data,page)=>{

        console.log(count,page,"data and page")
        setLoading(true)
        setError(null)
        if(fetchSuggessions && count>=page){
          try {
            console.log("calling api")
            const result = await fetchSuggessions(data,page);
            console.log(result,"This is the result...")
            setSuggestions((prev) => (page === 1 ? result?.data : [...prev, ...result?.data]));
            setPage(result?.page);
            // setHasMore(result.length>0);
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
      const getSuggestionsDebounced = useCallback(
        debounce(getSuggessions, 1000),
        []
      );


    useEffect(()=>{
        if(inputValue?.length>=1){
            getSuggestionsDebounced(inputValue,page)
            // getSuggessions(inputValue)      
        }
     else{
        setSuggestions([]);
     }
    },[inputValue])

    useEffect(() => {
      if (inputValue?.length >= 1 && page > 1) {
        getSuggessions(inputValue, page);
      }
    }, [page]);

    // useEffect(() => {
    //   const currentContainer = containerRef.current;
  
    //   if (currentContainer) {
    //     console.log("Adding scroll event listener to container");
    //     currentContainer.addEventListener("scroll", handleScroll);
    //   }
  
    //   return () => {
    //     if (currentContainer) {
    //       console.log("Removing scroll event listener from container");
    //       currentContainer.removeEventListener("scroll", handleScroll);
    //     }
    //   };
    // }, [page, loading, hasMore]);

    useEffect(() => {
      const currentContainer = containerRef.current;
      if (currentContainer) {
        currentContainer.addEventListener("scroll", throttledHandleScroll);
      }
      // return () => {
      //   if (currentContainer) {
      //     currentContainer.removeEventListener("scroll", throttledHandleScroll);
      //   }
      // };
    }, [loading, inputValue, page]);
  

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
          <ul className="suggestions-list" role="listbox" ref={containerRef}>
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