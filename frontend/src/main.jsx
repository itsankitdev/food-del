import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
    
  </BrowserRouter>

)

// mongodb+srv://greatstack:983457856@cluster0.5dn2mum.mongodb.net/?appName=Cluster0
