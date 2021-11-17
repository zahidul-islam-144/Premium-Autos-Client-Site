import React, { useEffect, useState } from "react";
import "./SelectNow.css";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import useAuth from "../.././hooks/useAuth";

const SelectNowForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectNow, setSelectNow] = useState([]);
  const { sId } = useParams();
  const { user } = useAuth();
  console.log(sId);

  // console.log(selectNow);
  useEffect(() => {
    fetch(
      `https://stormy-atoll-19739.herokuapp.com/premium-autos/select-now/${sId}`
    )
      .then((res) => res.json())
      .then((data) => {
        reset(data);
        setSelectNow(data);
      });
  }, [sId, reset]);

  const onSubmit = (data) => {
    // const confirmOrderData = {id_num: data.id_num, brand: data.brand, price: data.price, mobile: data.mobile, address: data.address }
    // data.id_num = selectNow.id_num;
    // data.brand = selectNow.brand;
    // data.price = selectNow.price;

    const orderData = {
      id_num: data.id_num,
      brand: data.brand,
      price: data.price,
      client_name: user.displayName,
      client_email: user.email,
      client_mobile: data.mobile,
      client_address: data.address,
    };
    console.log(orderData);
    axios
      .post("https://stormy-atoll-19739.herokuapp.com/premium-autos/orders", orderData
      )
      .then((res) => console.log(res));
  };
  return (
    <>
      <Container className="select-now-container mt-5 pb-5">
        <Row>
          <Col>
            <h1 className="text-center m-5 bg-success p-2 rounded-2 text-white">
              Confirm your order
            </h1>
            <h3 className="text-center mb-2">
              {selectNow?.brand}-{selectNow.model}
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column confirm-form"
            >
              <input
                {...register("id_num")}
                defaultValue={selectNow?.id_num}
                readOnly
              />
              <input
                {...register("brand")}
                defaultValue={selectNow?.brand}
                readOnly
              />
              <input
                {...register("price")}
                defaultValue={selectNow?.price}
                readOnly
              />

              <input
                {...register("mobile", { required: true })}
                placeholder="give your contact number 01XXXXXXXXX"
              />

              <input
                {...register("address", { required: true })}
                placeholder="give your address"
              />

              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SelectNowForm;
