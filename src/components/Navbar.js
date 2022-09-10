import { Link, Outlet } from "react-router-dom"

const Navbar = ()=>{
return <div>
<Link to="/">Home</Link>
<Link to='/about'>About</Link>
<Link to= "/products">Products</Link>

<Outlet></Outlet>
</div>
}

export default Navbar