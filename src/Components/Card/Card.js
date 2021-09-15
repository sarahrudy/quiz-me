import '../Card/Card.css'

const Card = ({ question, length, position }) => {
  // new instance of the class here
 return (
   <div className="card-container">
     <h3>{question.category}</h3>
     <p>{question.question}</p>
     <p>{ position }</p>
     <p>{ length }</p>
   </div>
 )
}

export default Card