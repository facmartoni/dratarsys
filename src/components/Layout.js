import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Header
        activeButtonEN={props.activeButtonEN}
        activeButtonES={props.activeButtonES}
        handleButtonEN={props.handleButtonEN}
        handleButtonES={props.handleButtonES}
      />
      {props.children}
    </>
  );
}
