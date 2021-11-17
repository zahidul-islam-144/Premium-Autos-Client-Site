import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Container id="about">
        <Row>
          <Col>
            <h1 className="text-center mb-5">Why us ?</h1>
            <p>
              Our no-haggle pricing is just the beginning of a no-hassle
              experience. We treat people the way we’d want to be treated, so
              you get the best car at the best price, without having to know
              anything about cars.
            </p>
            <p>
              CarShop Certified* cars are the cream of the crop — vehicles under
              4 years or 50,000 miles old that have passed a rigorous 109-point
              inspection by our ASE-certified technicians. And that’s just for
              starters.
            </p>
            <h2 className="text-center mt-5 mb-4">
              We believe in <span className="section-word">Quality</span> not
              Qantity
            </h2>
            <div className="about-us-allpoints border p-5 bg-light">
              <h3 className="about-us-point">
                No Dings, No Dents, No Scratches
              </h3>
              <h3 className="about-us-point">Bumper-to-Bumper Warranty</h3>
              <h3 className="about-us-point">Lifetime Engine Guarantee</h3>
              <h3 className="about-us-point">The Highest Standards</h3>
              <h3 className="about-us-point">5-day Money Back Guarantee</h3>
              <h3 className="about-us-point">Free Vehicle History Report</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
