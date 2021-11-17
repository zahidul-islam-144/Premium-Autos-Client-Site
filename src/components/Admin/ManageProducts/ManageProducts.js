import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./ManageProducts.css";
import { MdDelete } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [manageCars, setManageCars] = useState([]);

  useEffect(() => {
    fetch("https://stormy-atoll-19739.herokuapp.com/premium-autos/manage-cars")
      .then((res) => res.json())
      .then((data) => setManageCars(data));
  }, []);

  // deleting car by their specific _id
  const handleDeleteCar = (carId) => {
    console.log(carId);
    const proceed = window.confirm(
      "Are you Sure to delete your car from database ?"
    );
    if (proceed) {
      fetch(`https://stormy-atoll-19739.herokuapp.com/premium-autos/delete-car/${carId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            window.alert("Deleted your car Successfully...");
            const remainingCars = manageCars.filter(
              (remainingId) => remainingId._id !== carId
            );
            setManageCars(remainingCars);
          }
        });
    }
  };
  return (
    <>
      <Container className="manage-car-container">
        <h1 className="text-center m-2 bg-info p-3 rounded">
          Premium Autos : Admin Access
        </h1>
        <div className="d-flex justify-content-between mb-3 ps-3 pe-3">
          <h1>Manage added Cars</h1>
          <h1>Total Cars: {manageCars.length}</h1>
        </div>
        <Row>
          <Col>
            <Table responsive striped bordered variant="dark">
              <thead>
                <tr>
                  <th># index</th>
                  <th>id Numebr</th>
                  <th>Brand</th>
                  <th>URL</th>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Mileage</th>
                  <th>Exterior</th>
                  <th>Interior</th>
                  <th>Engine</th>
                  <th>Fuel</th>
                  <th>Transmission</th>
                  <th>Drive</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {manageCars.map((mc, index) => (
                  <tr>
                    <td>{index}</td>
                    <td>{mc._id}</td>
                    <td>{mc.brand}</td>
                    <td>{mc.url}</td>
                    <td>{mc.model}</td>
                    <td>{mc.type}</td>
                    <td>{mc.miles}</td>
                    <td>{mc.exterior}</td>
                    <td>{mc.interior}</td>
                    <td>{mc.engine}</td>
                    <td>{mc.fuel}</td>
                    <td>{mc.transmission}</td>
                    <td>{mc.drive}</td>
                    <td>{mc.price}</td>
                    <td className="bg-success">
                      <span
                        className="del-edit-btn"
                        onClick={() => {
                          handleDeleteCar(mc._id);
                        }}
                      >
                        <MdDelete className="icon"/>
                      </span>
                      <span className="del-edit-btn">
                        <Link to={`/dashboard/edit-car/${mc._id}`}>
                          <BsFillPencilFill className="icon"/>
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
    </>
  );
};

export default ManageProducts;
