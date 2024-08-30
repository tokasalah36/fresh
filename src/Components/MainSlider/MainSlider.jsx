import React from "react";
import mainSlider from "../../assets/images/orqiq7m8.png";
import mainSlider1 from "../../assets/images/RANKING-UPDATE_BBQ-CHIPS_HEADER.jpg";
import Slider from "react-slick";
import slider1 from "../../assets/images/slider-image-2.jpeg";
import slider2 from "../../assets/images/slider-image-3.jpeg";
import slider3 from "../../assets/images/page-SALE_1296x_1_1296x.jpg";


export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="md:flex w-full flex-wrap">
        <div className="md:w-3/4">
          <Slider {...settings}>
            <img src={mainSlider} alt="food" className="w-full h-[400px]" />
            <img src={mainSlider1} alt="food" className="w-full h-[400px]" />
            <img src={slider2} alt="food" className="w-full h-[400px]" />
            <img src={slider3} alt="food" className="w-full h-[400px]" />
          </Slider>
        </div>
        <div className="md:w-1/4">
          <img src={slider1} alt="food" className="w-full h-[200px] px-2 py-2" />
          <img src={slider2} alt="food" className="w-full h-[200px] px-2 py-2" />
        </div>
      </div>
    </>
  );
}