import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import PortfolioContainer from "../components/PortfolioContainer";
import PortfolioCard from "../components/PortfolioCard";
import portfolio from "../assets/portfolio.json";

function Portfolio() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <PortfolioContainer>
              {portfolio.map((portfolio) => (
                <PortfolioCard
                  key={portfolio.id}
                  img={portfolio.img}
                  title={portfolio.title}
                  description={portfolio.description}
                  technology={portfolio.technology}
                  deployed={portfolio.deployed}
                  github={portfolio.github}
                />
              ))}
            </PortfolioContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
