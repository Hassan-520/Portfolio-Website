import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='experience__skill'>Skills I have</h5>
      <h2 className='experience__my'>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>ANGULAR</h4>
            <small className='text-light'>Basics</small>
            </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>MONGODB</h4>
            <small className='text-light'>Intermediate</small>
            </div>
           
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>MYSQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>NODE JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>EXPRESS JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Intermediate</small>
            </div>  
            </article>
          </div>
        </div>
        <div className='experience__programing'>
        <h3>Programing Languages</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>C</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>PYTHON</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>JAVA</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        <div className='experience__security'>
        <h3>Majors</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>WEB PROGRAMING</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>APP DEVELOPMENT</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>ETHICAL HACKING</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>CLOUD SECURITY</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
            <h4>DIGITAL FORENSICS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience