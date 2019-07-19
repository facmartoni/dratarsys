import React from "react";
import { useTranslate } from "react-translate";

import { Container, Row, Col } from "react-bootstrap";
import Phrase from "../components/Phrase";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SectionFluid from "../components/SectionFluid";

import renaissanceHollywood from "../images/varios/renaissance_hollywood.png";

export default function Home(props) {
  let t = useTranslate("Home");
  return (
    <>
      <Layout
        activeButtonEN={props.activeButtonEN}
        activeButtonES={props.activeButtonES}
        handleButtonEN={props.handleButtonEN}
        handleButtonES={props.handleButtonES}
      >
        <Hero />
        <Container>
          <Row className="my-4">
            <Col>
              <p className="text-center big_text line_height_12">
                {t("presentacion")}
              </p>
            </Col>
          </Row>
        </Container>
        <Phrase message={t("firstPhrase")} />
        <SectionFluid
          image={renaissanceHollywood}
          color="background_primary_color"
          order="imagefirst"
        >
          <h2 className="my-2">{t("marcaTitulo")}</h2>
          <p className="my-2">
            <strong>Renaissance: </strong>
            {t("marcaTexto1")}
          </p>
          <p className="my-2">
            <strong>Hollywood: </strong>
            {t("marcaTexto2")}
          </p>
          <p className="my-2">
            <strong>Sonrisa Renaissance Hollywood ®: </strong>
            {t("marcaTexto3")}
          </p>
        </SectionFluid>
      </Layout>
    </>
  );
}
