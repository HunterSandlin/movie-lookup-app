import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';

const MovieCard = props => {

  const ratingColorHandler = (rating) => {
    if (rating > 7) {
      return "green"
    } else if (rating > 5) {
      return "orange"
    } else {
      return "red"
    }
  }
  return (
    <Card className="card">
      <Card.Header as="h5">{props.title}  <span id="title-year"><em>{props.release_year}</em></span></Card.Header>
      <div id="poster-container">
        <Card.Img variant="top" src={props.img}/>
        <Card.Text className={ratingColorHandler(props.vote)} id="poster-rating">{props.vote}</Card.Text>
      </div>

      <Card.Body>
        <Card.Text id="card-description">{props.description}</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  )
}



export default MovieCard;
