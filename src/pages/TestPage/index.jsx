import React from 'react'
import Example from '../../component/Example'
import './test.scss'
import PreviousNextMethods from '../../component/PreviousNextMethods';
import RecentGames from '../../component/RecentGames';
import AnnouncementCarousel from '../../component/AnnouncementCard';
import TopNav from '../../component/NavMenus/TopNav'
import SidePost from '../../component/SidePost';


export default function TestPage() {
  return (
    <div className='test-container'>
      <div className="test">
        <div className="side-nav-bar">
          <div className="fixed-top-sidemenu">
          <Example />
          </div>
          
        </div>

        <div className="main-container">
        <TopNav />
          <div className="main-div">
            <div className="main"> 
            <AnnouncementCarousel />
              <PreviousNextMethods>
                <RecentGames />
              </PreviousNextMethods>
            </div>
            <div className="side-adverts" style={{display:'flex'}}>
              <SidePost />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
