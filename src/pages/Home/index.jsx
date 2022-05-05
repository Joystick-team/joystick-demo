import { Col } from 'react-bootstrap'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import Layout from '../../component/Layout'
import MyCard from '../../component/MyCard'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import SidePost from '../../component/SidePost'
import LiberyGamesData from '../../gamesdata'
import './home.scss'

export default function Library() {
  return (
    <div className="home-container">
      <Layout> 
        <div className="main">
          <AnnouncementCarousel />
          <PreviousNextMethods rowNum={4} header={'Recent Games'}>
            {LiberyGamesData.map((game, idx) => (
              <Col>
                  <MyCard 
                    key={idx}
                    title={game.title}
                    text={game.text}
                    img={game.img}
                    button="Play"
                  />
              </Col>
            ))}
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









