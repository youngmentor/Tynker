import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
   <nav className='NavBarMain'>
    <Link to='/'>Home</Link>
    <Link to='/ProductPage'>Productpage</Link>
    <Link to='/Signup'>Signup</Link>
   </nav>
  )
}

export default NavBar