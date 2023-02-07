import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Header/Banner';
import NavBar from './Components/Header/NavBar';
import Products from './Components/Products/Products';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart]=useState([]);

  const handleCart=item=>{
    // console.log(id);
    const newCart=[...cart, item]
    setCart(newCart);
  }
  return (
    <div >
      <NavBar 
      cart={cart}
      setCart={setCart}
      />
      <Banner />
      <Products 
      products={products}
      setProducts={setProducts}
      handleCart={handleCart}
      cart={cart}
      />
      <About />
      <Footer />
    </div>
  );
}

export default App;
