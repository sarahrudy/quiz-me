import { DifficultyContext } from "../../context/DifficultyContextProvider"
import React, { useContext } from "react"
import '../Score/Score.css'

const Score = () => {
  const difficulty = useContext(DifficultyContext)

  return (
    <div className="score-container">
      <h2>WHAT IS UP GIRRRRRRLLLL</h2>
      <h2>DAMN You got {difficulty.userScore[0]} out of {difficulty.userScore[1]}</h2>
    </div>
  )
 }

 export default Score