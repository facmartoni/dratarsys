import React from "react";
import { useTranslate } from "react-translate";

import { Container, Row, Col, CardColumns } from "react-bootstrap";
import Award from "../components/Award";

import "./styles/Awards.css";
import HeroSecondary from "../components/HeroSecondary";
import awardHeroImage from "../images/premios/2.png";
import award19 from "../images/premios/19.png";
import awardDelivery19 from "../images/entrega_premios/quality_choice_prize_berlin_2019.png";
import award16 from "../images/premios/16.png";
import awardDelivery16 from "../images/entrega_premios/international_core_quality_achievement_paris_2019.png";
import award9 from "../images/premios/9.png";
import awardDelivery9 from "../images/entrega_premios/the_winner_awards_brasil_2018.png";
import award11 from "../images/premios/11.png";
import awardDelivery11 from "../images/entrega_premios/quality_summit_awards_new_york_2018.png";
import award15 from "../images/premios/15.png";
import awardDelivery15 from "../images/entrega_premios/business_management_award_2018.png";
import award3 from "../images/premios/3.png";
import award13 from "../images/premios/13.png";
import awardDelivery13 from "../images/entrega_premios/international_star_for_quality_ginebra_2017.png";
import award7 from "../images/premios/7.png";
import awardDelivery7 from "../images/entrega_premios/excellence_in_health_care_prize_chile_2017.png";

export default function Awards() {
  let t = useTranslate("Awards");

  return (
    <>
      <HeroSecondary
        id="premiosPage"
        image={awardHeroImage}
        title={t("awardsTitle")}
      />
      <Container fluid className="background_secondary_color py-4">
        <Row className="text-center">
          <Col className="d-flex justify-content-center">
            <CardColumns>
              <Award
                image={award19}
                title={t("awardTitle19")}
                text={t("awardText19")}
                button={t("button")}
                description={t("awardDescription19")}
                className="award mx-4"
                delivery={awardDelivery19}
              />
              <Award
                image={award16}
                title={t("awardTitle16")}
                text={t("awardText16")}
                button={t("button")}
                description={t("awardDescription16")}
                className="award mx-4"
                delivery={awardDelivery16}
              />
              <Award
                image={award9}
                title={t("awardTitle9")}
                text={t("awardText9")}
                button={t("button")}
                description={t("awardDescription9")}
                className="award mx-4"
                delivery={awardDelivery9}
              />
              <Award
                image={award11}
                title={t("awardTitle11")}
                text={t("awardText11")}
                button={t("button")}
                description={t("awardDescription11")}
                className="award mx-4"
                delivery={awardDelivery11}
              />
              <Award
                image={award15}
                title={t("awardTitle15")}
                text={t("awardText15")}
                button={t("button")}
                description={t("awardDescription15")}
                className="award mx-4"
                delivery={awardDelivery15}
              />
              <Award
                image={award3}
                title={t("awardTitle3")}
                text={t("awardText3")}
                button={t("button")}
                description={t("awardDescription3")}
                className="award mx-4"
              />
              <Award
                image={award13}
                title={t("awardTitle13")}
                text={t("awardText13")}
                button={t("button")}
                description={t("awardDescription13")}
                className="award mx-4"
                delivery={awardDelivery13}
              />
              <Award
                image={award7}
                title={t("awardTitle7")}
                text={t("awardText7")}
                button={t("button")}
                description={t("awardDescription7")}
                className="award mx-4"
                delivery={awardDelivery7}
              />
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </>
  );
}
