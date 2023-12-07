import React from "react";
import { Button, Card } from "react-bootstrap";
const ProductCard = (props) => {
  return (
    <Card className="shadow-lg mb-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>
          <b>{props.title}</b>
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {`₹ ${props.price}`}
        </Card.Text>
        <Button
          style={{ marginLeft: "30%" }}
          variant="warning"
          onClick={props.addToCart}
        >
          <b>Add to Cart</b>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
