
import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'

import {sliderData} from '../../assets/fake-data/slider';
import './Slider.scss'

const HeroSlider = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };

  return (
    <section>
        <Container>
            <Slider {...settings}>
                {
                    sliderData.map(item=>(
                        <div key={item.id}>
                            <div className="slider__wrapper">
                                <div className="slider__content">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <button className='btn'>Explore Food</button>
                                </div>

                                <div className="slider__img">
                                    <img src={item.imgUrl} alt=""/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </Container>
    </section>
  )
}

export default HeroSlider