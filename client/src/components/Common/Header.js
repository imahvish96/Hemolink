import React, { Component } from "react";
import { Nav, Navbar, Modal, Button } from "react-bootstrap";
import "./Common.css";
import { NavLink, Link } from "react-router-dom";
import EnrollUser from "../Register/Register";

class Head extends Component {
  constructor() {
    super();
    this.state = {
      view: "false",
      isLogin: false,
    };
  }
  acceptTerm = () => {
    this.setState({
      view: !this.state.view,
    });
  };

  render() {
    return (
      <>
        <Modal show={this.state.view} size="lg" onHide={this.acceptTerm}>
          <Modal.Header className="border-0" closeButton></Modal.Header>
          <Modal.Body className="pt-0 pb-0">
            <EnrollUser usertype="donate plasma" />
          </Modal.Body>
        </Modal>

        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          className="bg-bright sticky-top"
        >
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src={process.env.PUBLIC_URL + "/images/logo/logo.png"}
                alt=""
                width={200}
              />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavLink
                  to="/"
                  exact
                  className="nav-link text-uppercase"
                  activeStyle={{ color: "#2a81ea" }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/list/request"
                  className="nav-link text-uppercase"
                  activeStyle={{ color: "#2a81ea" }}
                >
                  Request List
                </NavLink>
                <NavLink
                  to="/list/donor"
                  className="nav-link text-uppercase"
                  activeStyle={{ color: "#2a81ea" }}
                >
                  Donor List
                </NavLink>
                {this.state.isLogin ? (
                  <Button className="nav-btn" onClick={this.acceptTerm}>
                    Register Now
                  </Button>
                ) : (
                  <Button className="nav-btn">
                    <Link to="/signin" style={{color: '#fff', textDecoration:'none'}}>
                      Login
                    </Link>
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
export default Head;
