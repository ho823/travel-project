import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Toast,
  ToastHeader,
  ToastBody
} from "reactstrap";
import styles from "./EndPage.module.css";
import {Link} from 'react-router-dom'

const profileImageM = require("./img/marion.png");
const profileImageA = require("./img/ameline.png");
const profileImageG = require("./img/gilles.png");
const profileImageAn = require("./img/anais.png");


function EndPage() {
  return (
    <div className={styles.ContainerBody}>
      <Container>
        <Row className={styles.containerTitle}>
          <Col>
            <p className={styles.h2}>We hope this trip has you more.</p>
            <p className={styles.h1}>See you soon !</p>
          </Col>
        </Row>

        <Row className={styles.containerPerson}>
          <Col>
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>Gilles</ToastHeader>
                <ToastBody style={{ background: "white" }}>
                  <img className={styles.photo} src={profileImageG} />
                </ToastBody>
              </Toast>
            </div>
          </Col>

          <Col>
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>Marion</ToastHeader>
                <ToastBody style={{ background: "white" }}>
                  <img className={styles.photo} src={profileImageM} />
                </ToastBody>
              </Toast>
            </div>
          </Col>

          <Col>
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>Ameline</ToastHeader>
                <ToastBody style={{ background: "white" }}>
                  <img className={styles.photo} src={profileImageA} />
                </ToastBody>
              </Toast>
            </div>
          </Col>

          <Col>
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>Anaïs</ToastHeader>
                <ToastBody style={{ background: "white" }}>
                  <img className={styles.photo} src={profileImageAn} />
                </ToastBody>
              </Toast>
            </div>
          </Col>
        </Row>

        <Row className={styles.containerBouton}>
          <Col>
            <Button className={styles.buttonFinish} tag={Link} to='/'color="info">Restart the trip</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EndPage;
