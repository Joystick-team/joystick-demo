import React from 'react'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import Layout from '../../component/Layout'
import RecentGames from '../../component/RecentGames'
// import WelcomePage from '../Welcome'
export default function Socials() {
  return (
    <div>
      <Layout>
        <AnnouncementCarousel />
        <RecentGames />
      </Layout>

    </div>
  )
}
