import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Logo.png";
import logo2 from "../Images/navimg2.png";
import { Container, Nav, Navbar } from "react-bootstrap";


const Navbar1 = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="cont gap-5"> 
        <div className="d-flex gap-3">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <p className="mt-2 fw-bold">TaskDuty</p> 
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto n-space">
            <Link className="n-link" to="/create-task">
              New Task
            </Link>
            <Link className="n-link" to="/all-tasks">
              All Task
            </Link>
            <img className="nav-img" src={logo2} alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
