import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../helper/helper";

import DataGrid from "../grid/grid";

import "./productos.css";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "nombre",
    text: "Nombre",
  },
  {
    dataField: "disponibles",
    text: "Existencias",
  },
  {
    dataField: "precioventa",
    text: "Precio venta",
  },
  {
    dataField: "tipo",
    text: "Tipo",
  },
  {
    dataField: "categoria",
    text: "Categoria",
  },
  {
    dataField: "descripcion",
    text: "Descripción",
  },
  {
    dataField: "proveedor",
    text: "Proveedor",
  },
  {
    dataField: "mail",
    text: "Correo electronico",
  },
  {
    dataField: "direccion",
    text: "Dirección",
  },
  {
    dataField: "telefono",
    text: "Telefono",
  },
];

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
      request
        .get(this.props.url)
        .then((response) => {
          this.setState({ rows: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      return (
        <Container id="empleados-buscar-container">
          <Row>
            <h1>Información de los productos</h1>
            <hr />
          </Row>
          <Row>
          <DataGrid url="/productos" columns={columns} />
        </Row>
        </Container>
      );
    }
  }