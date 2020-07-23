import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import ResumeContainer from "../components/ResumeContainer";
import ResumeCard from "../components/ResumeCard";
import ResumeFooter from "../components/ResumeFooter";

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Container>
        <Row>
          <Col>
            <ResumeContainer>
              <ResumeCard />
            </ResumeContainer>
            <ResumeFooter />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
