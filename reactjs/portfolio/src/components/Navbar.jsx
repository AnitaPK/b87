import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='menus'>
            <li className='navList'><a href="#" className='navItem'>HOME</a></li>
            <li className='navList'><a href="#" className='navItem'>QUALIFICATION</a></li>
           <li className='navList'><a href="#" className='navItem'>PROJECTS</a></li>
            <li className='navList'><a href="#" className='navItem'>CONTACT ME</a></li>
            <li className='navList'><a href="#" className='navItem'>ABOUT ME</a></li>
        </ul>

    </nav>
  )
}

export default Navbar