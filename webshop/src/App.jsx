import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx';
import ViewProduct from './ViewProduct.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ViewProduct />} />
      
      </Routes>

    </BrowserRouter>
  )
}

export default App
