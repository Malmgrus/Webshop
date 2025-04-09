import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navigation from './header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navigation />
  </StrictMode>,
)
