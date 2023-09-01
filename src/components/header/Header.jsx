import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Me.jpeg'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hi I'm</h5>
        <h1>Muhammad Hassan Rana</h1>
        <h5 className='text-light'>Full Stack Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img className='mainimg' src={Me}alt=''/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header