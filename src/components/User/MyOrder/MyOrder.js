import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const [orderPage, setOrderPage] = useState([]);
  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    fetch(`https://stormy-atoll-19739.herokuapp.com/premium-autos/my-orders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrderPage(data));
  }, [email]);

  console.log(orderPage);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center bg-black rounded-2 p-2 mt-5 text-white">
              My Order Page
            </h1>
            <h1 className="text-end">Your Total Order: {orderPage.length}</h1>
            <Table responsive striped bordered variant="dark">
              <thead>
                <tr>
                  <th># index</th>
                  <th>Mobile</th>
                  <th>My address</th>
                  <th>Order ID</th>
                  <th>Car Name</th>
                  <th>Car Id</th>
                  <th>Car Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orderPage.map((op, index) => (
                  <tr>
                    <td>{index+1}</td>
                    <td>{op.client_mobile}</td>
                    <td>{op.client_address}</td>
                    <td>{op._id}</td>
                    <td>{op.brand}</td>
                    <td>{op.id_num}</td>
                    <td>{op.price}</td>
                    <td>
                      <span
                        className="text-white rounded mx-auto"
                        style={{ height: "100%", width: "100%", backgroundColor:"#FF2D2D", padding:"8px" }}
                      >
                        {op.status ? "Accepted" : "Pending"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyOrder;
