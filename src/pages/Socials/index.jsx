import React from 'react'
import AnnouncementCarousel from '../../component/AnnouncementCard'
// import Layout2 from '../../Layout2'
import Layout from '../../component/Widral'
import RecentGames from '../../component/RecentGames'
import './socials.scss'
import PreviousNextMethods from '../../component/PreviousNextMethods'
export default function Socials() {
  return (
    <div>
      <Layout>
        <AnnouncementCarousel />
        <PreviousNextMethods>
          <RecentGames />
        </PreviousNextMethods>
      </Layout>

    </div>
  )
}
