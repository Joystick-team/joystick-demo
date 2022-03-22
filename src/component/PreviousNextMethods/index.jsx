import React, { Component } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
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
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="sliders">
        <div className="div" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2>Recent Games</h2>

            <div style={{display: 'flex'}}>
            <p className="p" onClick={this.previous} style={{marginRight: '.5rem'}}>
                <BsArrowLeftCircle />
            </p>
            <p className="p" onClick={this.next}>
                <BsArrowRightCircle />
            </p>
            </div>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
        <div className="">
              <img src="https://i.guim.co.uk/img/media/7c2ab1a3e60e445caf0a4d3de302591e830e8f7f/0_0_3800_2280/master/3800.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49331bc571155fab736c3ce179f31770" alt="" />
              <h5>GAME</h5>
              <p>Blockchain</p>
              <button>Play</button>
            </div>
            <div className="">
              <img src="https://cdn.vox-cdn.com/thumbor/Xm1C9TWbMK55zAnuR09oD6XMyRI=/0x0:1024x1024/1200x800/filters:focal(444x567:606x729)/cdn.vox-cdn.com/uploads/chorus_image/image/65813576/mobile_MarioKartTour_screen_01.0.png" alt="" />
              <h5>GAME</h5>
              <p>Blockchain</p>
              <button>Play</button>
            </div>
            <div className="">
              <img src="https://statics.igg.com/sites/igg/www/placard/2021/09/10/014208_613afe4010ff55703.png" alt="" /> 
              <h5>GAME</h5>
              <p>Adventure</p>
              <button>Play</button>
            </div>
            <div className="">
              <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-resident-evil-hub-image-block-01-en-17sep21?$native$" alt="" />
              <h5>GAME</h5>
              <p>Adventure</p>
              <button>Play</button>
            </div>
            <div className="">
              <img src="https://i.pcmag.com/imagery/roundup-products/02wRrI0dBj7xnn4zINKlAo8..v1616438713.jpg" alt="" />
              <h5>GAME</h5>
              <p>Adventure</p>
              <button>Play</button>
            </div>
        </Slider>
      </div>
    );
  }
}