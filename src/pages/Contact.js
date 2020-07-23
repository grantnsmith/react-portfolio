import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import ContactCard from "../components/ContactCard";

function Contact() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <ContactCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
