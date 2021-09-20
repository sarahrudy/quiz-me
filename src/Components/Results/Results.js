import React, { useContext } from 'react'
import '../Results/Results.css'
import { DifficultyContext } from '../../context/DifficultyContextProvider'

const Results = () => {
  const difficulty = useContext(DifficultyContext)

  return (
    <div className="results-container">
      <h1>YOU'RE SO SMART</h1>
      <p>You got {difficulty.userScore[0]} out of {difficulty.userScore[1]} correct!</p>
    </div>
  )
}

export default Results 