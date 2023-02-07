import React from 'react'
import "nes.css/css/nes.min.css";
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/XP/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <Nav />
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App