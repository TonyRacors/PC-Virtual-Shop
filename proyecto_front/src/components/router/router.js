import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../login/login";
import Index from "../inicio/index";
import Register from "../register/register";
import PrivateRoute from "../auth/privaterouter";
import Productos from "../productos/productos.buscar";
import Empleados from "../empleados/empleados.buscar";
import Menu from "../menu/configuracion";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/login"]} component={Login} />
        <Route exact path={["/registro"]} component={Register} />
        <Route exact path={["/", "/home"]} component={Index} />

        <PrivateRoute
          exact
          path={["/configuracion-productos"]}
          component={Productos}
        />
        <PrivateRoute
          exact
          path={["/configuracion-empleados"]}
          component={Empleados}
        />
        <PrivateRoute exact path={["/configuracion"]} 
        component={Menu} 
        />

        <Route
          path={["*"]}
          component={() => (
            <h1 style={{ marginTop: 200 }}>
              404 <br /> Página no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
