import Card from "../card/Card";
import "./BookCard.css";
import Button from "../button/Button";

function BookCard(props) {
    return (
       <Card>
        <div className="BookCard">

         <img
         src={props.image}
         alt={props.title}
         className="book-image"
         />
         <div className="book-info">  

         <h2>{props.title}</h2>

         <p className="author">
            {props.author}
         </p>

         <p className="category">
            {props.category}
         </p>

         <Button 
         text=" View Details" 
         onClick={props.onViewDetails}
        />

         </div>

        </div>
        </Card>
      
    );
}

export default BookCard;