import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const BrandCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Update current slide index
    },
    customPaging: (i) => (
      <div
        className="custom-dot"
        style={{
          opacity: i === currentSlide ? 1 : 0.5, // Change opacity based on whether it's the current slide
        }}
      ></div>
    ),
  };

  const brandimages = [
    {
      src: "../SVG/Logo1.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 3",
    },
    {
      src: "../SVG/Logo2.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 6",
    },
    {
      src: "../SVG/Logo3.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 2",
    },
    {
      src: "../SVG/Logo4.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 0",
    },
    {
      src: "../SVG/Logo5.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 5",
    },
    {
      src: "../SVG/Logo6.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 7",
    },
    {
      src: "../SVG/Logo7.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
  ];

  return (
    <div className="brand-carousel">
      {/* <h1>Our Partners</h1> */}
      <div className="carouselHolder">
      <Slider {...sliderSettings} className="slider">
        {brandimages.map((image, index) => (
          <div key={index} className="slide">
            <Image {...image} className="slide-image" />
          </div>
        ))}
      </Slider>
      </div>
      <div className="outerHrHolder">
        <div className="innerHr1"></div>
        <p>Our Partners</p>
        <div className="innerHr2"></div>
      </div>
    </div>
  );
};

export default BrandCarousel;
