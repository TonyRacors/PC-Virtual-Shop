import React from 'react';

import { Container} from "react-bootstrap";
import "./index.css"

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    
    render() { 
        return (
            <Container id="index-container">
                <h1>¿Y la página de inicio?</h1>
            </Container>
            
        )
    }
}