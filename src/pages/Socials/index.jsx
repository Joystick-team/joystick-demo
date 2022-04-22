import React from 'react'
import AnnouncementCarousel from '../../component/AnnouncementCard'
// import Layout2 from '../../Layout2'
import Layout3 from '../../component/Widral'
import RecentGames from '../../component/RecentGames'
import './socials.scss'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import SidePost from '../../component/SidePost'

export default function Socials() {
  return (
    <div className='socials'>
      <Layout3> 
        <AnnouncementCarousel />
        <PreviousNextMethods>
          <RecentGames />
        </PreviousNextMethods>
        <div className="side-adverts" style={{display:'flex'}}>
              <SidePost />
            </div>
      </Layout3> 

    </div>
  )
}
