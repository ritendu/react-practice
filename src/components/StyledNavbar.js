import { NavLink } from 'react-router-dom';

const StyledNavbar = ()=>{
    return (
        <nav className='navbar'>
        <NavLink
    to='/'
    style={({ isActive }) => {
      return { color: isActive ? 'red' : 'grey' };
    }}
  >
    Home
  </NavLink>
        <NavLink
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          to='/products'
        >
          Products
        </NavLink>
       
      </nav>
    )
}

export default StyledNavbar