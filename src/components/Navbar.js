import logo from '../logo.svg'
import { FaBars, FaTwitter } from 'react-icons/fa';
const Navbar = ()=>{
return <nav>
   <div className='nav-center'>
    <div className='nav-header'>
        <img src={logo} alt="logo"/>
        <button className='nav-toggle'>
            <FaBars />
          </button>
    </div>
    <div className='links-container show-container'></div>
    <ul className='links'>
        <li>
            <a href="#">home</a>
        </li>
        <li>
            <a href="#">about</a>
        </li>
        <li>
            <a href="#">contact</a>
        </li>
        <li>
            <a href="#">products</a>
        </li>
    </ul>
   <ul className='social-icons'>
    <li>
        <a href='https://twitter.com'>
            <FaTwitter></FaTwitter>
        </a>
    </li>
   </ul>
   </div>
</nav>
}

export default Navbar