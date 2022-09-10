import {  Outlet } from "react-router-dom"
import StyledNavbar from "./StyledNavbar"

const SharedLayout = ()=>{
return (
    <div>
        <StyledNavbar></StyledNavbar>
        <Outlet></Outlet>
    </div>
)
}

export default SharedLayout