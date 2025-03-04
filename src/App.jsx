import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import VideoSection from './components/VideoSection'
import ProductCategories from './components/ProductCategories'
import TopRatedProducts from './components/TopRatedProducts'
import OnSaleProducts from './components/OnSaleProducts'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header />
      <VideoSection />
      <ProductCategories />
      <TopRatedProducts />
      <OnSaleProducts />
      <Footer />
    </>
  )
}

export default App
