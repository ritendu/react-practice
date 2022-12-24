import React, { useState }  from 'react'
const initialState={
    name:''
}
const AppContext = React.createContext(initialState);
const AppProvider = ({children})=>{
const [name,setname] = useState('Hello World')
    return <AppContext.Provider value={{name,setname}}> {children}</AppContext.Provider>

}

export {AppProvider,AppContext}