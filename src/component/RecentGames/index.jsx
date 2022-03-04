import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import MyCard from '../../component/MyCard';
import GamesData from '../../gamesdata';
// import './recentgames.scss';

export default function RecentGames() {
  return (
    <div className="recent-games">
        <Container>
            <div className='recent-games-headings'>Recent Games</div>
            <Row xs={1} md={4} className="g-4">
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
        </Container>
    </div>
  )
}
