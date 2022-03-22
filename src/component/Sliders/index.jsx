import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
      <BsArrowRightCircle />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
      <BsArrowLeftCircle />
    </div>
  );
}

export default class Sliders extends Component {
  render() {
    const settings = {
      // dots: true,
      // infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      
      <div className="sliders">
        <h2>Recent Games</h2>
        <Slider {...settings}>
            

        </Slider>
      </div>
    );
  }
}