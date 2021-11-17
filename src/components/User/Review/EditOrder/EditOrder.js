import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";

const EditOrder = () => {
  const { eoId } = useParams();
  const [updateOrder, setUpdateOrder] = useState([]);

  useEffect(() => {
    fetch(`https://stormy-atoll-19739.herokuapp.com/premium-autos/selected-order/${eoId}`)
      .then((res) => res.json())
      .then((data) => setUpdateOrder(data));
  }, [eoId]);

  const handleOnchange = (e) => {
    setUpdateOrder({ ...updateOrder, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(updateCar);
    axios
      .put(`https://stormy-atoll-19739.herokuapp.com/premium-autos/update-order/${eoId}`, updateOrder)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="mt-5">Edit order page</h1>
            <form onSubmit={onSubmit} className="add-product-form">
              <input
                onChange={handleOnchange}
                name="id_num"
                value={updateOrder?.id_num || ""}
                placeholder="id_number"
                disabled
              />
              <input
                onChange={handleOnchange}
                name="brand"
                value={updateOrder?.brand || ""}
                placeholder="brand name"
                disabled
              />
              <input
                onChange={handleOnchange}
                name="price"
                value={updateOrder?.price || ""}
                placeholder="price"
                disabled
              />

              <input
                onChange={handleOnchange}
                name="client_mobile"
                value={updateOrder?.client_mobile || ""}
                placeholder="mobile"
              />
              <input
                onChange={handleOnchange}
                name="client_address"
                value={updateOrder?.client_address || ""}
                placeholder="address"
              />

              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditOrder;
