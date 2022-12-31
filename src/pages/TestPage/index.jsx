import React from 'react'
import { Col } from 'react-bootstrap'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import MyCard from '../../component/MyCard'
import BottomNav from '../../component/NavMenus/BottomNav'
import SideNav from '../../component/NavMenus/SideNav'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import LiberyGamesData from '../../Store/gamesdata'

export default function TestPage() {
  if (LiberyGamesData) {
    throw Error('WE are cooking!!!')
  }

  return (
    <div>
      <SideNav />
      <AnnouncementCarousel />
      <PreviousNextMethods rowNum={4} header={'Test Slide'}>
        {LiberyGamesData.map((game, idx) => (
          <Col>
            <MyCard
              key={idx}
              title={game.name}
              text={game.text}
              img={game.images}
              button='Play'
            />
          </Col>
        ))}
      </PreviousNextMethods>
      <BottomNav />
    </div>
  )
}
