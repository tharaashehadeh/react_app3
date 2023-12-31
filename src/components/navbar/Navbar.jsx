import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function CustomNavbar() {
  return (
    <>
    <Navbar expand="lg" className="alert alert-danger  bag navbar navbar-expand-lg">
      <Container>
        <Navbar.Brand href="#home">NavBar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link  className='me-3' to='/'>Home</Link>
          <Link className='me-3' to='/products'> Products </Link>
          <Link className='me-3' to="/restaurant"> Restaurant </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default  CustomNavbar;
