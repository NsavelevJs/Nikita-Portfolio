import React from 'react'
import Cta from './Cta'
import './header.css'
import Mustacheme from '../../assets/Mustacheme.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <>
    <div className='nes-balloon header__container'>
    <header>
      
      <div className="">
        <h5>
          Hey! I'm
          <h1> Nikita Savelev.</h1>
          <h5>Fullstack Developer</h5>
         </h5>

          <div className="me" >
            <img className='nes-container' src={Mustacheme} alt="me" />
          </div>
          
           <Cta/>
        <HeaderSocials/>
      </div>
    </header>
    </div>
          
          </>
  )
} 
 
export default Header