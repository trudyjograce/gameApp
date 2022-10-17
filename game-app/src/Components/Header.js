import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Images/logo.png";

import "../CSS/style.css";

function Header() {
  return (
    <>
      <Navbar className="navBar" bg="dark" variant="dark" fixed="bottom">
        <Container>
          <Navbar.Brand href="#home" id="home">
            <img
              src={Logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            />
            <h1>Card Match Game</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="#game">Play</Nav.Link>
            <Nav.Link href="#stats">Stats</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
