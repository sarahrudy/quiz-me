import React, { useContext } from 'react'
import playAgain from '../../Images/playagain_btn.png'
import resultPrompt from '../../Images/resultprompt.png'
import '../../Images/cloud.png'
import '../Results/Results.css'
import { DifficultyContext } from '../../context/DifficultyContextProvider'
import { Link } from 'react-router-dom'

const Results = () => {
  const difficulty = useContext(DifficultyContext)

  return (
      <div className="results-container">
        <img src={ resultPrompt } className='result-prompt'></img>
        <div>
          { difficulty.userScore && <p className='user-prompt'>You got {difficulty.userScore[0]} out of {difficulty.userScore[1]} correct!</p> }
        </div>
        <Link to='/'><img src= { playAgain } className="play-again-btn" onClick={ () => difficulty.clearInputs()}></img></Link>
      </div>
  )
}

export default Results 