import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import gdsc_logo from '../../../public/assets/gdsc_logo.svg';

function Navibar() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container style={{padding: '0.5rem 0.5rem'}}>
        <Navbar.Brand href="#home">
        <img src='/assets/gdsc_logo_pic.png' style={{width: '40px'}}></img><span>&ensp;Google Student Developer Club BPPIMT</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link">Home</Nav.Link>
            <Nav.Link href="#link">Our&nbsp;Goals</Nav.Link>
            <Nav.Link href="#link">Our&nbsp;Works</Nav.Link>
            <Nav.Link href="#link">Guidelines</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <a href="#link" className='btn'>Log&nbsp;In</a>
            <a href="#link" className='btn btn-primary'>Join&nbsp;Us</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;