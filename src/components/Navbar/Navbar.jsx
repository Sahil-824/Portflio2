import React from 'react'
import logo from "../../assets/logo.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
  <div className="navbar">

    <img src={logo} alt="" className="logo" />

    <ul className='nav-list'>
        <li className='list'>Home</li>
        <li className='list'>About Me</li>
        <li className='list'>Services</li>
        <li className='list'>Portfolio</li>
        <li className='list'>Contact</li>
    </ul>

    <div className="connect">
        <p>Connect With Me</p>
    </div>
  </div>
  )
}

export default Navbar