import React, { useState } from 'react'
import NavBar from '../Header/NavBar'
import Banner from '../Header/Banner'
import Products from '../Products/Products'
import About from '../About/About'
import Footer from '../Footer/Footer'
import { AddToDb } from '../../Utilities/fakeDB'
import Cart from '../ShoppingCart/Cart'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalShow, setModalShow] = useState(false);


  const handleCart = item => {
    console.log(item);
    const newCart = [...cart, item]
    setCart(newCart);
    AddToDb(item.id);
  }
  return (
    <div>
      <NavBar
        cart={cart}
        setCart={setCart}
        setModalShow={setModalShow}
      />
      <Banner />
      <Products
        products={products}
        setProducts={setProducts}
        handleCart={handleCart}
        cart={cart}
      />
      <About />
      <Cart
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Footer />
    </div>
  )
}

export default Home
