import "./Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap/";

function NavBar() {
    return (
        <Navbar fixed="top" bg="*" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex-grow-1 justify-content-between">
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#our-team">Our Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default NavBar;