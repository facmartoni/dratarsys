import React, { useState } from "react";
import { useTranslate } from "react-translate";

import { Card, Modal, Image } from "react-bootstrap";
import ButtonPink from "./ButtonPink";

import "./styles/Award.css";

export default function Award(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let t = useTranslate("Awards");

  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className={
          props.className +
          " Award d-flex flex-column align-items-center rounded-0 mb-4"
        }
        onClick={handleShow}
      >
        <Card.Img className="Award_image" variant="top" src={props.image} />
        <Card.Body className="Award_body d-flex flex-column align-items-center justify-content-center">
          <Card.Title>
            <h3>{props.title}</h3>
          </Card.Title>
          <Card.Text className="mb-3">
            <small>{props.text}</small>
          </Card.Text>
          <ButtonPink>
            <p>{props.button}</p>
          </ButtonPink>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="rounded-0"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Header
          // closeButton
          className="text-center d-flex flex-column align-items-center"
        >
          <Modal.Title id="contained-modal-title-vcenter">
            <h2 className="cabin">{props.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center d-flex flex-column align-items-center">
          <Image src={props.image} className="w-100 mb-3" />
          <p className="line_height_12">{props.description}</p>
        </Modal.Body>
        <Modal.Footer className="text-center d-flex flex-column align-items-center">
          <ButtonPink onClick={handleClose}>{t("buttonClose")}</ButtonPink>
        </Modal.Footer>
      </Modal>
    </>
  );
}
