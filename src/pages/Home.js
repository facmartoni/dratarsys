import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslate } from "react-translate";

import { Container, Row, Col } from "react-bootstrap";
import Phrase from "../components/Phrase";
import Hero from "../components/Hero";
import SectionFluid from "../components/SectionFluid";
import Award from "../components/Award";
import ButtonPink from "../components/ButtonPink";

import renaissanceHollywood from "../images/varios/renaissance_hollywood_2.png";
import consultorio1 from "../images/consultorio/consultorio_9.png";
import consultorio2 from "../images/consultorio/consultorio_7.png";
import consultorio3 from "../images/consultorio/consultorio_8.png";
import smile from "../images/varios/smile.png";
import destroyedHead from "../images/varios/destroyed_head.png";
import butterflies from "../images/varios/butterflies.png";
import award19 from "../images/premios/19.png";
import awardDelivery19 from "../images/entrega_premios/quality_choice_prize_berlin_2019.png";
import award16 from "../images/premios/16.png";
import awardDelivery16 from "../images/entrega_premios/international_core_quality_achievement_paris_2019.png";
import award9 from "../images/premios/9.png";
import awardDelivery9 from "../images/entrega_premios/the_winner_awards_brasil_2018.png";
import Contact from "../components/Contact";

export default function Home(props) {
  let t = useTranslate("Home");
  let tAwards = useTranslate("Awards");

  return (
    <>
      <Hero />
      <Container id="yo">
        <Row className="my-4">
          <Col>
            <p className="text-center big_text">{t("presentacion")}</p>
          </Col>
        </Row>
      </Container>
      <Phrase message={t("firstPhrase")} />
      <SectionFluid
        image={renaissanceHollywood}
        imageClass=" object_position_top"
        color="background_primary_color"
        order="imagefirst"
        className="max-height-400"
      >
        <h2 id="marca" className="my-2">
          {t("marcaTitulo")}
        </h2>
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
      <Container id="premios" className="background_black_color py-4" fluid>
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
              description={tAwards("awardDescription19")}
              delivery={awardDelivery19}
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <Award
              image={award16}
              title={tAwards("awardTitle16")}
              text={tAwards("awardText16")}
              button={tAwards("button")}
              description={tAwards("awardDescription16")}
              delivery={awardDelivery16}
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <Award
              image={award9}
              title={tAwards("awardTitle9")}
              text={tAwards("awardText9")}
              button={tAwards("button")}
              description={tAwards("awardDescription9")}
              delivery={awardDelivery9}
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Link to="/premios#premiosPage">
            <ButtonPink className="border_pink">
              <p>{tAwards("buttonSeeAll")}</p>
            </ButtonPink>
          </Link>
        </Row>
      </Container>
      <SectionFluid
        slider={true}
        image={consultorio1}
        image2={consultorio2}
        image3={consultorio3}
        color="background_secondary_color"
        order="textfirst"
        className="max-height-400"
      >
        <h2 id="clinica" className="my-2">
          {t("clinicaTitle")}
        </h2>
        <p className="my-2">
          {t("clinicaText")}{" "}
          <a
            className="cabin font_action_color"
            href="https://sonrisaperfecta.com.co/"
            target="_blank"
          >
            {t("clinicaLink")}
          </a>
        </p>
      </SectionFluid>
      <Phrase message={t("secondPhrase")} />
      <SectionFluid
        slider={true}
        image={smile}
        image2={butterflies}
        image3={destroyedHead}
        color="background_primary_color"
        order="imagefirst"
        className="max-height-400"
      >
        <h2 id="valores" className="my-2">
          {t("misValoresTitle")}
        </h2>
        <p className="my-2">{t("misValoresText")}</p>
      </SectionFluid>
      <Phrase message={t("thirdPhrase")} />
      <Contact />
    </>
  );
}
