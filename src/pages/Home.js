import React from "react";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import ResumeContainer from "../components/ResumeContainer";
import ResumeFooter from "../components/ResumeFooter";

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Container>
        <ResumeContainer />
        <ResumeFooter />
      </Container>
    </div>
  );
}

export default Home;
