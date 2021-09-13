import React from 'react'
import easy from '../../Images/easy_btn.png'
import medium from '../../Images/medium_btn.png'
import hard from '../../Images/hard_btn.png'
import { Link } from 'react-router-dom'
import '../TriviaDifficulty/TriviaDifficulty.css'

const TriviaDifficulty = () => {

  return(
    <div className="button-container">
      <Link to="/questions/easy">
        <img src= { easy } className="button"></img>
      </Link>
      <Link to="/questions/medium">
        <img src= { medium } className="button"></img>
      </Link>
      <Link to="/questions/hard">
        <img src= { hard } className="button"></img>
      </Link>
    </div>
  )
}

export default TriviaDifficulty