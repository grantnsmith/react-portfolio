import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import ResumeContainer from "../components/ResumeContainer";

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Container>
        <Row>
          <Col>
            <ResumeContainer></ResumeContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
