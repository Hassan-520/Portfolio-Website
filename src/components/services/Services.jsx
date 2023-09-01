import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5 className='service__offer'>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Designs</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designed with user experience in mind, this sleek mobile app interface allows for seamless navigation and intuitive functionality</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using a minimalistic design approach, this website showcases the brand's unique offerings and encourages user engagement</p>
            </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>By conducting user research and incorporating feedback, this user-friendly interface was created to enhance the overall user experience</p>
            </li>
          
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
              <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Built with the latest technologies and best practices, this responsive website is optimized for speed and accessibility across all devices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>By implementing custom CMS solutions, this web application allows for seamless content management and easy scalability</p>
            </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Through a mobile-first approach and clean code, this website provides an exceptional user experience while also improving search engine rankings</p>
            </li>
           
          </ul>
        </article>
         <article className='service'>
          <div className='service__head'>
              <h3>Problem Solving</h3>
            </div>
            <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>With a passion for tackling complex problems, I have developed a proven track record of delivering innovative solutions to a variety of challenges</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Whether it's debugging code, identifying system bottlenecks, or streamlining processes, I have a natural ability to break down problems and develop effective solutions</p>
            </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>As a creative problem solver, I thrive in fast-paced environments and enjoy tackling new challenges with a fresh perspective</p>
            </li>
          
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services