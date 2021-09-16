import React from 'react'
import logo from '../../Images/logo.png'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = () => {

  return(
    <nav>
      <Link to='/'>
        <img src={ logo } className="logo" alt="quiz me logo"></img>
      </Link>
    </nav>
  )
}

export default NavBar