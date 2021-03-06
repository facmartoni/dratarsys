import React from "react";

import { Button } from "react-bootstrap";

import "./styles/ButtonPink.css";

export default function ButtonPink(props) {
  return (
    <Button
      variant="secondary"
      onClick={props.onClick}
      className={
        props.className +
        " ButtonPink background_action_color font_black_color rounded-0 border-0 cabin"
      }
    >
      {props.children}
    </Button>
  );
}
