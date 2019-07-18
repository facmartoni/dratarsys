import React from "react";
import { Button } from "react-bootstrap";

export default function ButtonPink(props) {
  return (
    <Button
      variant="secondary"
      className="background_action_color font_black_color rounded-0 border-0"
    >
      {props.children}
    </Button>
  );
}
