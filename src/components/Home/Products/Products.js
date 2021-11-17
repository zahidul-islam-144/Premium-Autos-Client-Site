import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";
// import { BsFillStarFill, BsStar } from "react-icons/bs";


const Products = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://stormy-atoll-19739.herokuapp.com/premium-autos/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);


  return (
    <>
      <Container className="products-container">
        <h1 className="text-center mt-5 mb-5">Our Vehicles</h1>
        <Row xs={1} md={2} lg={3} xl={3} className="g-4">
          {cars.map((car) => (
            <Col>
              {/* <Image src={car.url} fluid/> */}

              <Card>
                <Card.Img variant="top" src={car.url} />
                <Card.Body>
                  <Card.Title>
                    <h2 className="text-center">{car.brand}</h2>
                  </Card.Title>

                  <Card.Text className="d-flex justify-content-around">
                    <h6>{car.model}</h6>
                    <h6>{car.price}</h6>
                  </Card.Text>
                </Card.Body>

                <hr />
                <div className="d-flex justify-content-between ps-5 pe-5 pt-1 pb-3">
                  <Link to={`/select-now/${car._id}`} className="d-block">
                    <Button className="bg-light bg-gradient text-black">
                      Select Now
                    </Button>
                  </Link>

                  <Link to={`/details/${car._id}`} className="d-block">
                    <Button className="bg-light bg-gradient text-black">
                      Details
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid>

      </Container>
    </>
  );
};

export default Products;

// BsFillStarFill;
// BsStar;
