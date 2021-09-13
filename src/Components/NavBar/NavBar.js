import React from 'react'
import logo from '../../Images/logo.png'
import '../NavBar/NavBar.css'

const NavBar = () => {

  return(
    <nav>
      <img src={ logo } className="logo" alt="quiz me logo"></img>
    </nav>
  )
}

export default NavBar