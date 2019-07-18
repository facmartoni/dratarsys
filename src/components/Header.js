import React from "react";
import { Navbar, Image, Nav, Button } from "react-bootstrap";
import { useTranslate } from "react-translate";

import ButtonPink from "./ButtonPink";
import LanguageButton from "./LanguageButton";

import Logo from "../images/varios/isotipo_white.png";
import "./styles/Header.css";

export default function Header(props) {
  let t = useTranslate("Header");

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="dark"
      className="cabin header header_background"
      py={0}
    >
      <Navbar.Brand href="#home">
        <Image src={Logo} height="50px" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="border-0"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto align-items-md-center">
          <Nav.Link className="font_white_color" href="#yo">
            {t("yo")}
          </Nav.Link>
          <Nav.Link className="font_white_color" href="#marca">
            {t("miMarca")}
          </Nav.Link>
          <Nav.Link className="font_white_color" href="#premios">
            {t("premios")}
          </Nav.Link>
          <Nav.Link className="font_white_color" href="#clinica">
            {t("miClinica")}
          </Nav.Link>
          <Nav.Link className="font_white_color" href="#clinica">
            {t("misValores")}
          </Nav.Link>
          <Nav.Link className="font_white_color" href="#clinica">
            {t("miCarrera")}
          </Nav.Link>
          <Nav.Link href="#clinica">
            <ButtonPink>{t("contactame")}</ButtonPink>
          </Nav.Link>
          <Nav.Item>
            <LanguageButton
              activeButtonEN={props.activeButtonEN}
              activeButtonES={props.activeButtonES}
              handleButtonEN={props.handleButtonEN}
              handleButtonES={props.handleButtonES}
            />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
