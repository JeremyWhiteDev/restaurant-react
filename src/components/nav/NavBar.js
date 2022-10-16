import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  Button,
} from "react-bootstrap";
import "./NavBar.css";
import "./NavBar.scss";

// define logic to find active link and change styling/addClassName
export const NavBar = () => {
  const navigate = useNavigate();

  const [currentView, setCurrentView] = useState();

  //use effect and a state change for handling clicks?
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          bg="earth"
          expand={expand}
          variant="dark"
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg="earth"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body variant="dark">
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <NavLink
                    to="/users"
                    className={({ isActive }) => {
                      console.log(isActive);
                      return "nav-link" + (isActive ? " activater" : "");
                    }}
                  >
                    Users
                  </NavLink>
                  <NavLink
                    to="/users"
                    className={({ isActive }) => {
                      console.log(isActive);
                      return "nav-link" + (isActive ? " activater" : "");
                    }}
                  >
                    Users
                  </NavLink>
                  <NavLink
                    to="/users"
                    className={({ isActive }) => {
                      console.log(isActive);
                      return "nav-link" + (isActive ? " activater" : "");
                    }}
                  >
                    Users
                  </NavLink>
                  <NavLink
                    to="/users"
                    className={({ isActive }) => {
                      console.log(isActive);
                      return "nav-link" + (isActive ? " activater" : "");
                    }}
                  >
                    Users
                  </NavLink>
                  <NavLink to="/about"></NavLink>
                  <NavLink></NavLink>
                  <NavLink></NavLink>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
