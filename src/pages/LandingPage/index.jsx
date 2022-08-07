import React from 'react'
import { useState } from 'react'
import { Col } from 'react-bootstrap'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import MyCard from '../../component/MyCard'
import AllGamesData from '../../Store/librarygamesdata'
import { OffSiteGames } from '../../Store/librarygamesdata'

import './landingpage.scss'

export default function LandingPage() {
    const gameOptionsList = ["Off-site", "On-site", 'Out-site', 'the-site']
    const offSiteGame = OffSiteGames.map((game, idx) => (
        <Col>
            <MyCard 
                key={game.key.toString() && idx}
                title={game.title}
                text={game.text}
                img={game.img}
                button={game.btn}
                icons={game.isOwn}
            />
        </Col>
    ))
    const games2 = AllGamesData.map((game, idx) => (
        <Col>
            <MyCard 
                key={game.key.toString() && idx}
                title={game.title}
                text={game.text}
                img={game.img}
                button="Play"
            />
        </Col>
    ))

    const [currentValue, setCurrentValue] = useState(offSiteGame)

    let handleChange = (gameOption) => {
        if(gameOption === 'On-site') { 
            setCurrentValue(games2)
        } else if(gameOption === 'Off-site') {
            setCurrentValue(offSiteGame)
        }else{
            setCurrentValue('gameOption out site') 
        }
    }

  return (
    <div className='landing-page-container'>
        <div className="landing-page-holder">
            <div className="landing-page-anouncement">
                <AnnouncementCarousel />
            </div>
            <div className="site-games-container">

            <select name="" id="" 
                onChange={(event) => handleChange(event.target.value)}
                // value={currentValue}
            >
            {gameOptionsList.map((option) => (
              <option value={option}> {option} </option>
            ))}
            </select>

            <div className="site-games">
                {currentValue}
            </div>
            
            </div>
        </div>

    </div>
  )
}
