import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


const NavBar = ({ cart }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Beautify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link className='text-uppercase' href="/home">home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='text-uppercase' eventKey="about">about</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='text-uppercase' eventKey="product">product</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='text-uppercase' eventKey="contact">contact us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='text-uppercase' eventKey="login">login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <button type="button" className="btn position-relative">
        <ShoppingCartIcon style={{ width: "30px" }} className='text-dark ms-5 mt-0'></ShoppingCartIcon>
        <span className={cart.length === 0 ? 'visually-hidden' : "position-absolute text-danger top-0 start-80 translate-middle badge rounded-pill"}>
          {cart.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </Navbar>
  )
}

export default NavBar
