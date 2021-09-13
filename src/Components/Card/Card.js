const Card = ({ questions }) => {
 return (
   <div className="card-container">
     <h3>{questions.category}</h3>
   </div>
 )
}

export default Card