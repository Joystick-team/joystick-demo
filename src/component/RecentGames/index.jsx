import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyCard from '../../component/MyCard';
import clash from '../../assets/images/clash.png'
import axie from '../../assets/images/axie.png'
import war from '../../assets/images/war.png'
// import './recentgames.scss';

export default function RecentGames() {
  return (
    <div className="recent-games">
        <Container>
            <Row>
                <div>Recent Games</div>
                <Col>
                    <MyCard 
                        title='Axie Infinity'
                        text='Blockchain'
                        img={axie}
                        button="Play"
                    />
                </Col>

                <Col>
                    <MyCard 
                        title='War of Ants'
                        text='Blockchain'
                        img={war}
                        button="Play"
                    />
                </Col>

                <Col>
                    <MyCard 
                        title='Clash of Clans'
                        text='Adventure'
                        img={clash}
                        button="Play"
                    />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
