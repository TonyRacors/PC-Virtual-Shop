import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container} from "react-bootstrap"
import Login from "./components/login/login"
import Menu from "./components/menu/navbar"

function App() {
  return (
    <div className="App">

      <Menu />

      <Container>
        <Login />
      </Container>

    </div>
  );
}

export default App;
