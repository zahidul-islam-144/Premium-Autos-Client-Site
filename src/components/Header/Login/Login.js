import React, { useState } from "react";
import "./Login.css";
import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  // const {allContexts} = useAuth();
  // const { isLoading, login, signInWithGoogle } = allContexts;

  const { isLoading, login, signInWithGoogle } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const inputField = e.target.name;
    const inputValue = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[inputField] = inputValue;
    setLoginData(newLoginData);
  };

  // email password login
  const handleOnSubmit = (e) => {
    console.log("logindata:", loginData);
    login(loginData.email, loginData.password, location, history);
    alert("Successfully log in...");
  };

  // google login
  const handleGoogleLogin = (location, history) => {
    signInWithGoogle(location, history);
  };
  return (
    <>
      <Container id="login" className="login-container">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <h1 className="text-center login-title">Please, Login at first</h1>

            {!isLoading && (
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    onChange={handleOnChange}
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
                    name="password"
                    onChange={handleOnChange}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Button
                  className="d-block mx-auto mt-2 mb-2 ps-5 pe-5"
                  variant="primary"
                  type="submit"
                  onClick={handleOnSubmit}
                >
                  Login
                </Button>
              </div>
            )}
            {isLoading && (
              <Spinner className="text-center" animation="border" />
            )}

            <h5 className="text-center mt-4 mb-2">
              Not a member ? Please,{" "}
              <span className="text-reg">
                <Link to="/register" className="register-link">
                  register...
                </Link>
              </span>
            </h5>
            <p className="text-center m-3">
              --------------------------------------------------
            </p>

            <Button
              className="d-block mx-auto mt-2 mb-2 ps-5 pe-5"
              variant="primary"
              type="submit"
              onClick={handleGoogleLogin}
            >
              Google Sign in
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
