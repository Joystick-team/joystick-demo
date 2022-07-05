import { Col } from 'react-bootstrap'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import MyCard from '../../component/MyCard'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import SidePost from '../../component/SidePost'
import LiberyGamesData from '../../gamesdata'
import './home.scss'

export default function Home() {
  return (
    <div className="home-container">
        <div className="main">
          <AnnouncementCarousel />
          {/* <PreviousNextMethods rowNum={4} header=> */}
          <PreviousNextMethods rowNum={4} header={'Recent Games'}>
            {LiberyGamesData.map((game, idx) => (
              <Col>
                  <MyCard 
                    key={game.key}
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
    </div>
    
  )
}









