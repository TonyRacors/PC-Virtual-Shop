import React from "react";
import axios from "axios";

import app from "../../app.json";
import Cookies from "universal-cookie";
import Loading from "../loading/loading";
import "./login.css";

import { Container, Form, Button, Row, Col , Dropdown} from "react-bootstrap";
import {isNull} from "util";
import { calcularExpirarSesion } from "../helper/helper";

const {APIHOST} = app;
const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {

    this.setState({loading:true});

    axios.post(`${APIHOST}/usuarios/login`, {
      usuario: this.state.usuario,
      pass: this.state.pass,
    })

    .then((response) =>{
      if(isNull(response.data.token)){
        alert("El usuario y/o la contraseña son incorrectos");
      }
      else{
        cookies.set('_s', response.data.token,{
          path:'/',
          expires: calcularExpirarSesion(),
        });
      }

      this.setState({ loading:false });

    })
    .catch((err) =>{
      console.log(err);
      this.setState({ loading:false });
    })    
  }
  
  render() {

    return (

      <Container id="login-container">
        <Loading show={this.state.loading} />
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

                <Button variant="primary"
                  onClick={() => {
                    this.iniciarSesion();
                    }}
                    >
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
