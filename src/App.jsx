import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Certificate from './components/Certificates/Certificate'
import Portfolio from './components/portfolios/Portfolio'
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Certificate/>
    <Experience/>
    <Portfolio/>
    <Services/>
    <Contact/>
    <Footer/>

    </>
  )
}
export default App;