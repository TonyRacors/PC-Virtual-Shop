import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "../login/login"
import Index from "../inicio/index"
import Register from "../register/register"

export default function AppRouter() {
    return(

        <Router>
            <Routes>
                <Route exact path ="/login" element = {<Login/>} />
                <Route exact path ="/registro" element = {<Register/>} />
                <Route exact path ="/home" element = {<Index/>} />
                <Route path ="/*" element = {(
                    <h1 style={{marginTop:300}}>
                        404 <br/> Página no encontrada
                    </h1>
                )} />
                <Route exact path ="/" element = {<Index/>} />
                
            </Routes>
        </Router>
    )
}