import React from 'react'
import AnnouncementCarousel from '../../component/AnnouncementCard';
import SideNav from '../../component/NavMenus/SideNav'
import BottomNav from '../../component/NavMenus/BottomNav';
import PreviousNextMethods from '../../component/PreviousNextMethods';
import LiberyGamesData from '../../Store/gamesdata';
import { Col } from 'react-bootstrap';
import MyCard from '../../component/MyCard';

export default function TestPage() {
  return (
    <div>
      <SideNav />
      <AnnouncementCarousel />
        <PreviousNextMethods rowNum={4} header={'Test Slide'}>
            {LiberyGamesData.map((game, idx) => (
              <Col>
                  <MyCard 
                    key={idx}
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
