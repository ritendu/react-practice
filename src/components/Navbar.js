import { useContext } from "react";
import { AppContext } from "../context/context";
import {FaBars} from 'react-icons/fa'
import logo  from '../images/logo.svg'
const Navbar = ()=>{
const {openSidebar,openSubmenu} = useContext(AppContext);
const displaySideMenu = (e)=>{
  console.log('Hello World')
openSubmenu()
}
    return (
        <nav className='nav'>
          <div className='nav-center'>
            <div className='nav-header'>
              <img src={logo} className='nav-logo' alt='' />
              <button className='btn toggle-btn' onClick={openSidebar}>
                <FaBars />
              </button>
            </div>
            <ul className='nav-links'>
              <li>
                <button className='link-btn' onMouseOver={displaySideMenu}>
                  products
                </button>
              </li>
              <li>
                <button className='link-btn' onMouseOver={displaySideMenu}>
                  developers
                </button>
              </li>
              <li>
                <button className='link-btn' onMouseOver={displaySideMenu}>
                  company
                </button>
              </li>
            </ul>
            <button className='btn signin-btn'>Sign in</button>
          </div>
        </nav>
      );
        
    
}

export default Navbar