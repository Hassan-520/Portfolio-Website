import React from 'react'
import './Portfolio.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/Project1/IMG1.jpg'
import img2 from '../../assets/Project1/IMG2.jpg'
import img3 from '../../assets/Project1/IMG3.jpg'
import img4 from '../../assets/Project1/IMG4.jpg'
import img5 from '../../assets/Project1/IMG5.jpg'
import img6 from '../../assets/Project 2/IMG1.png'
import img7 from '../../assets/Project 2/IMG2.png'
import img8 from '../../assets/Project 2/IMG3.png'
import img9 from '../../assets/Project 2/IMG4.png'
import img10 from '../../assets/Project 2/IMG5.png'
import img11 from '../../assets/Project 2/IMG6.png'
import img12 from '../../assets/Project 2/IMG7.png'
import img13 from '../../assets/Project 2/IMG8.png'
import img14 from '../../assets/Project 2/IMG9.png'
import img15 from '../../assets/Project 2/IMG10.png'
import img16 from '../../assets/Project 2/IMG11.png'
import img17 from '../../assets/Project 2/IMG12.png'
import img18 from '../../assets/Project 2/IMG13.png'
import img19 from '../../assets/Project 2/IMG14.png'
const Portfolio = () => {
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
    <section id='portfolio'>
      <h5 className='portfoliogettoknow'>My Project 1 & 2</h5>
      <h2>A travel and Tourism Website & Real Estate Website</h2>
      <div className='portfolio-carousel'>
      <Slider {...settings}>
        <div>
          <img src={img1} alt='IMG 1' />
        </div>
        <div>
          <img src={img2} alt='IMG 2' />
        </div>
        <div>
          <img src={img3} alt='IMG 3' />
        </div>
        <div>
          <img src={img4} alt='IMG 4' />
        </div>
        <div>
          <img src={img5} alt='IMG 5' />
        </div>
        <div>
          <img src={img6} alt='IMG 6' />
        </div>
        <div>
          <img src={img7} alt='IMG 7' />
        </div>
        <div>
          <img src={img8} alt='IMG 8' />
        </div>
        <div>
          <img src={img9} alt='IMG 9' />
        </div>
        <div>
          <img src={img10} alt='IMG 10' />
        </div>
        <div>
          <img src={img11} alt='IMG 11' />
        </div>
        <div>
          <img src={img12} alt='IMG 12' />
        </div>
        <div>
          <img src={img13} alt='IMG 13' />
        </div>
        <div>
          <img src={img14} alt='IMG 14' />
        </div>
        <div>
          <img src={img15} alt='IMG 15' />
        </div>
        <div>
          <img src={img16} alt='IMG 16' />
        </div>
        <div>
          <img src={img17} alt='IMG 17' />
        </div>
        <div>
          <img src={img18} alt='IMG 18' />
        </div>
        <div>
          <img src={img19} alt='IMG 19' />
        </div>
      </Slider>
    </div>
    </section>
  )
}

export default Portfolio