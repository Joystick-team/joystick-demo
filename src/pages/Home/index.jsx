import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { fetchGameAction } from '../../Actions/Games.Action'
import { Col } from 'react-bootstrap'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import MyCard from '../../component/MyCard'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import SidePost from '../../component/SidePost'
import LiberyGamesData from '../../Store/gamesdata'
import { profileAction } from '../../Actions/Authentication/Profile.Action'
import './home.scss'

export default function Home() {
  const [sliderCount, setSliderCount] = useState(Number(4))
  // const {loading,success,error,games} = useSelector(state=>state.fetchAllGames)
  const { userToken } = useSelector(state => state.signin)
  const navigate = useNavigate()
  // console.log(games)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGameAction(1))
    userToken?.access_token && dispatch(profileAction())
    !userToken?.access_token&& navigate("/")
    if(window.innerWidth < 431){
      setSliderCount(Number(3))
    }
    if(window.innerWidth < 1025){
      setSliderCount(Number(3))
    }
    dispatch(fetchGameAction())
  }, [dispatch,userToken?.access_token])
  
  return (
    <div className="home-container">
        <div className="main">
          <AnnouncementCarousel />
          <PreviousNextMethods rowNum={sliderCount} header={'Recent Games'}>
            {LiberyGamesData.map((game, idx) => (
              <Col key={game.key}>
                  <MyCard 
                    key={game.key.toString()}
                    title={game.name}
                    text={game.text}
                    img={game.images}
                    button="Play"
                  />
              </Col>
            ))}
          </PreviousNextMethods>
        </div>
        <div className="side-adverts">
            {/* The left advert/chat/friends should be written here */}
           {userToken?.access_token&& <SidePost />}
            <div className="empty-div" ></div>
          </div>
    </div>
    
  )
}









