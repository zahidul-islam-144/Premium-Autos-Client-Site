import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./ProductDetails.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";


const ProductDetails = () => {
  const { dId } = useParams();
  const [details, setDetails] = useState({});
  console.log("client:", dId);
  console.log(details);
  SwiperCore.use([Keyboard, Pagination, Navigation]);

  useEffect(() => {
    fetch(
      `https://stormy-atoll-19739.herokuapp.com/premium-autos/details/${dId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, [dId]);

  return (
    <>
      <Container fluid className="details-container pt-5 ps-5 pe-5 pb-5">
        <Row>
          <Col>
            <h1 className="text-center bg-info m-5 p-2 rounded">
              Premium Autos
            </h1>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="slider">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Image src={details?.url} fluid />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src={details?.url} fluid />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src={details?.url} fluid />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div>
              <div className="shadow-sm p-5 rounded-2 mt-5">
                <h1 className="text-start">Car Details </h1>
                <hr />
                <h4>
                  Brand Name: {details.brand},{" "}
                  <span className="text-primary">Price: {details.price}</span>
                </h4>
                <h6>Model: {details.model}</h6>
                <h6>Type: {details.type}</h6>
                <h6>Miles: {details.miles}</h6>
                <h6>Exterior: {details.exterior}</h6>
                <h6>Interior: {details.interior}</h6>
                <h6>Engine: {details.engine}</h6>
                <h6>Fuel: {details.fuel}</h6>
                <h6>Transmission: {details.transmission}</h6>
                <h6>Drive: {details.drive}</h6>
                <Link to={`/rating-form/${dId}`}>
                  <Button>
                    
                    Give Rating and feedback
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
