import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <p>Contact</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
