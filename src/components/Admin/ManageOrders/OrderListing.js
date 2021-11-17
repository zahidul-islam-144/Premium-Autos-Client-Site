import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ManageOrders.css";

const OrderListing = ({ mc, index, manageOrders, setManageOrders }) => {
  const [status, setStatus] = useState(mc.status);

  const handleStatus = (mc) => {
    axios
      .put(`https://stormy-atoll-19739.herokuapp.com/premium-autos/orders/${mc._id}`, mc)
      .then((res) => {
        res.data.modifiedCount > 0 ? setStatus(true) : setStatus(false);
      });
  };

  // delete part
  const deleteOrder = (mc) => {
    console.log("got delete", mc._id);
    const proceed = window.confirm(
      "Are you Sure to delete user order from database ?"
    );
    if (proceed) {
      fetch(`https://stormy-atoll-19739.herokuapp.com/premium-autos/delete-user-order/${mc._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            window.alert("Deleted user order Successfully...");
            const remainingOrders = manageOrders.filter(
              (remainingId) => remainingId._id !== mc._id
            );
            setManageOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{mc.client_name}</td>
      <td>{mc.client_mobile}</td>
      <td>{mc.client_address}</td>
      <td>{mc._id}</td>
      <td>{mc.brand}</td>
      <td>{mc.id_num}</td>
      <td>{mc.price}</td>
      <td>{status ? "Accepted" : "Pending"}</td>
      <td>
        <span className="d-flex justify-content-between">
          <Button
            onClick={() => handleStatus(mc)}
            className="text-black rounded mx-auto m-1 status-btn"
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#AFFF33",
              padding: "8px",
            }}
          >
            {status ? "Reject" : "Accept"}
          </Button>
          <Button
            onClick={() => deleteOrder(mc)}
            className="text-black rounded mx-auto m-1 status-btn"
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#FF2D2D",
              padding: "8px",
            }}
          >
            Delete
          </Button>
        </span>
      </td>
    </tr>
  );
};

export default OrderListing;
