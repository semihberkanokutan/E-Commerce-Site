import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import VideoSection from './components/VideoSection'
import ProductCategories from './components/ProductCategories'

function App() {
  

  return (
    <>
      <Header />
      <VideoSection />
      <ProductCategories />
    </>
  )
}

export default App
