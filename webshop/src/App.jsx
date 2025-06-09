import React, { useState, createContext } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx';
import ViewProduct from './ViewProduct.jsx';
import Basket from './Basket.jsx';
//import { Provider } from './Provider.jsx';

export const StoreContext = createContext()


function App() {

  const [store, setStore] = useState({});

  return (
    
    <StoreContext.Provider value={{store, setStore}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />      
      </Routes>
    </BrowserRouter>
    </StoreContext.Provider>
  )
}

export default App
