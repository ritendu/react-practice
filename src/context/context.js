import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);

    const openSidebar = ()=>{
        setIsSidebarOpen(true);
    }
    const openSubmenu =()=>{
        setIsSubmenuOpen(true)
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
    }
    const closeSubmenu = ()=>{
        setIsSubmenuOpen(false)
    }
     return <AppContext.Provider value={{openSidebar,isSidebarOpen,isSubmenuOpen,openSubmenu,closeSidebar,closeSubmenu}}>
        {children}
    </AppContext.Provider>

    
}

export {AppContext,AppProvider}