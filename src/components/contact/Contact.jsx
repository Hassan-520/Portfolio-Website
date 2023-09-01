import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'
const Contact = () => {

  const  form = useRef();
  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_bl5ll9c','template_jqgu005', form.current,'Pkn2bU4odfuNGL76f' )
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5 className='contact_intouch'>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hassanrana23456789@gmail.com</h5>
            <a href="mailto:hassanrana23456789@gmail.com" target='_blank'>Send a Message</a>
          </article>
           <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Muhammad Hassan Rana</h5>
              <a href="https://m.me/profile.php?id=100009146536393" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+923051032265</h5>
              <a href="https://api.whatsapp.com/send?phone=03051032265" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Enter Your Full Name'  required/>
            <input type="email" name='email' placeholder='Enter Your Working Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact