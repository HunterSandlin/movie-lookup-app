import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';

const MovieCard = props => {
  return (
    <Card className="card">
      <Card.Header as="h5">{props.title + props.release_year}</Card.Header>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
  )
}



export default MovieCard;
