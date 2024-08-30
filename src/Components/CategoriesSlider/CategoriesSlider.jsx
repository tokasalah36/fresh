


import Slider from "react-slick";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function CategoriesSlider() {

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 850,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1100,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const [category, setCategory] = useState([]);

  async function getCategory() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories`
    );
    console.log(data.data[0].image);
    setCategory(data.data);
  }

  useEffect(() => {
    getCategory();
  }, []);




  return (
    <>
      <h3 className="text-main font-bold text-3xl ps-2 py-5 font-bold "> Shop Popular Categories </h3>
       
      <Slider {...settings}>
        {category ? (
          category.map((product) => (
            <div key={product._id} className="w-[300px] h-[200px]  p-2  text-main">
              <img src={product.image} alt="" className="border border-4 rounded-4 w-full h-full  " />
              <h3 className="py-4 font-bold">{product.name}</h3>
            </div>
          ))
        ) : (
          <div className="flex justify-center py-16">
            <LoadingScreen />
          </div>
        )}
      </Slider>
    </>
  );
}
