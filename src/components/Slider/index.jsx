import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.scss";
function SliderHeader() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,    
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div className="slider_container">
        <Slider {...settings}>
          <div className="sliderImg">
            <div className="text">
              <p className="animate__bounceInDown" >Man New-Season</p>
              
              <h4>New Arrivals</h4>
              <button>Shop Now</button>
            </div>
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp"
              alt=""
            />
          </div>
          <div className="sliderImg">
            <div className="text">
              <p>Man New-Season</p>
              <h4>New Arrivals</h4>
              <div className="btn">
                <button>Shop Now</button>
              </div>
            </div>
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp"
              alt=""
            />
          </div>
          <div className="sliderImg">
            <div className="text">
              <p>Man New-Season</p>
              <h4>New Arrivals</h4>
              <button>Shop Now</button>
            </div>
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SliderHeader;
