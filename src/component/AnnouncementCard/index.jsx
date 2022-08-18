import React from 'react'
import { Carousel, Button, Container } from 'react-bootstrap'
import './announcementcarousel.scss'

export default function AnnouncementCarousel() {
  return (
    <div className='announcement-carousel'>
       <Container>
            <Carousel>
                <Carousel.Item> 
                {/* .carousel-item  */}
                    <img
                    loading='eager'
                    className="d-block w-100"
                    src='https://sm.ign.com/t/ign_br/video/4/43-big-gam/43-big-games-coming-in-2017_fdx3.1280.jpg'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-caption-holder">
                            <h3>The Hunt is on in this Epic battle between good and evil</h3>
                            <p>Play to Earn Exclusive NFTs</p>
                        </div>
                    <Button href="#" size="lg">Play</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img
                    loading='eager'
                    className="d-block w-100"
                    src='https://c.files.bbci.co.uk/E909/production/_112375695_crucible976.jpg'
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-caption-holder">
                            <h3>43 Big Games Coming in 2017</h3>
                            <p>This year's games lineup.</p>
                        </div>
                    <Button href="#" size="lg">Play</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    loading='lazy'
                    className="d-block w-100"
                    src='https://www.pockettactics.com/wp-content/uploads/2021/10/new-mobile-games-DC.jpg'
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-caption-holder">
                            <h3>Pocket Tactics</h3>
                            <p>Play to Earn Exclusive NFTs</p>
                        </div>
                    <Button href="#" size="lg">Play</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    loading='lazy'
                    className="d-block w-100"
                    src='https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/03/Best-PS4-Games-2020-920x613.jpg'
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-caption-holder">
                            <h3>Best PS4 Games 2022</h3>
                            <p>Play to Earn Exclusive NFTs</p>
                        </div>
                    <Button href="#" size="lg">Play</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
       </Container>
    </div>
  )
}
