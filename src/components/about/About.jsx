import React from 'react'
import './about.css'
import AboutImg from '../../assets/aboutimg.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 Months</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3</small>
            </article>
          </div>
          <p>
          I am a skilled web developer with a passion for creating innovative and user-friendly web applications. With a strong background in programming, I thrive in a fast-paced environment and am committed to staying up-to-date with the latest technologies and industry trends. My expertise in problem-solving and collaboration allows me to understand my clients' requirements and deliver solutions that exceed their expectations. I approach every project with professionalism, attention to detail, and a commitment to excellence, ensuring robust, scalable, and efficient solutions for my clients.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about