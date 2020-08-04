import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';

const MovieCard = () => {
  return (
    <Card className="card">
      <Card.Header as="h5">Movie Title</Card.Header>
      <Card.Body>
        <Card.Title>Year</Card.Title>
        <Card.Text>
          Movie description.
        </Card.Text>
        <Button variant="primary">Rent Movie</Button>
      </Card.Body>
    </Card>
  )
}



export default MovieCard;
