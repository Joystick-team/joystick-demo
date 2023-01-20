import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Slider from "react-slick";
// import './sliders.scss'
export default class Slicker extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: this.props.rowNum,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <Container>
      <div className="sliders">
        <div className="div sliders-title" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h5>{this.props.header}</h5>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.props.children} 
        </Slider>
      </div>
      </Container>
    );
  }
}