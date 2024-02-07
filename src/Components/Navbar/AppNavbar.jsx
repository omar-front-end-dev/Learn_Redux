import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function AppNavbar() {
    const cart = useSelector(state => state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top shadow-sm">
      <Container>
        <Link className="navbar-brand" href="#home">React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link fw-bold" to={"/"}>Home</Link>
            <Link className="nav-link fw-bold" to={"cart"} >Cart - <strong className="text-danger">{cart.length}</strong></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
