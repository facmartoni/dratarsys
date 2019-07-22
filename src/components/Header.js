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
      collapseOnSelect
      expand="md"
      variant="dark"
      className="cabin header header_background"
      py={0}
    >
      <Navbar.Brand>
        <Link to="/dratarsys/">
          <Image src={Logo} height="50px" width="50px" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="border-0 font_white_color header_toggler"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto align-items-md-center">
          <Nav.Link className="font_white_color">
            <Link
              className="text-decoration-none text-reset"
              to="/dratarsys/#yo"
            >
              {t("yo")}
            </Link>
          </Nav.Link>
          <Nav.Link className="font_white_color">
            <Link
              className="text-decoration-none text-reset"
              to="/dratarsys/#marca"
            >
              {t("miMarca")}
            </Link>
          </Nav.Link>
          <Nav.Link className="font_white_color">
            <Link
              className="text-decoration-none text-reset"
              to="/dratarsys/premios"
            >
              {t("premios")}
            </Link>
          </Nav.Link>
          <Nav.Link className="font_white_color">
            <Link
              className="text-decoration-none text-reset"
              to="/dratarsys/#clinica"
            >
              {t("miClinica")}
            </Link>
          </Nav.Link>
          <Nav.Link className="font_white_color">
            <Link
              className="text-decoration-none text-reset"
              to="/dratarsys/#valores"
            >
              {t("misValores")}
            </Link>
          </Nav.Link>
          <Nav.Link className="font_white_color">
            <Link
              className="text-decoration-none text-reset"
              to="/dratarsys/carrera"
            >
              {t("miCarrera")}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              className="text-decoration-none text-reset"
              to="/dratarsys/#contacto"
            >
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
