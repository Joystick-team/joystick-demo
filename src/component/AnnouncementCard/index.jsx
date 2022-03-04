import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import announcementbadge from '../../assets/images/announcementbadge.png'
import './announcementcarousel.scss'

export default function AnnouncementCarousel() {
  return (
    <div className='announcement-carousel'>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={announcementbadge}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The Hunt is on in this Epic battle between good and evil</h3>
                    <p>Play to Earn Exclusive NFTs</p>
                   <Button href="#" size="lg">Play</Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
                <img
                className="d-block w-100"
                src={announcementbadge}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Play to Earn Exclusive NFTs</p>
                   <Button href="#" size="lg">Play</Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={announcementbadge}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Play to Earn Exclusive NFTs</p>
                   <Button href="#" size="lg">Play</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
