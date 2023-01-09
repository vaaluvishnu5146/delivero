import React from "react";
import { ButtonGroup, Button } from "reactstrap";

export default function QuantityButton({}) {
  return (
    <ButtonGroup className="my-2" size="sm">
      <Button outline>-</Button>
      <input
        style={{
          width: "50px",
          height: "50px",
          textAlign: "center",
        }}
        value="0"
      />
      <Button outline>+</Button>
    </ButtonGroup>
  );
}
