import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='menus'>
        <li className='navList'>
          <Link to="/" className='navItem'>HOME</Link></li>
        <li className='navList'>
          <Link to="/qualification" className='navItem'>QUALIFICATION
          </Link></li>
        <li className='navList'>
          <Link to="/projects"
            className='navItem'>PROJECTS</Link></li>
        <li className='navList'>
          <Link to="/contact_me" className='navItem'>CONTACT ME</Link></li>
        <li className='navList'>
          <Link to="/about_me" className='navItem'>ABOUT ME</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar