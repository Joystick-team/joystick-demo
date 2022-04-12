import React from 'react'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import Layout from '../../Layout'
import RecentGames from '../../component/RecentGames'
import './socials.scss'
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
