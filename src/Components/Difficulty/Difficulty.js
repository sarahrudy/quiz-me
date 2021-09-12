import React from 'react'
import '../Difficulty/Difficulty.css'
import easy from '../../Images/easy_btn.png'
import medium from '../../Images/medium_btn.png'
import hard from '../../Images/hard_btn.png'

const Difficulty = () => {

  return(
    <div className="button-container">
      <img src= { easy } className="button"></img>
      <img src= { medium } className="button"></img>
      <img src= { hard } className="button"></img>
    </div>
  )
}

export default Difficulty