import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Phrase from "../components/Phrase";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Home(props) {
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
                Soy Tarsys Loayza Roys, visionaria odontóloga y empresaria,
                luchadora para hacer cada día más feliz a mis pacientes. Pionera
                de las clínicas dentales tipo Spa en Latinoamérica y fundadora y
                directora de Sonrisa Perfecta Dental Tarsys Loayza Roys, una de
                las más prestigiosas del mundo. Colombiana que enaltece su
                profesión, y dueña de la primera marca de sonrisas del planeta,
                Sonrisa Renaissance Hollywood ®
              </p>
            </Col>
          </Row>
        </Container>
        <Phrase message={'"La excelencia es perfecta"'} />
      </Layout>
    </>
  );
}
