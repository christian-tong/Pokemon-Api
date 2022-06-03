import React from "react";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Cards() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="../../resources/img/dechulandios/1.jpg" />
        <Card.Body>
          <Card.Title>Los Dechulandios</Card.Title>
          <Card.Text>Los dechulandios son los dechulandios 💕</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Amor</ListGroupItem>
          <ListGroupItem>Comprension</ListGroupItem>
          <ListGroupItem>Respeto</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Cards;
