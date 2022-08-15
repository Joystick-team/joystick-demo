import React from 'react'
import { useState } from 'react'
import { Col } from 'react-bootstrap'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import DetailsCard from '../../component/DetailsCard'
import ModalEffect from '../../component/Modal'
import MyCard from '../../component/MyCard'
import AllGamesData from '../../Store/librarygamesdata'
import { OffSiteGames } from '../../Store/librarygamesdata'

import './landingpage.scss'

export default function LandingPage() {
    const gameOptionsList = ["Off-site", "On-site", 'Out-site', 'the-site']
    const [details, setDetails] = useState(null);
    const [isOpen, setIsOpen] = useState(false)

    function openModal(data) {
        setIsOpen(true);
        setDetails(data)
      }
      
        const closeModal = () => {
            setIsOpen(false)
        }

    const offSiteGame = OffSiteGames.map((game, idx) => (
        <Col>
            <MyCard 
                key={game.key.toString() && idx}
                title={game.title}
                text={game.text}
                img={game.img}
                button={game.btn}
                openModal={openModal.bind(this, game)}
            />
        </Col>
    ))

    const games2 = AllGamesData.map((game, idx) => (
        <Col>
            <MyCard 
                key={game.key}
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
            setCurrentValue(`Game Option ${gameOption}`) 
        }
    }

  return (
    <div className='landing-page-container'>
        <div className="landing-page-holder">
            <div className="landing-page-anouncement">
                <AnnouncementCarousel />
            </div>
            <div className="site-games-container">
                <div className="select-container">
                    <select name="" id="" 
                        onChange={(event) => handleChange(event.target.value)}
                        // value={currentValue}
                        >
                        {gameOptionsList.map((option) => (
                        <option value={option}> {option} </option>
                        ))}
                    </select>
                </div>
                <ModalEffect show={isOpen} closeModal={closeModal}
                >
            <div className="site-games">
               
               {details && <DetailsCard {...(details ? {...details} : {})} />}
                </div>
            </ModalEffect>
            <div className="site-games">
                {currentValue}
            </div>
            </div>
        </div>

    </div>
  )
}
