import React from "react"

const Answers = ({answerList}) => {
 return answerList.map((answer, i) => {
    return (
      <div className="answers">
      <label>
        <input
          type="radio"
          name="answers"
          value={`a${i}`}
          className="form-check-input"
        />
        {answer}
      </label>
      </div>
    )
  })
}

export default Answers