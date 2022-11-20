import React from "react";

import "./navbar.css";
import { Container, Nav, Navbar, DropdownButton, Dropdown, Row } from "react-bootstrap";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserEdit} from "@fortawesome/free-solid-svg-icons";

export default class menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (

      <Navbar fixed="top" bg="primary" variant="dark" expand="lg" id="navbar">

        <Container>
          <Navbar.Brand href="../home">PC Virtual Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Productos</Nav.Link>
              <Nav.Link href="#link">Contactenos</Nav.Link>
            </Nav>

            <DropdownButton id="dropdown-basic-button" title="Mi cuenta">

              <Dropdown.Header> 
                <Row><FontAwesomeIcon icon={faUserEdit} /></Row>
                <Row>¿Y mí nombre?</Row>
              </Dropdown.Header>

              
              <Dropdown.Item href="../login">Iniciar sesión</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Mis pedidos</Dropdown.Item>
              <Dropdown.Divider/>

              <Dropdown.Item href="#/action-2">Cerrar sesión</Dropdown.Item>
              
            </DropdownButton>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}