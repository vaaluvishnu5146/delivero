import React from "react";
import { Col, Container, Row } from "reactstrap";
import ProductCard from "../Component/Card";
import ImageSlider from "../Component/imageSlider";

export const pizzas = [
  {
    id: 1,
    name: "Margheritta",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=300",
    description:
      "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
    price: "289",
    type: ["Veg"],
  },
  {
    id: 2,
    name: "Tandoori Paneer",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=300",
    description:
      "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
    price: "289",
    type: ["Veg"],
  },
  {
    id: 3,
    name: "Veggie Supreme",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=300",
    description:
      "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
    price: "269",
    type: ["Veg"],
  },
  {
    id: 4,
    name: "Double Paneer Supreme",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.3cb382529b41d14d4a041b5cc5e64341.1.jpg?width=300",
    description:
      "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
    price: "300",
    type: ["Veg"],
  },
];

export default function ProductListing() {
  return (
    <div className="">
      <ImageSlider />
      <div className="h-40"></div>
      <div className="app_container" id="product-listing container">
        <Container>
          <Row>
            {pizzas &&
              pizzas.map((piz, i) => (
                <Col key={i} className="col-lg-3">
                  <ProductCard data={piz} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
