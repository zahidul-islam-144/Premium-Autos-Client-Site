import React, { useEffect, useState } from "react";
import "./SelectNow.css";
import { useParams } from "react-router";
// import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const SelectNow = () => {
  const { sId } = useParams();
  const [selectNow, setSelectNow] = useState([]);
  const [confirmData, setConfirmData] = useState({
    id_num: "",
    brand: "",
    price: "",
  });
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetch(`https://stormy-atoll-19739.herokuapp.com/premium-autos/select-now/${sId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectNow(data);
        // setConfirmData({selectNow.id_num, selectNow.brand, selectNow.price);
      });
  }, [sId]);

  const handleOnBlur = (e) => {
    setConfirmData({ ...confirmData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setConfirmData({
      id_num: selectNow.id_num,
      brand: selectNow.brand,
      price: selectNow.price,
    });
    console.log({ confirmData, mobile, address });
    // axios
    //   .post("https://stormy-atoll-19739.herokuapp.com/premium-autos/orders", data)
    //   .then((res) => console.log(res));
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
              onSubmit={handleOnSubmit}
              className="d-flex flex-column confirm-form"
            >
              <input
                onChange={handleOnBlur}
                name="id_num"
                value={selectNow.id_num}
                readOnly
              />
              <input
                onChange={handleOnBlur}
                name="brand"
                value={selectNow.brand}
                readOnly
              />
              <input
                onChange={handleOnBlur}
                name="price"
                value={selectNow.price}
                readOnly
              />
              <input
                onChange={(e) => setMobile(e.target.value)}
                name="mobile"
                placeholder="give your contact number 01XXXXXXXXX"
                required
              />

              <input
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                placeholder="give your address"
                required
              />

              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SelectNow;
