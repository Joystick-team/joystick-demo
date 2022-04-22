import React from 'react'
import AnnouncementCarousel from '../../component/AnnouncementCard';
import SideNav from '../../component/NavMenus/SideNav'
import BottomNav from '../../component/NavMenus/BottomNav';
import PreviousNextMethods from '../../component/PreviousNextMethods';

export default function HomePage() {
  return (
    <div>
      <SideNav />
      <AnnouncementCarousel />
        <PreviousNextMethods />
      <BottomNav />
    </div>
  )
}
