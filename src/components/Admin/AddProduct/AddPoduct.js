import React from "react";
import "./AddProduct.css";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from "../../../hooks/useAuth";

const AddPoduct = () => {
  const { register, handleSubmit } = useForm();
  const { isLoading } = useAuth();

  // posting car to the database
  const onSubmit = (data) => {
    console.log(data);
    axios.post('https://stormy-atoll-19739.herokuapp.com/premium-autos/cars',data)
    .then(res => {
   console.log(res);
    })
 
  };

  return (
    <div>
      <Container className="add-product-container">
        <Row>
          <Col>
            <h1 className="text-center bg-info p-3 mb-5 mt-2 rounded">
              Add Car In Database
            </h1>
            {!isLoading &&
            <form onSubmit={handleSubmit(onSubmit)} className="add-product-form">
        
              <input {...register("id_num")} placeholder="id_number" required/>
              <input {...register("brand")} placeholder="brand name" />
              <input {...register("url")} placeholder="url" />
              <input {...register("model")} placeholder="model name" />
              <input {...register("type")} placeholder="type" />
              <input {...register("miles")} placeholder="mileage" />
              <input {...register("exterior")} placeholder="exterior" />
              <input {...register("interior")} placeholder="interior" />
              <input {...register("engine")} placeholder="engine" />
              <input {...register("fuel")} placeholder="fuel" />
              <input {...register("transmission")} placeholder="transmission" />
              <input {...register("drive")} placeholder="drive" />
              <input {...register("price")} placeholder="price" />
             

              <input type="submit" />
            </form>}
            {isLoading && <h3>Data added successfully....</h3>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddPoduct;
