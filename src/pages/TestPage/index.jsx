import React from 'react'
import Example from '../../component/Example'
import './test.scss'
import PreviousNextMethods from '../../component/PreviousNextMethods';
import RecentGames from '../../component/RecentGames';
import AnnouncementCarousel from '../../component/AnnouncementCard';

export default function TestPage() {
  return (
    <div className='test'>
      <div className="nav-bar">
        {/* <div className="fixed-top"> */}
        <Example />
        {/* </div> */}
        
      </div>
      <div className="main"> 
      <AnnouncementCarousel />
        <PreviousNextMethods>
          <RecentGames />
        </PreviousNextMethods>
      </div>
      <div className="side-advert">
      Recent Games Recent Games Recent Games Recent Games Recent Games Recent Games Recent Games Recent Games
      </div>
    </div>
  )
}
