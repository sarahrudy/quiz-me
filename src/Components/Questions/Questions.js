import React, { useEffect, useContext } from 'react'
import Card from '../Card/Card'
import '../Questions/Questions.css'
import { fetchData } from '../../apiCalls'
import { DifficultyContext } from '../../context/DifficultyContextProvider'
import submitBtn from '../../Images/submit_btn.png'

const Questions = () => {
  const difficulty = useContext(DifficultyContext)
  
  useEffect(() => {
    fetchData(difficulty.difficulty)
    .then(data => difficulty.setQuestions(data))
  }, [])

  const triviaQuestions = difficulty.questions.map(question => {
    return (
      <Card 
        question = {question}
        position = {difficulty.questions.indexOf(question)}
        length = {difficulty.questions.length}
        key = {difficulty.questions.indexOf(question)}
      />
    )
  })

  return(
    <div className="questions-container">
      { triviaQuestions }
      <div className="submit-container">
        <img src= { submitBtn } className="submit-btn" alt="submit button"></img>
      </div>
    </div>
  )
}

export default Questions