import React from 'react'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import Layout from '../../component/Layout'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import RecentGames from '../../component/RecentGames'

export default function Store() {
  return (
    <div className='store'>
      <Layout> 
      <div className="main"> 
            <AnnouncementCarousel />
              <PreviousNextMethods>
                <RecentGames />
              </PreviousNextMethods>
            </div>
            <div className="side-adverts" style={{display:'flex'}}>
              {/* The left advert/chat/friends should be written here */}
              
            </div>
      </Layout> 
    </div>
  )
}
