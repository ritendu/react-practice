import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children})=>{
   const signed = true;
    if(!signed){
        return <Navigate to="/login" replace />;
    }
    else {
        return children
    }
    
}

export default ProtectedRoute