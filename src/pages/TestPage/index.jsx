import React from 'react'
import AnnouncementCarousel from '../../component/AnnouncementCard';
import SideNav from '../../component/NavMenus/SideNav'
import BottomNav from '../../component/NavMenus/BottomNav';
import PreviousNextMethods from '../../component/PreviousNextMethods';
import GamesData from '../../gamesdata';
import { Col } from 'react-bootstrap';
import MyCard from '../../component/MyCard';

export default function TestPage() {
  return (
    <div>
      <SideNav />
      <AnnouncementCarousel />
        <PreviousNextMethods header={'Test Slide'}>
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
        </PreviousNextMethods>
      <BottomNav />
    </div>
  )
}
