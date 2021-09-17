import CardInfo from './CardInfo'
import Answers from '../Answers/Answers'
import React, { useContext, useEffect } from "react"
import { DifficultyContext } from "../../context/DifficultyContextProvider"
import '../Card/Card.css'

const Card = ({ question, length, position }) => {
  let info = new CardInfo(question, position)

  const difficulty = useContext(DifficultyContext)

  const submitCorrectAnswer = (answer) => {
    difficulty.submitAnswerKey(answer)
  }

  useEffect(() => {
    submitCorrectAnswer(info.correctAnswerIndex)
  }, [])

 return (
   <div className="card-container">
     <div className="top-info">
      <h3>{info.category}</h3>
      <p>{ position + 1}/{ length }</p>
     </div>
     <div className="middle-info">
      <p className="question" answer={info.correctAnswerIndex}>{info.question}</p>
     </div>
     <form className="bottom-answers">
       <Answers answerList={info.answers} questionNumber={ position }/>
     </form>
   </div>
 )
}

export default Card