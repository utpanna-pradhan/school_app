import React from 'react';
import logo from '../images/logo.png';
import '../Stylesheet/Header.css';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
        <div className="head_container pt-2 bg-dark text-white">
            <nav className='d-flex header_nav'>
                <li><img src={logo} alt=''  width={65} height={65}
                className='rounded-circle'/></li>
                <li> 
                    <h1 className='ps-3'>Springdale Public School</h1></li>
                      <li >
                 <Link to="/" className=''>Home</Link>
               </li>
               <li >
                 <Link to="/about" className=''>About</Link>
               </li>
                <li>
                 <Link to="/academics">Academics</Link>
               </li>
                <li>
                 <Link to="/admission">Admission</Link>
               </li>
                 <li>
                 <Link to="/faculty">Faculty</Link>
               </li>
                <li>
                 <Link to="/student">Student</Link>
               </li>
                <li>
                 <Link to="/gallery">Gallery</Link>
               </li>
                 <li>
                 <Link to="/contact">Contact</Link>
               </li>
            
            </nav>
             
           
        </div>
   
    </div>
  )
}

export default Header