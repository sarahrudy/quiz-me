import React, { useEffect, useContext } from 'react'
import Card from '../Card/Card'
import triviaData from '../../datafiles/mockData'
import '../Questions/Questions.css'
import { fetchData } from '../../apiCalls'

const Questions = (props) => {
  const difficulty = useContext(difficulty)
  useEffect(() => {
    console.log('useEffect')
    fetchData('easy')
  }, [])

  const triviaQuestions = triviaData.results.map(question => {
    return (

      <Card 
        questions = {question}
      />
      )
})


  return(
    <div className="questions-container">
      { triviaQuestions }
    </div>
  )
}

export default Questions