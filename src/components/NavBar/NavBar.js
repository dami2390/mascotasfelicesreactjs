import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from './CartWidget';
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
            <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/">Inicio </NavLink>
            <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/categoria/alimento">Alimentos </NavLink>
            <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/categoria/accesorio">Accesorios y Juguetes </NavLink>
            <NavLink className={({isActive}) => isActive ? "classActive" : "classInactive"} to="/">Contacto </NavLink>
          </Nav>
          <Link to="/cart">
          <Carrito/>
          </Link>
        </Navbar.Collapse>
       
      </Container>
     
    </Navbar>
     
  );
}

export default NavBar;