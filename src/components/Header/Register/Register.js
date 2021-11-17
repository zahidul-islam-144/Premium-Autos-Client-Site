import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Toast,
  Spinner,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { registerUser, isLoading } = useAuth();
  // const { allContexts } = useAuth();
  // const { registerUser, isLoading } = allContexts;
  const [registerData, setRegisterData] = useState({});
  const history = useHistory();

  const handleOnChange = (e) => {
    const inputField = e.target.name;
    const inputValue = e.target.value;
    console.log(inputField, inputValue);

    const newRegisterData = { ...registerData };
    newRegisterData[inputField] = inputValue;
    setRegisterData(newRegisterData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
    if (registerData.password1 !== registerData.password2) {
      alert("didn't match");
      return;
    }
    console.log("register.email: ", registerData.email);

    registerUser(registerData.email, registerData.password1, registerData.name, history);

    alert("user created");
  };
  return (
    <>
      <Container id="login" className="register-container">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <h1 className="text-center login-title">
              Please, Register at first
            </h1>
            {!isLoading && (
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Your Name</Form.Label>
                  <Form.Control
                    name="name"
                    onBlur={handleOnChange}
                    type="email"
                    placeholder="Enter Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    onBlur={handleOnChange}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password1"
                    onBlur={handleOnChange}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password2"
                    onBlur={handleOnChange}
                    type="password"
                    placeholder="Re-Type Password"
                    required
                  />
                </Form.Group>

                <Button
                  className="d-block mx-auto mt-2 mb-2 ps-5 pe-5"
                  variant="primary"
                  type="submit"
                  onClick={handleOnSubmit}
                >
                  Register
                </Button>
                <h4 className="text-center m-3">
                  Already, registered ? Then, <Link to="/login">Login...</Link>
                </h4>
              </Form>
            )}

            {isLoading && <Spinner animation="border" />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
