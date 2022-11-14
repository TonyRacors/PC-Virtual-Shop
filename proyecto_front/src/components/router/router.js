import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from "../login/login"
import Index from "../inicio/index"
import Register from "../register/register"
import PrivateRoute from '../auth/privaterouter';

export default function AppRouter() {
    return(

        <Router>
            <Switch>
                <Route exact path ={["/login"]} component = {Login} />
                <Route exact path ={["/registro"]} component = {Register} />
                
                <Route exact path ={["/","/home"]} component = {Index} />
                {/* <PrivateRoute exact path ={["/home"]} component = {Privado} /> 

                    ¿Qué se podría ver solo si posee un usuario autenticado?
                */}

                <Route path ={["*"]} component = {()=> (
                    <h1 style={{marginTop:200 }}>
                        404 <br/> Página no encontrada
                    </h1>
                )} />
                
            </Switch>
        </Router>
    )
}

function Privado() {
    return (
        <h2>
            ¿No estoy autenticado?
        </h2>
    )
}