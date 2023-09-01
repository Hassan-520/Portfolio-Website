import React from 'react'
import './footer.css'
import {BsLinkedin,BsInstagram,BsFacebook} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
    <a href="#"  className='footer__logo'>Muhammad Hassan Rana</a>
    <ul className='permalinks'>
      
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact Me</a></li>
    </ul>
    <div className='footer__socials'>
    <a href="https://www.linkedin.com/in/muhammad-hassan-rana-65b420264?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBsu2k9AbScyATjpVio5S%2BQ%3D%3D" target='_blank'><BsLinkedin/></a>
      <a href="https://instagram.com/hassan.rana511?igshid=ZDdkNTZiNTM=" target='_blank'><BsInstagram/></a>
      <a href="https://www.facebook.com/profile.php?id=100009146536393&mibextid=ZbWKwL" target='_blank'><BsFacebook/></a>
    </div>
  </footer>
  )
}

export default footer