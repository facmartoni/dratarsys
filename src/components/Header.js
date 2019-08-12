import React from "react";
import { HashLink as Link } from "react-router-hash-link";
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
      collapseOnSelect={true}
      expand="md"
      variant="dark"
      className="cabin header header_background"
      py={0}
    >
      <Navbar.Brand>
        <Link to="/">
          <Image src={Logo} height="50px" width="50px" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="border-0 font_white_color header_toggler"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto align-items-md-center">
          <Nav.Link className="font_white_color" eventKey="0">
            <Link className="text-decoration-none text-reset" to="/#yo">
              {t("yo")}
            </Link>
          </Nav.Link>
          <Nav.Link className="font_white_color" eventKey="1">
            <Link className="text-decoration-none text-reset" to="/#marca">
              {t("miMarca")}
            </Link>
          </Nav.Link>
          <Nav.Link className="font_white_color" eventKey="2">
            <Link className="text-decoration-none text-reset" to="/premios">
              {t("premios")}
            </Link>
          </Nav.Link>
          <Nav.Link className="font_white_color" eventKey="3">
            <Link className="text-decoration-none text-reset" to="/#clinica">
              {t("miClinica")}
            </Link>
          </Nav.Link>
          <Nav.Link className="font_white_color" eventKey="4">
            <Link className="text-decoration-none text-reset" to="/#valores">
              {t("misValores")}
            </Link>
          </Nav.Link>
          <Nav.Link className="font_white_color" eventKey="5">
            <Link className="text-decoration-none text-reset" to="/carrera">
              {t("miCarrera")}
            </Link>
          </Nav.Link>
          <Nav.Link eventKey="6">
            <Link className="text-decoration-none text-reset" to="/#contacto">
              <ButtonPink>{t("contactame")}</ButtonPink>
            </Link>
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
