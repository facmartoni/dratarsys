import React from "react";
import { useTranslate } from "react-translate";

import { Container, Row, Col } from "react-bootstrap";
import Phrase from "../components/Phrase";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

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
      </Layout>
    </>
  );
}
