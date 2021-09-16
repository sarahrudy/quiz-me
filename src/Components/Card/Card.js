import CardInfo from './CardInfo'
import Answers from '../Answers/Answers'
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
     <form className="bottom-answers">
       <Answers answerList={info.answers}/>
     </form>
   </div>
 )
}

export default Card