import React from 'react';

import { Container} from "react-bootstrap";
import "./register.css"

export default  class register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    
    render() { 
        return (
            <Container id="register-container">
                <h1>¿Y el registro para cuando?</h1>
            </Container>
            
        )
    }
}