import React from "react";

import { Container } from "react-bootstrap";
import "./configuracion.css";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container id="config-container">
        <h1>¡Bienvenido!</h1>

        <br />
        <h4>¿ Qué desea realizar?</h4>

        <a href="../configuracion-productos">Ver productos</a>
        <br />
        <a href="../configuracion-empleados">Ver empleados</a>
      </Container>
    );
  }
}
