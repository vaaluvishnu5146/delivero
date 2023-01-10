import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";
export const inrSymbol = "₹";
export default function ProductCard({ data = {}, handleCart = () => {} }) {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={data.image} />
      <CardBody>
        <CardTitle tag="h5">{data.name}</CardTitle>
        <CardText className="mb-2">{data.description}</CardText>

        <div className="add-to-cart-button-container">
          <CardSubtitle className="text-danger" tag="h3">
            {inrSymbol}
            {data.actualPrice}
          </CardSubtitle>
          <Button onClick={() => handleCart(data)}>Add to cart</Button>
        </div>
      </CardBody>
    </Card>
  );
}
