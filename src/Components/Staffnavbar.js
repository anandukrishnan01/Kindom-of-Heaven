import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import './Navbarstyle.css';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar className="Navbaritems" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-logo" href="/admin" > <h1>Kindom of <span className='blue'> Heaven</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" me-auto " id='nav-menu'>
            <Nav.Link as={Link} to="/enquiries">Enquiries</Nav.Link>
            <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

