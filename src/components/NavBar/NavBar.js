import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mascotas Felices</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            
            <NavDropdown title="Comprar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Alimentos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Accesorios y Juguetes</NavDropdown.Item>
                          
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Cart/>
      </Container>
     
    </Navbar>
     
  );
}

export default NavBar;
