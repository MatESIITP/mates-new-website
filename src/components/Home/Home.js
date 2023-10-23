import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Type from "./Type";
import About from "../About/About";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">1
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h6 style={{ paddingBottom: 10 }} className="heading">
                WELCOME TO
              </h6>

              <h1 className="heading-name">
                <strong className="main-name"> Materials Engineering Society</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: "20px" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 50 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
