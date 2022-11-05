import React from "react";

import { Container, Form, Button, Row, Col , Dropdown} from "react-bootstrap";
import "./login.css";

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {

    return (

      <Container id="login-container">
        <Row>
          <Col sm="12" xs="12" md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }} xl={{ span: 4, offset: 4 }}>
           
            <Row>
              <h2>¡Bienvenido!</h2>
            </Row>

            <Row>
              <Form>

                <Form.Group className="mb-3" controlId="formBasicUser" >
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    onChange={(e) => this.setState({ usuario: e.target.value })}
                    placeholder="Por favor ingresa tu usuario."
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Por favor ingresa tu contraseña."
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Iniciar sesión
                </Button>

                <Dropdown.Divider/>

                <a href="../registro">¿Aún no posees una cuenta?</a>

              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
