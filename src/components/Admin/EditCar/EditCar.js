import React, { useEffect, useState } from "react";
// import "./UpdateCar.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router";
import AddProduct from "../AddProduct/AddPoduct";
import { Col, Container, Row } from "react-bootstrap";

const EditCar = () => {
  const [updateCar, setUpdateCar] = useState({});
  const { eId } = useParams();
  console.log(eId);

  useEffect(() => {
    fetch(`https://stormy-atoll-19739.herokuapp.com/premium-autos/selected-car/${eId}`)
      .then((res) => res.json())
      .then((data) => setUpdateCar(data));
  }, [eId]);

  // console.log("up:", updateCar);

  // posting updated car data
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(updateCar);
    axios
      .put(`https://stormy-atoll-19739.herokuapp.com/premium-autos/update-car/${eId}`, updateCar)
      .then((res) => {
        console.log(res);
      });
  };

  const handleOnchange = (e) => {
    setUpdateCar({ ...updateCar, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Container>
        <Row>
          <h1 className="text-center p-3 bg-dark text-white rounded">
            Update Car Info
          </h1>
          <h3>{updateCar?.brand}</h3>
          <Col>
            <form onSubmit={onSubmit} className="add-product-form">
              <input
                onChange={handleOnchange}
                name="id_num"
                value={updateCar?.id_num || ""}
                placeholder="id_number"
                required
              />
              <input
                onChange={handleOnchange}
                name="brand"
                value={updateCar?.brand || ""}
                placeholder="brand name"
              />
              <input
                onChange={handleOnchange}
                name="url"
                value={updateCar?.url || ""}
                placeholder="url"
              />
              <input
                onChange={handleOnchange}
                name="model"
                value={updateCar?.model || ""}
                placeholder="model name"
              />
              <input
                onChange={handleOnchange}
                name="type"
                value={updateCar?.type || ""}
                placeholder="type"
              />
              <input
                onChange={handleOnchange}
                name="miles"
                value={updateCar?.miles || ""}
                placeholder="mileage"
              />
              <input
                onChange={handleOnchange}
                name="exterior"
                value={updateCar?.exterior || ""}
                placeholder="exterior"
              />
              <input
                onChange={handleOnchange}
                name="interior"
                value={updateCar?.interior || ""}
                placeholder="interior"
              />
              <input
                onChange={handleOnchange}
                name="engine"
                value={updateCar?.engine || ""}
                placeholder="engine"
              />
              <input
                onChange={handleOnchange}
                name="fuel"
                value={updateCar?.fuel || ""}
                placeholder="fuel"
              />
              <input
                onChange={handleOnchange}
                name="transmission"
                value={updateCar?.transmission || ""}
                placeholder="transmission"
              />
              <input
                onChange={handleOnchange}
                name="drive"
                value={updateCar?.drive || ""}
                placeholder="drive"
              />
              <input
                onChange={handleOnchange}
                name="price"
                value={updateCar.price || ""}
                placeholder="price"
              />

              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>{" "}
    </div>
  );
};

export default EditCar;
