import React, { useMemo, useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {useParams}  from "react-router-dom"
import { fetchGameAction } from '../../Actions/Games.Action'
import { profileAction } from '../../Actions/Authentication/Profile.Action'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import  DropDown from '../../component/SelectDropDown/Dropdown'
import { default as OnsiteGames} from '../../Store/librarygamesdata'

import PaginationComponet from '../../component/PaginationComponet'
import NoInternet from '../ErrorPage/NoConnection/internet'
import './landingpage.scss'

export default function LandingPage(props) {
    const online = navigator.onLine
  const dispatch = useDispatch()
  const [gameSate,setGameState] = useState("off-site")
    const params = useParams()
    const id = params?.id||1
    const { games } = useSelector(state => state.fetchAllGames)
    const { userToken } = useSelector(state => state.signin)
  const { search_string } = useSelector(state => state.search)
    
    useEffect(() => {
        userToken&& dispatch(profileAction())
        dispatch(fetchGameAction(id,search_string))
    }, [dispatch, id, userToken, search_string]
    )
    
    const gameOptionsList = ["Off-site", "On-site"]
    const [paginate, setPaginate] = useState(false)
    const offSiteGame = useMemo(() => { return games?.data }, [games])
    const metaData = useMemo(() => { return games?.metadata }, [games])
    // console.log('data', offSiteGame);

  
  let handleChange = gameOption => {
    if (gameOption === 'On-site') {
      setGameState("On-site")
      // setCurrentValue(games2)
      setPaginate(true)
    } else if (gameOption === 'Off-site') {
      setGameState("Off-site")
      // setCurrentValue(offSiteGame)
      setPaginate(false)
    } else {
      // setCurrentValue(`Game Option ${gameOption}`)
      return `Game Option ${gameOption}`
    }
  }

  return (
    <div className='landing-page-container'>
      {!online ? (
        <NoInternet />
      ) : (
        <div className='landing-page-holder'>
          <div className='landing-page-anouncement'>
            <AnnouncementCarousel />
          </div>
          <div className='site-games-container'>
            <div className='select-container'>
              <DropDown
                onChange={handleChange}
                getValue={handleChange}
                options={gameOptionsList}
                placeholder={gameSate}
                option ={gameOptionsList}
              />
            </div>
                <div className="page_sites">
                      <PaginationComponet btn={paginate ? 'OnsiteGames' : 'offSiteGame'} api={paginate ? OnsiteGames : offSiteGame} metaData={metaData} page={ id} paginate={paginate} />
                </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
