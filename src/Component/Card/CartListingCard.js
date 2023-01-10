import React from "react";
import { Col, Row, Card, CardTitle, CardText, Button } from "reactstrap";
import QuantityButton from "../QuantityButton";

export default function CartListingCard({ data = {} }) {
  return (
    <Row className="mb-2">
      <Col sm="12" md="12" lg="12">
        <Card>
          <Row>
            <Col sm="3" md="3" lg="3">
              <img width={"200px"} src={data.image} />
            </Col>
            <Col className="py-3">
              <CardTitle tag="h5">{data.name}</CardTitle>
              <QuantityButton quantity={data.quantity} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
