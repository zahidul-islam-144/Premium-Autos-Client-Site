import React, { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import axios from "axios";

const MakeAdmin = () => {
  const [email, setEmail] = useState();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    axios
      .put("https://stormy-atoll-19739.herokuapp.com/premium-autos/users/make-admin", user)
      .then((res) =>{
        if(res.data.modifiedCount>0){
          alert('admin added');
        }
      })
      
  };

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h1 className="text-center m-5 bg-danger p-2 rounded-2 text-white">
              Make an admin
            </h1>
            <p className="text-center fs-5">
              <span className="fw-bold">*** Note:</span> Aware before making an
              admin. An admin can access everything of this site.
            </p>
          </div>
          <div className="d-flex p-5 shadow-lg">
            <Form onSubmit={handleAdminSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address :</Form.Label>
                <Form.Control
                  onBlur={handleOnBlur}
                  type="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  *** Make sure, Email must exists in database at first.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" className="d-block">
                Make Admin
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAdmin;
