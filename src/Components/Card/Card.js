import CardInfo from './CardInfo'
import '../Card/Card.css'

const Card = ({ question, length, position }) => {
  let info = new CardInfo(question)

 return (
   <div className="card-container">
     <div className="top-info">
      <h3>{info.category}</h3>
      <p>{ position + 1}/{ length }</p>
     </div>
     <div className="middle-info">
      <p className="question">{info.question}</p>
     </div>
     <form className="answers-container">   
      <div className="answers">
          <label>
            <input
              type="radio"
              name="answers"
              value="a0"
              className="form-check-input"
            />
            {info.answers[0]}
          </label>
        </div>
        <div className="answers">
          <label>
            <input
              type="radio"
              name="answers"
              value="a1"
              className="form-check-input"
            />
            {info.answers[1]}
          </label>
        </div>
        <div className="answers">
          <label>
            <input
              type="radio"
              name="answers"
              value="a2"
              className="form-check-input"
            />
            {info.answers[2]}
          </label>
        </div>
        <div className="answers">
          <label>
            <input
              type="radio"
              name="answers"
              value="a3"
              className="form-check-input"
            />
            {info.answers[3]}
          </label>
        </div>
      
     </form>
   </div>
 )
}

export default Card