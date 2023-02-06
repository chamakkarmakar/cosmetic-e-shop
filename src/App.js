import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Header/Banner';
import NavBar from './Components/Header/NavBar';
import Products from './Components/Products/Products';

function App() {
  return (
    <div >
      <NavBar />
      <Banner />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
