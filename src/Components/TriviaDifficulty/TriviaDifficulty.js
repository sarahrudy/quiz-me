import React from 'react'
import easy from '../../Images/easy_btn.png'
import medium from '../../Images/medium_btn.png'
import hard from '../../Images/hard_btn.png'
import { DifficultyContext } from '../../context/DifficultyContextProvider'
import { Link } from 'react-router-dom'

import '../TriviaDifficulty/TriviaDifficulty.css'

const TriviaDifficulty = () => {

  return(
    <DifficultyContext.Consumer>
      {(context) => {
        const { selectDifficulty } = context
        return (
          <div className="button-container">
            <Link to="/questions/easy">
              <img src= { easy } className="button" alt="easy button" onClick={() => selectDifficulty('easy')}></img>
            </Link>
            <Link to="/questions/medium">
              <img src= { medium } className="button" alt="medium button" onClick={() => selectDifficulty('medium')}></img>
            </Link>
            <Link to="/questions/hard">
              <img src= { hard } className="button" alt="hard button" onClick={() => selectDifficulty('hard')}></img>
            </Link>
          </div>
        )
      }}
    </DifficultyContext.Consumer>
  )
}

export default TriviaDifficulty