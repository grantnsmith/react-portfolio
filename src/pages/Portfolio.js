import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

function Portfolio() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <p>Portfolio</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
