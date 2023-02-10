import React from 'react'
import Cta from './Cta'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="conatiner header__container">
        <h5>
          Hey! I'm
          <h1> Nikita Savelev.</h1>
          <h5> Front end Developer</h5>
          <Cta/>
        </h5>
      </div>
    </header>
  )
} 
 
export default Header