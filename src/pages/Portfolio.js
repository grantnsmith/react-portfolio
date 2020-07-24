import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import PortfolioContainer from "../components/PortfolioContainer";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <PortfolioContainer>
              <PortfolioCard />
            </PortfolioContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
