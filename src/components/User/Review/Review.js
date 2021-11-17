import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const [editOrders, setEditOrders] = useState([]);
  console.log(editOrders);
  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    fetch(`https://stormy-atoll-19739.herokuapp.com/premium-autos/my-orders/${email}`)
      .then((res) => res.json())
      .then((data) => setEditOrders(data));
  }, [email]);

  // delete order
  const handleDeleteOrder = (orderId) => {
    console.log(orderId);
    const proceed = window.confirm(
      "Are you Sure to delete your car from database ?"
    );
    if (proceed) {
      fetch(`https://stormy-atoll-19739.herokuapp.com/premium-autos/delete-order/${orderId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            window.alert("Deleted your car Successfully...");
            const remainingOrders = editOrders.filter(
              (remainingId) => remainingId._id !== orderId
            );
            setEditOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center p-2 rounded-2 bg-danger text-white">
              Review Order
            </h1>

            <Table responsive striped bordered variant="dark">
              <thead>
                <tr>
                  <th># index</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>Order ID</th>
                  <th>Car Name</th>
                  <th>Car Id</th>
                  <th>Car Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {editOrders.map((ed, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{ed.client_mobile}</td>
                    <td>{ed.client_address}</td>
                    <td>{ed._id}</td>
                    <td>{ed.brand}</td>
                    <td>{ed.id_num}</td>
                    <td>{ed.price}</td>
                    <td>
                      <span>
                        <MdDelete
                          style={{ cursor: "pointer" }}
                          className="m-1"
                          onClick={() => handleDeleteOrder(ed._id)}
                        />
                      </span>
                      <span>
                        <Link to={`/edit-order/${ed._id}`}>
                          <BsFillPencilFill
                            style={{ cursor: "pointer" }}
                            className="m-1"
                          />
                        </Link>
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

export default Review;
