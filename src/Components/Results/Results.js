import React, { useContext } from 'react'
import '../Results/Results.css'
import { DifficultyContext } from '../../context/DifficultyContextProvider'
import { Link } from 'react-router-dom'

const Results = () => {
  const difficulty = useContext(DifficultyContext)

  return (
    <article>
      <div className="results-container">
      <h1>YOU'RE SO SMART</h1>
      { difficulty.userScore && <p>You got {difficulty.userScore[0]} out of {difficulty.userScore[1]} correct!</p> }
      </div>
      <div>
      <Link to='/'> 
      <button>PLAY AGAIN</button>
      </Link>
      </div>
    </article>
  )
}

export default Results 