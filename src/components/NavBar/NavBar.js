import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './CartWidget';
import logo from '../../../src/logomascotas.png';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className='fondo' expand="lg">
      <Container>
        <Navbar.Brand >
          <img
            src={logo}
            width="110"
            height="110"
            className="d-inline-block align-top"
            alt="mascotas logo"
          />
        </Navbar.Brand>
        <Link style={{textDecoration: 'none', padding: '5px'}} to='/home'>
                        <Navbar.Brand className="text-white titulo">Mascotas Felices</Navbar.Brand>
                    </Link>
                    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/home">Inicio </NavLink>
            <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/category/alimentos">Alimentos </NavLink>
            <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/category/accesorios">Accesorios y Juguetes </NavLink>
            <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/">Contacto </NavLink>
          </Nav>
          
          <Cart/>
        
        </Navbar.Collapse>
       
      </Container>
     
    </Navbar>
     
  );
}

export default NavBar;
{/* <Nav.Link href="#home">Inicio</Nav.Link>
            
            <NavDropdown title="Comprar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Alimentos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Accesorios y Juguetes</NavDropdown.Item>
                          
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link> */}