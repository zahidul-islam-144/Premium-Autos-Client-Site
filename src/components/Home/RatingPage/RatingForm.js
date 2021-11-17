import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import "./RatingForm.css";

const RatingForm = () => {
  const [ratingCarInfo, setRatingCarInfo] = useState({});
  console.log(ratingCarInfo);
  const { user } = useAuth();
  const { rId } = useParams();
  console.log(user);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`https://stormy-atoll-19739.herokuapp.com/premium-autos/details/${rId}`)
      .then((res) => res.json())
      .then((data) => {
        reset(data);
        setRatingCarInfo(data);
      });
  }, [rId, reset]);

  const onSubmit = (data) => {
    const feedbackData = {
      brand: ratingCarInfo.brand,
      model: ratingCarInfo.model,
      user_name: user.displayName,
      email: user.email,
      user_img: data.user_img,
      star: data.star,
      comments: data.comments,
    };
    console.log(feedbackData);
    axios
      .post("https://stormy-atoll-19739.herokuapp.com/premium-autos/feedbacks", feedbackData)
      .then((res) => {
        if (res.data.insertedId > 0) {
          alert("Feedback placed successfully !");
        }
      });
  };

  return (
    <div>
      <Container className="mt-5 p-5">
        <Row>
          <Col>
            <h1 className="text-center bg-light mt-5 mb-5 rounded-2 padding-2 ">
              Your feedback is important to us !
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="add-rating-form d-flex flex-column"
            >
              <input
                defaultValue={ratingCarInfo?.brand}
                {...register("brand")}
                placeholder="Car Name"
                readOnly
              />
              <input
                defaultValue={ratingCarInfo?.model}
                {...register("model")}
                placeholder="Model Name"
                readOnly
              />
              <input
                defaultValue={user.displayName}
                {...register("user_name")}
                placeholder="name"
                readOnly
              />
              <input
                defaultValue={user.email}
                {...register("email")}
                placeholder="email"
                readOnly
              />
              <input {...register("user_img")} placeholder="set your image" />
              <input
                {...register("star")}
                placeholder="add rating out of 5 (in number)"
                required
              />
              <textarea
                {...register("comments")}
                placeholder="comments"
                required
              />

              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RatingForm;
