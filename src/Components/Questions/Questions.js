import React from 'react'
import Card from '../Card/Card'
import triviaData from '../../datafiles/mockData'
import '../Questions/Questions.css'

const Questions = () => {
  const triviaQuestions = triviaData.results.map(question => {
    return (

      <Card />
      )
})


  return(
    <div className="questions-container">
      { triviaQuestions }
    </div>
  )
}

export default Questions