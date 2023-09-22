import React, { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Gallery from './components/gallery/Gallery'
import Aps from './components/aps/Aps'
import Footer from './components/footer/Footer'

const App = () => {
 

  return (
    <>
      <BrowserRouter>        
        <div className='relative z-0 bg-secondary'>
          <div className='bg-hero bg-fixed bg-cover bg-center min-h-screen opacity-75'>
            <Header/>
            <Hero/>
          </div>
          <About/>
          <Blog/>
          <Gallery/>
          <Aps/>
          <Footer/>  
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
