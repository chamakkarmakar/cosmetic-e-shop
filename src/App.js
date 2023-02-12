import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> }
  ]);
  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
