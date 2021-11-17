import React, { useState } from "react";
import "./Dashboard.css";
import {
  Offcanvas,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../../User/MyOrder/MyOrder";
import Review from "../../User/Review/Review";
import Payment from "../../User/Payment/Payment";
import DashBoardHome from "./DashBoardHome/DashBoardHome";
import MakeAdmin from "../../Admin/MakeAdmin/MakeAdmin";
import AddProduct from "../../Admin/AddProduct/AddPoduct";
import ManageProducts from "../../Admin/ManageProducts/ManageProducts";
import ManageOrders from "../../Admin/ManageOrders/ManageOrders";

import AdminRoute from "../../AdminRoute/AdminRoute";
import EditCar from "../../Admin/EditCar/EditCar";
import { BsMenuButtonWide } from "react-icons/bs";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user, admin } = useAuth();

  // const { allContexts } = useAuth();
  // const { user } = allContexts;
  let { path, url } = useRouteMatch();

  return (
    <div className="dashboard-container ">
      <Container fluid>
        <Row>
          <Col>
            <Button className="dash-btn" variant="primary" onClick={handleShow}>
              <span>
                <BsMenuButtonWide />
              </span>
            </Button>

            <Offcanvas
              className="offcanvas-height-width"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>User Dashboard</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-body">
                {user.email && admin ? (
                  <div>
                    <ListGroup>
                      <ListGroup.Item>
                        <Link to={`${url}/my-order`} className="user-item">
                          My Order
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to={`${url}/review-order`} className="user-item">
                          Review Order
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to={`${url}/payment`} className="user-item">
                          Payment System
                        </Link>
                      </ListGroup.Item>
                      {/* <ListGroup.Item>
                    <Link>Logout</Link>
                  </ListGroup.Item> */}
                    </ListGroup>
                  </div>
                ) : (
                  <div>
                    <ListGroup>
                      <ListGroup.Item>
                        <Link to={`${url}/my-order`} className="user-item">
                          My Order
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to={`${url}/review-order`} className="user-item">
                          Review Order
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to={`${url}/payment`} className="user-item">
                          Payment System
                        </Link>
                      </ListGroup.Item>
                      {/* <ListGroup.Item>
                    <Link>Logout</Link>
                  </ListGroup.Item> */}
                    </ListGroup>
                  </div>
                )}

                {/* admin panel */}
                {admin && (
                  <div>
                    <hr />
                    <Offcanvas.Title>Admin Dashboard</Offcanvas.Title>
                    <ListGroup>
                      <ListGroup.Item>
                        <Link to={`${url}/make-admin`} className="admin-item">
                          Make Admin
                        </Link>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Link to={`${url}/add-product`} className="admin-item">
                          Add Car
                        </Link>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Link
                          to={`${url}/manage-products`}
                          className="admin-item"
                        >
                          Manage All Cars
                        </Link>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Link
                          to={`${url}/manage-orders`}
                          className="admin-item"
                        >
                          Manage All Orders
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                )}
              </Offcanvas.Body>
            </Offcanvas>

            {/* nested routes */}
            <Switch>
              <Route path={`${path}/my-order`}>
                <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/review-order`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              {/* admin route */}
              {!admin && (
                <Route exact path={path}>
                  {/* <DashBoardHome></DashBoardHome> */}
                  <MyOrder></MyOrder>
                </Route>
              )}
              {admin && (
                <Route exact path={path}>
                  <ManageProducts></ManageProducts>
                </Route>
              )}
              <AdminRoute exact path={`${path}/make-admin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute exact path={`${path}/add-product`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manage-products`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
              <AdminRoute exact path={`${path}/edit-car/:eId`}>
                <EditCar />
              </AdminRoute>
              <AdminRoute path={`${path}/manage-orders`}>
                <ManageOrders></ManageOrders>
              </AdminRoute>
              }
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
