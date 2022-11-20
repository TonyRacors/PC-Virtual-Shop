import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
//import Login from "./components/login/login"
import Navbar from "./components/navbar/navbar";
import AppRouter from "./components/router/router";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
