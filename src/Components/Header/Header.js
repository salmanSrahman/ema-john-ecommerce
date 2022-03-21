import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header-part">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} className="header-logo" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "goldenrod" : "black",
                    textDecoration: isActive ? "underline" : "NONE",
                  };
                }}
                to="/shop"
              >
                Shop
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "goldenrod" : "black",
                    textDecoration: isActive ? "underline" : "NONE",
                  };
                }}
                to="/order"
              >
                Order Review
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "goldenrod" : "black",
                    textDecoration: isActive ? "underline" : "NONE",
                  };
                }}
                to="/inventory"
              >
                Manage Inventory
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
