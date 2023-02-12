import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Cart = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Shopping Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='text-center'>Order Summary</h4>
        <p>Total <Price></Price>: </p>
        <p>Shipping Charge: </p>
        <p>Grand Total: </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Done</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Cart
