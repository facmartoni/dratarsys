import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export default class LanguageButton extends Component {
  render() {
    return (
      <ButtonGroup>
        <Button
          variant={
            window.matchMedia("(max-width: 768px)").matches
              ? "dark"
              : "outline-light"
          }
          onClick={this.props.handleButtonEN}
          active={this.props.activeButtonEN}
          className="rounded-0"
        >
          EN
        </Button>
        <Button
          variant={
            window.matchMedia("(max-width: 768px)").matches
              ? "dark"
              : "outline-light"
          }
          onClick={this.props.handleButtonES}
          active={this.props.activeButtonES}
          className="rounded-0"
        >
          ES
        </Button>
      </ButtonGroup>
    );
  }
}
