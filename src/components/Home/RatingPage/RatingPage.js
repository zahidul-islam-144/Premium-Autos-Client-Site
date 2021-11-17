import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./RatingPage.css";
import Rating from "react-rating";

const RatingPage = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  console.log(feedbackData);

  useEffect(() => {
    fetch("https://stormy-atoll-19739.herokuapp.com/premium-autos/all-feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedbackData(data));
  }, []);

  return (
    <>
      <Container className="mt-5 mb-5">
        <h1 className="m-5 text-center">Our Customer Feedbacks</h1>
        <Row xs={1} md={2} lg={3} xl={3} className="g-4">
          {feedbackData.map((fd) => (
            <Col>
              <Card className="review-card">
                <Card.Img variant="top" src={fd.user_img} />
                <Card.Body>
                  <Card.Title>
                    <h2 className="text-center">{fd.user_name}</h2>
                  </Card.Title>

                  <Card.Text className="d-flex flex-column">
                    <h5>
                      {fd.brand}-{fd.model}
                    </h5>
                    <Rating
                      className="mx-auto"
                      initialRating={fd.star}
                      readonly
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      style={{ color: "#FFAF2D " }}
                    ></Rating>
                    <hr />
                    <p className="comments">{fd.comments}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default RatingPage;
