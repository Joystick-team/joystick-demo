import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import MyCard from '../../component/MyCard';
import AllGamesData from '../../Store/librarygamesdata';
import './recentgames.scss';

export default function RecentGames() {
  return (
    <div className="recent-games">
        <Container>
           <Row xs={3} md={4} className="g-4 recent-games-items">
                {AllGamesData.map((game, idx) => (
                    <Col>
                        <MyCard 
                            key={idx}
                            title={game.name}
                            text={game.text}
                            img={game.images}
                            button="Play"
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}
