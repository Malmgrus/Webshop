import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx';
import ViewProduct from './ViewProduct.jsx';
import Basket from './Basket.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />      
      </Routes>

    </BrowserRouter>
  )
}

export default App
