import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import ResumeContainer from "../components/ResumeContainer";
import ResumeCard from "../components/ResumeCard";
import ResumeFooter from "../components/ResumeFooter";
import resume from "../assets/resume.json";

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Container>
        <Row>
          <Col>
            <ResumeContainer>
              {resume.map((resume) => (
                <ResumeCard
                  key={resume.id}
                  img={resume.img}
                  altTitle={resume.altTitle}
                  title={resume.title}
                  subtitle={resume.subtitle}
                  body={resume.body}
                />
              ))}
            </ResumeContainer>
            <ResumeFooter />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
