import React from "react";
import { useTranslate } from "react-translate";

import { Container, Row, Col } from "react-bootstrap";
import Phrase from "../components/Phrase";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SectionFluid from "../components/SectionFluid";
import Award from "../components/Award";

import renaissanceHollywood from "../images/varios/renaissance_hollywood.png";
import award19 from "../images/premios/19.png";
import award16 from "../images/premios/16.png";
import award9 from "../images/premios/9.png";

export default function Home(props) {
  let t = useTranslate("Home");
  let tAwards = useTranslate("Awards");

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
          className="max-height-400"
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
        <Container className="background_black_color py-4" fluid>
          <Row className="d-flex flex-row justify-content-center">
            <h2 className="font_white_color mb-4 mx-2 text-center">
              {t("premiosTitle")}
            </h2>
          </Row>
          <Row className="text-center my-4">
            <Col className="d-flex justify-content-center">
              <Award
                image={award19}
                title={tAwards("awardTitle19")}
                text={tAwards("awardText19")}
                button={tAwards("button")}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <Award
                image={award16}
                title={tAwards("awardTitle16")}
                text={tAwards("awardText16")}
                button={tAwards("button")}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <Award
                image={award9}
                title={tAwards("awardTitle9")}
                text={tAwards("awardText9")}
                button={tAwards("button")}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
