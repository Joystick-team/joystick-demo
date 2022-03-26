import React from 'react'
import AnnouncementCarousel from '../../component/AnnouncementCard';
// import ErrorAlert from '../../component/ErrorAlert';
// import LoadingButton from '../../component/LoadingButton';
// import TopNav from '../../component/NavMenus/TopNav';
// import RecentGames from '../../component/RecentGames';
import SideNav from '../../component/NavMenus/SideNav'
import BottomNav from '../../component/NavMenus/BottomNav';
import PreviousNextMethods from '../../component/PreviousNextMethods';
// import WelcomePage from '../Welcome';

export default function HomePage() {
  return (
    <div>
      <SideNav />
      <AnnouncementCarousel />
      {/* <WelcomePage /> */}
      {/* <TopNav /> */}
      {/* <ErrorAlert /> */}
      {/* <LoadingButton color="danger" title='Connect'/>
      <LoadingButton color="success" title='Go Live'/> */}
        <PreviousNextMethods 
          // items={
          //   <RecentGames />
          // }
        />
      <BottomNav />
    </div>
  )
}









