import React, { useMemo, useState } from 'react'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import SelectDropDown from '../../component/SelectDropDown'
import useFetch from '../../hooks/useFetch'
import  { default as api } from '../../config/config.json'
import { default as OnsiteGames} from '../../Store/librarygamesdata'

import PaginationComponet from '../../component/PaginationComponet'
import './landingpage.scss'

export default function LandingPage(props) {
    const gameOptionsList = ["Off-site", "On-site"]
    const [paginate, setPaginate] = useState(false)
    
    const url = `${api?.url}/game?game_type=off_site&sort=asc-name&page=1&limit=15`

    //eslint-disable-next-line
    const [loading, data, error] = useFetch(url)
    const offSiteGame = useMemo(() => { return data?.data}, [data])

    const online = navigator.onLine
    // function openModal(data) {
    //     setIsOpen(true);
    //     setDetails(data)
    //   }

    //     const closeModal = () => {
    //         setIsOpen(false)
    //     }

    //     const lastPageIndex = currentPage * postPerPage;
    //     const firstPageIndex = lastPageIndex - postPerPage;
    //     const currentPost = data?.data?.data?.slice(firstPageIndex, lastPageIndex);

    //     // eslint-disable-next-line
    //     const [totalPages, setTotalPages] = useState( paginate ? OnsiteGames.length : OffSiteGames.length )
    //     const currentPostOnsite = OnsiteGames.slice(firstPageIndex, lastPageIndex);

    //     const offSiteGame = data && currentPost.map((game, idx) => (
    //         <Col>
    //             <MyCard 
    //                 key={game.id ?? game.key}
    //                 title={game.name ?? game.name}
    //                 text={game.text}
    //                 img={game.images.thumb ?? game.images}
    //                 // button={game.btn}
    //                 button={"More Info"}
    //                 openModal={openModal.bind(this, game)}
    //             />
    //         </Col>
    //     ))

    // const games2 = currentPostOnsite.map((game, idx) => (
    //     <Col>
    //         <MyCard 
    //             key={game.key.toString() && idx}
    //             title={game.name}
    //             text={game.text}
    //             img={game.images}
    //             button={"Play"}
    //             openModal={openModal.bind(this, game)}
    //         />
    //     </Col>
    // ))

// eslint-disable-next-line
    // const [currentValue, setCurrentValue] = useState(offSiteGame)

    let handleChange = (gameOption) => {
        if(gameOption === 'On-site') { 
            // setCurrentValue(games2)
            setPaginate(true)
        } else if(gameOption === 'Off-site') {
            // setCurrentValue(offSiteGame)
            setPaginate(false)
        }else{
            // setCurrentValue(`Game Option ${gameOption}`) 
            return `Game Option ${gameOption}`
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
                    <SelectDropDown 
                        // onChange={handleChange} 
                        getValue={handleChange}
                        options={gameOptionsList} 
                        placeholder={'Off-site'}
                    />
                </div>
                {/* <ModalEffect show={isOpen} closeModal={closeModal}>
                    <div className="site-games">
                        {details && <DetailsCard {...(details ? {...details} : {})} />}
                    </div>
                </ModalEffect> */}
                {/* <div className="page_sites">
                    <div className="site-games">
                        {currentValue}
                    </div>
                </div>  */}
                <div className="page_sites">
                    {!online ? 'Check your internet connection' :
                        <PaginationComponet btn={paginate ? 'OnsiteGames' : 'offSiteGame'} api={paginate ? OnsiteGames : offSiteGame?.data}/>
                    }
                </div>
            </div>
        </div>

    </div>
  )
}
