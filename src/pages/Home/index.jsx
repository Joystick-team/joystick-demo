import AnnouncementCarousel from '../../component/AnnouncementCard'
import Layout from '../../component/Layout'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import RecentGames from '../../component/RecentGames'
import SidePost from '../../component/SidePost'

export default function Library() {
  return (
    <div className="home-container">
      <Layout> 
        <div className="main">
          <AnnouncementCarousel />
          <PreviousNextMethods>
            <RecentGames />
          </PreviousNextMethods>
        </div>
        <div className="side-adverts" style={{display:'flex'}}>
            {/* The left advert/chat/friends should be written here */}
            <SidePost />
          </div>
      </Layout> 
    </div>
    
  )
}









