import CardInfo from './CardInfo'
import '../Card/Card.css'

const Card = ({ question, length, position }) => {
 let info = new CardInfo(question)

 return (
   <div className="card-container">
     <h3>{info.category}</h3>
     <p>{info.question}</p>
     <p>{ position }</p>
     <p>{ length }</p>
   </div>
 )
}

export default Card