import React, { useEffect, useContext } from 'react'
import Card from '../Card/Card'
import '../Questions/Questions.css'
import { fetchData } from '../../apiCalls'
import { DifficultyContext } from '../../context/DifficultyContextProvider'
import submitBtn from '../../Images/submit_btn.png'
import { Link } from 'react-router-dom'

const Questions = () => {
  const difficulty = useContext(DifficultyContext)

  useEffect(() => {
    fetchData(difficulty.difficulty)
    .then(data => difficulty.setQuestions(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    { Object.keys(difficulty.submittedAnswers).length === difficulty.correctAnswers.length  && <Link to='/results'>
          <img src= { submitBtn } className="submit-btn" alt="submit button"
          onClick={() => validateAnswers()}></img>
    </Link> }
        </div>
      </div>
  )
}

export default Questions
