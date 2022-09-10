import { Link, Outlet } from "react-router-dom"

const SharedLayout = ()=>{
return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Outlet></Outlet>
    </div>
)
}

export default SharedLayout