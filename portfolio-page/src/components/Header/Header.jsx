import React from 'react'
import Cta from './Cta'
import './header.css'
import Mustacheme from '../../assets/Mustacheme.jpg'

const Header = () => {
  return (
    <header>
      <div className="conatiner header__container">
        <h5>
          Hey! I'm
          <h1> Nikita Savelev.</h1>
          <h5>Front end Developer</h5>
          <Cta/>

          <div className="me">
            <img src={Mustacheme} alt="me" />
          </div>
          <a href="#contact" className="scroll__down">Scroll Down</a>
        </h5>
      </div>
    </header>
  )
} 
 
export default Header