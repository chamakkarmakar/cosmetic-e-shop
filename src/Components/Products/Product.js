import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Product = ({ product,handleCart }) => {

  return (
    <Card className='shadow-lg col-3' style={{ width: '18rem' }}>
      <Card.Img variant="top"
        style={{ height: "13rem" }}
        src={product.api_featured_image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <p>Price : <span className='fw-bold'>${product.price}</span></p>
         <p>{product.description.slice(0, 100)} <span className='text-primary'>...see more</span></p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between border-0'>
        <Button variant="primary" onClick={()=>handleCart(product)}>Add to cart</Button>
        {/* <Button variant="info">Buy Now</Button> */}
      </Card.Footer>
    </Card>
  )
}

export default Product
