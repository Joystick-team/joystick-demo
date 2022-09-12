import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import AnnouncementCarousel from '../../component/AnnouncementCard'
import DetailsCard from '../../component/DetailsCard'
import ModalEffect from '../../component/Modal'
import MyCard from '../../component/MyCard'
import SelectDropDown from '../../component/SelectDropDown'
import useFetch from '../../hooks/useFetch'
import  { default as api } from '../../config/config.json'
import { default as OnsiteGames} from '../../Store/librarygamesdata'
import { OffSiteGames } from '../../Store/librarygamesdata'

import './landingpage.scss'
import PaginationComponet from '../../component/PaginationComponet'
// eslint-disable-next-line
import PaginationRange from '../../component/PaginationComponet/paginationRange'

export default function LandingPage(props) {
    const gameOptionsList = ["Off-site", "On-site"]
    const [details, setDetails] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const [paginate, setPaginate] = useState(false)
    // eslint-disable-next-line
    const [defaultPage, setDefaultPage] = useState(1)
    // eslint-disable-next-line
    const [currentPage, setCurrentPost] = useState(1)
    // eslint-disable-next-line
    const [postPerPage, setPostPerPage] = useState(4)

       //eslint-disable-next-line
   const [loading, data, error] = useFetch(`${api?.url}/game?game_type=off_site&sort=asc-name&page=1&limit=15`)
//    console.log('loading', loading);
//    console.log('loading', error);
//    console.log('loading', data?.data?.data);


    function openModal(data) {
        setIsOpen(true);
        setDetails(data)
      }

        const closeModal = () => {
            setIsOpen(false)
        }

        const lastPageIndex = currentPage * postPerPage;
        const firstPageIndex = lastPageIndex - postPerPage;
        const currentPost = (OffSiteGames).slice(firstPageIndex, lastPageIndex);
        // eslint-disable-next-line
        const [totalPages, setTotalPages] = useState( paginate ? OnsiteGames.length : OffSiteGames.length )
        const currentPostOnsite = OnsiteGames.slice(firstPageIndex, lastPageIndex);

        const offSiteGame = currentPost.map((game, idx) => (
            <Col>
                <MyCard 
                    key={game.key && idx}
                    title={game.title}
                    text={game.text}
                    img={game.img}
                    button={game.btn}
                    openModal={openModal.bind(this, game)}
                />
            </Col>
        ))

    const games2 = currentPostOnsite.map((game, idx) => (
        <Col>
            <MyCard 
                key={game.key && idx}
                title={game.title}
                text={game.text}
                img={game.img}
                button="Play"
            />
        </Col>
    ))
// eslint-disable-next-line
    const [currentValue, setCurrentValue] = useState(offSiteGame)

    let handleChange = (gameOption) => {
        if(gameOption === 'On-site') { 
            setCurrentValue(games2)
            setPaginate(true)
        } else if(gameOption === 'Off-site') {
            setCurrentValue(offSiteGame)
            setPaginate(false)
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
                    <SelectDropDown 
                        // onChange={handleChange} 
                        getValue={handleChange}
                        options={gameOptionsList} 
                        placeholder={'Off-site'}
                    />
                </div>
                <ModalEffect show={isOpen} closeModal={closeModal}>
                    <div className="site-games">
                        {details && <DetailsCard {...(details ? {...details} : {})} />}
                    </div>
                </ModalEffect>
                {/* <div className="page_sites">
                    <div className="site-games">
                        {currentValue}
                    </div>
                    <div className='pagination-container'>
                        <PaginationRange 
                        firstPosts={defaultPage}
                        totalPosts={totalPages} 
                        postPerPage={postPerPage} 
                        // displayPages={3}
                        setCurrentPageIndex={setCurrentPost}
                        setCurrentPost={setCurrentPost}
                        currentPage={currentPage}
                        active={currentPage}
                        />
                    </div>
                </div> */}
                <div className="">
                    <PaginationComponet api={paginate ? OnsiteGames : OffSiteGames}/>
                </div>
            </div>
        </div>

    </div>
  )
}
