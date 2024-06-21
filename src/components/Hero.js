"use client";

import React from 'react'
import Slider from "react-slick" 
import Slide from './Slide'

const Hero = () => {

  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const slideData = [
    {
      id: 0,
      img: "/banner-1.png",
      title: "Trending Item",
      mainTitle: "COUPLE",
      price: "Rp. 450.000",
    },
    {
      id: 1,
      img: "/banner-2.png",
      title: "Trending Item 2",
      mainTitle: "SINGLE FEMALE",
      price: "Rp. 499.000",
    },
    {
      id: 2,
      img: "/banner-3.png",
      title: "Trending Item 3",
      mainTitle: "SINGLE MALE",
      price: "Rp. 450.000",
    }
  ]

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => {
            return ( 
            <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
            /> 
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Hero