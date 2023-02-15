import React from 'react'
import Cta from './Cta'
import './header.css'
import Mustacheme from '../../assets/Mustacheme.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div className='flex'>
    <header>
      <div className="conatiner header__container">
        <h5>
          Hey! I'm
          <h1> Nikita Savelev.</h1>
          <h5>Front end Developer</h5>
         

          <div className="me">
            <img src={Mustacheme} alt="me" />
          </div>
           <Cta/>
          <HeaderSocials/>
        </h5>
      </div>
    </header>
    </div>
  )
} 
 
export default Header