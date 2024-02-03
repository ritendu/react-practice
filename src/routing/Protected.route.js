import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children})=>{
 const user = localStorage.getItem('user')
 
    if(!user){
        return <Navigate to="/login" replace />;
    }
    else {
        return children
    }
    
}

export default ProtectedRoute