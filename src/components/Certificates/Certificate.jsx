import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Certificate.css';
import web from '../../assets/Web.png'
import ethical from '../../assets/EcCouncil.png'
import bombal from '../../assets/davidbombal.png'
import sap from '../../assets/Sap.png'
import isc from '../../assets/ISC.png'
const Certificate = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section id='certificate'>
    <h5 className='certificategettoknow'>Get To Know</h5>
    <h2>Training Certificates</h2>
    <div className='certificate-carousel'>
      <Slider {...settings}>
        <div>
          <img src={web} alt='Certificate 1' />
        </div>
        <div>
          <img src={ethical} alt='Certificate 2' />
        </div>
        <div>
          <img src={bombal} alt='Certificate 3' />
        </div>
        <div>
          <img src={sap} alt='Certificate 4' />
        </div>
        <div>
          <img src={isc} alt='Certificate 5' />
        </div>
      </Slider>
    </div>
    </section>
  
  )
}

export default Certificate