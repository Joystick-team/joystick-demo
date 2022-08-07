import React from 'react'
import { useState } from 'react'
import { Col } from 'react-bootstrap'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import MyCard from '../../component/MyCard'
import LiberyGamesData from '../../Store/gamesdata'
// import AllGamesData from '../Store/librarygamesdata'

import './landingpage.scss'

export default function LandingPage() {
    const [gameSite, setGameSite] = useState(["OFF-Site", "On-Site", 'Out-site']) 

    const games1 = LiberyGamesData.map((game, idx) => (
        <Col>
            <MyCard 
                key={game.key.toString()}
                title={game.title}
                text={game.text}
                img={game.img}
                button="Play"
            />
        </Col>
    ))

// console.log('games1', AllGamesData);

//     const games2 = AllGamesData.map((game, idx) => (
//         <Col>
//             <MyCard 
//                 key={game.key.toString()}
//                 title={game.title}
//                 text={game.text}
//                 img={game.img}
//                 button="Play"
//             />
//         </Col>
//     ))

    const [gameStore, setGameStore] = useState(games1)
    const [currentValue, setCurrentValue] = useState(games1)

    let handleChange = (event) => {
        setCurrentValue(event)
        setGameStore(currentValue.push(event))
        console.log('solution2 ====', currentValue);
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
                value={currentValue}
            >
            {/* {gameStore.map((option) => (
              <option value={option.title}> {option.key} </option>
            ))} */}
                <option value='Off-site' >Off-site</option>
                <option value="Out-site">Out-site</option>
                <option value="On-site">On-site</option>
            </select>

            <div className="site-games">
                {currentValue}
            </div>
            
            </div>
        </div>

    </div>
  )
}
