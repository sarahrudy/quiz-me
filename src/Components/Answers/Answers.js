import React, { useContext } from "react"
import { DifficultyContext } from "../../context/DifficultyContextProvider"

const Answers = ({answerList, questionNumber}) => {
  const difficulty = useContext(DifficultyContext)

 const handleChange = (e) => {
    const { name, value } = e.target

    difficulty.submitAnswer(name, value)
  }


 return answerList.map((answer, i) => {
    return (
      <div className="answers" key={i}>
        <label>
          <input
            type="radio"
            name={`q${questionNumber}`}
            value={`a${i}`}
            className="form-check-input"
            onChange={handleChange}
          />
          {answer}
        </label>
      </div>
    )
  })
}

export default Answers