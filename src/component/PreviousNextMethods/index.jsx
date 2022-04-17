import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Slider from "react-slick";
import GamesData from '../../gamesdata';
import MyCard from "../MyCard";

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
      <Container>
      <div className="sliders">
        <div className="div" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h5>Recent Games</h5>

            <div style={{display: 'flex'}}>
            <p className="p" onClick={this.previous} style={{marginRight: '1rem', cursor:'pointer', fontSize: '1.3rem'}}>
                <BsArrowLeftCircle />
            </p>
            <p className="p" onClick={this.next} style={{cursor:'pointer', fontSize: '1.3rem'}}>
                <BsArrowRightCircle />
            </p>
            </div>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
                {GamesData.map((game, idx) => (
                    <Col>
                        <MyCard 
                                key={game.idx}
                                title={game.title}
                                text={game.text}
                                img={game.img}
                                button="Play"
                            />
                    </Col>
                ))}
            {/* {this.props.children}  */}
        </Slider>
      </div>
      </Container>
    );
  }
}