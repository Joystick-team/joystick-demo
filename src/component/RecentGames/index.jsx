import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import MyCard from '../../component/MyCard';
import GamesData from '../../gamesdata';
import Sliders from '../Sliders';
import './recentgames.scss';

export default function RecentGames() {
  return (
    <div className="recent-games">
        <Container>
            <div className='recent-games-headings'>
                <div className="recent-games-title">
                    Recent Games
                </div>
                <div className="recent-games-moves">
                    <span className="recent-games-arrowleft"><BsArrowLeftCircle /></span>
                    <span className="recent-games-arrowright"><BsArrowRightCircle /></span>
                </div>
            </div>
            <Row xs={1} md={4} className="g-4 recent-games-items">
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
            </Row>

            <Sliders />
        </Container>
    </div>
  )
}
