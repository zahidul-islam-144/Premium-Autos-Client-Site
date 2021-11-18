import React from "react";
import "./TopNav.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
const TopNav = () => {
  // const { allContexts } = useAuth();
  // const { user, logout } = allContexts;
  const { user, logout } = useAuth();
  console.log("top-nav:", user);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ zIndex: "9999" }}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">Premium Autos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {/* <div className="menu-list"> */}
              <Nav.Link as={HashLink} to="/home#home" className="items">
                <li>Home</li>
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#about" className="items">
                <li>About</li>
              </Nav.Link>

              <Link to="/explore" className="items">
                <li>Explore</li>
              </Link>

              {user.email && (
              <Link to="/dashboard" className="items">
                <li>Dashboard</li>
              </Link>
               )}

              <Nav.Link as={HashLink} to="/home#contact" className="items">
                <li>Contact</li>
              </Nav.Link>
            </Nav>
            {!user.email ? (
              <Link to="/login" className="items">
                <li>Login</li>
              </Link>
            ) : (
              <Button className="auth-btn" onClick={logout}>
                Logout
              </Button>
            )}

            {user.email ? (
              <span className="text-white auth-title ms-2">{user.displayName}</span>
            ) : (
              <span className="text-white auth-title ms-2">{user.email}</span>
            )}
            {user.email && (
              <span className="text-white auth-title ms-2">{user.email}</span>
            )}

            {/* </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
