import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductDetail from './ProductDetail.jsx'

createRoot(document.querySelector('body')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


createRoot(document.querySelector('#product-detail-body')).render(
  <StrictMode>
    <ProductDetail />
  </StrictMode>,
)