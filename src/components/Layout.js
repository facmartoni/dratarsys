import React from "react";
import Header from "./Header";
import Footer from "./Footer";

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
      <Footer />
    </>
  );
}
