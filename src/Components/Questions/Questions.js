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

  const validateAnswers = () => {
    const scoreData = difficulty.correctAnswers.reduce((arr, elem, i) => {
      arr[1] = difficulty.correctAnswers.length
      if (elem === difficulty.submittedAnswers[`q${i}`]) {
        arr[0]++
      }

      return arr
    }, [0, 0])
    
    difficulty.submitUserScore(scoreData)
  }

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
        <img src= { submitBtn } className="submit-btn" alt="submit button"
        onClick={() => validateAnswers()}></img>
      </div>
    </div>
  )
}

export default Questions