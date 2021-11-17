import React, { useEffect, useState } from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInfo from "../../../hooks/useInfo";
import ManageProducts from "../../Admin/ManageProducts/ManageProducts";
import SelectNow from "../../SelectNow/SelectNow";
import "./Explore.css";

const Explore = () => {
  const [cars, setCars] = useState([]);
  // const [orderInfo, setOrderInfo] = useState({});

  useEffect(() => {
    fetch("https://stormy-atoll-19739.herokuapp.com/premium-autos/explore")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  // const selectNow = (index) => {
  //   // const selectNowData = index;
  //   const data = cars[index];
  //   // console.log(data);
  //   setOrderInfo(data);
  // };
  return (
    <>
      <Container className="pt-5 pb-5">
        <h1 className="text-center mt-5 mb-5">Welcome to Premium Autos</h1>
        <Row xs={1} md={2} lg={3} xl={3} className="g-4">
          {cars.map((car, index) => (
            <Col>
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
                    <Button className="d-block bg-light bg-gradient text-black">
                      Select Now
                    </Button>
                  </Link>

                  {/* <Button
                    onClick={() => selectNow(index)}
                    className="d-block bg-light bg-gradient text-black"
                  >
                    Select Now
                  </Button> */}

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
      {/* <SelectNow orderInfo={orderInfo}/> */}
    </>
  );
};

export default Explore;
