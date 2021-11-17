import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import "./ManageOrders.css";
import OrderListing from "./OrderListing";
const ManageOrders = () => {
  const [manageOrders, setManageOrders] = useState([]);

  useEffect(() => {
    fetch("https://stormy-atoll-19739.herokuapp.com/premium-autos/manage-all-orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center bg-danger p-2 rounded-2 text-white mt-5">
              Manage All Orders : Admin Access
            </h1>
            <h1>{manageOrders.length}</h1>
            <Table responsive striped bordered variant="dark">
              <thead>
                <tr>
                  <th># index</th>
                  <th>Client Name</th>
                  <th>Client Mobile</th>
                  <th>Client Address</th>
                  <th>Order ID</th>
                  <th>Car Name</th>
                  <th>Car Id</th>
                  <th>Car Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {manageOrders.map((mc, index) => (
                  
                    <OrderListing key={mc._id} mc={mc} index={index} manageOrders={manageOrders} setManageOrders={setManageOrders} />

                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ManageOrders;
