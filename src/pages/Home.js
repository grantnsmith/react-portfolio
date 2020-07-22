import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
