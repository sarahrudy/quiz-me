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
          <input type="radio" name="answer" value="a0"></input>
          <label htmlFor="a0">{info.answers[0]}</label>
        </div>
        <div className="answers">
          <input type="radio" name="answer" value="a1"></input>
          <label htmlFor="a1">{info.answers[1]}</label>
        </div>
        <div className="answers">
          <input type="radio" name="answer" value="a2"></input>
          <label htmlFor="a2">{info.answers[2]}</label>
        </div>
        <div className="answers">
          <input type="radio" name="answer" value="a3"></input>
          <label htmlFor="a3">{info.answers[3]}</label>
        </div>
     </form>
   </div>
 )
}

export default Card