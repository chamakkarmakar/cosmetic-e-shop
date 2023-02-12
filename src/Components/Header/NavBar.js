import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const NavBar = ({ cart,setModalShow }) => {
  const handleHover = e =>{
    e.target.style.background = 'transparent';
    e.target.style.border = 'none';
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand className="fw-bold" href="#home">Beautify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link className='text-uppercase fw-bold' href="/home">home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='text-uppercase fw-bold' href="/about" eventKey="about">about</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='text-uppercase fw-bold' eventKey="product">products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='text-uppercase fw-bold' href="/contact" eventKey="contact">contact us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant="light" 
      onMouseOver={handleHover}
      onClick={() => setModalShow(true)} 
      className='position-relative'>
        <ShoppingCartIcon style={{ width: "30px" }} className='ms-5 mt-0'></ShoppingCartIcon>
        <span className={cart.length === 0 ? 'visually-hidden' : "position-absolute text-danger top-0 start-80 translate-middle badge rounded-pill"}>
            {cart.length}
          </span>
      </Button>  
    </Navbar>
  )
}

export default NavBar
