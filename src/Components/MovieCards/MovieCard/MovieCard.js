import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';

const MovieCard = props => {
  return (
    <Card className="card">
      <Card.Header as="h5">{props.title} - {props.avg_rating}/10</Card.Header>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.year}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
  )
}



export default MovieCard;
