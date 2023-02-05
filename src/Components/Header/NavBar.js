import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  const [key, setKey] = useState('home');
  return (
    <div className='d-flex pt-2'>
      <div className='w-50'>
        <h1 className='fs-2 mx-5'>Beautify</h1>

      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        
      >
        <Tab eventKey="home" title="Home"></Tab>
        <Tab eventKey="about" title="About"></Tab>
        <Tab eventKey="product" title="Product"></Tab>
        <Tab eventKey="contact" title="Contact Us"></Tab>
        <Tab eventKey="login" title="Login"></Tab>
      </Tabs>

      <button type="button" class="btn position-relative">
        <ShoppingCartIcon style={{ width: "30px" }} className='text-dark ms-5 mt-0'></ShoppingCartIcon>
        <span class="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger">
          9+
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  )
}

export default NavBar
