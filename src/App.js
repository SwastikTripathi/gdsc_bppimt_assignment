import React from 'react'
import Home from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Register from './pages/register/Register'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListUser from './components/listUser/listUser';
import CreateUser from './components/createUser/createUser';
import EditUser from './components/editUser/editUser';

export default function App() {
  return (
    <div>
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
            <NavDropdown title="More" id="basic-nav-dropdown">
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
            {/* <a href="#hello" className='btn'>Log&nbsp;In</a>
            <BrowserRouter><Link target={"_blank"} to="user/create" className='btn'>Join&nbsp;Us</Link></BrowserRouter> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{backgroundColor: '#f1f3f4'}}>
      <div className='hero d-flex justify-content-between align-items-center' style={{height: '80vh', width: '95%', margin: 'auto auto'}}>
        <div>
            <h1 className='text-primary'>Google Developer Student Clubs</h1>
            <p style={{width: '90%', textAlign: 'justify'}}>B.P. Poddar Institute of Management and Technology or BPPIMT is an undergraduate college in West Bengal, India.
            We, in the community, conduct webinars, hands-on workshops, tutorials, informative talks and more to engage with the audience and grow the community at large. To connect with us and help us promote the peer-to-peer learning culture,Hit the JOIN button above.
Login and complete your profile, if prompted to.
That's it! Welcome aboard.
            </p>
            <span><BrowserRouter>
              <Link to="/" className='btn btn-outline-primary m-3'>List Users</Link>
              <Link to="user/create" className='btn btn-primary m-3'>Join the club</Link>
        <Routes>
          <Route index element={<ListUser />}/>
          <Route path="user/create" element={<CreateUser />}/>
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter></span>
            {/* <a href="#link" className='btn btn-primary m-3'>Join the club</a> */}
            <a href="#link" className='btn  bg-white m-1'>Learn more</a>
        </div>
        <div>
            <img src='/assets/gdsc_poster.png' style={{width: '45vw'}}></img>
        </div>
      </div>
      
    </div>
      <Home />
      {/* <Register /> */}
    </div>
  )
}