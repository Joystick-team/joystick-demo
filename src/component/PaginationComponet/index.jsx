import { useState } from 'react';
import MyCard from '../MyCard';
import { Col } from 'react-bootstrap';
import PaginationRange from './paginationRange';
import  { default as api } from '../../config/config.json'
import DetailsCard from '../DetailsCard';
import ModalEffect from '../Modal';
import useFetch from '../../hooks/useFetch';
import Spinner from 'react-bootstrap/Spinner';
import './pagination.scss';
import { AppContextInit } from '../../context/AppContext';


function PaginationComponet(props) {
  //eslint-disable-next-line
  const { isUser, setIsUser, message, setMessage, setSuccess} = AppContextInit()
  const url = `${api?.url}/game?game_type=off_site&sort=asc-name&page=1&limit=15`
  //eslint-disable-next-line
  const [loading, data, error] = useFetch(url)
  
  // eslint-disable-next-line
  const [defaultPage, setDefaultPage] = useState(1)
  const [currentPage, setCurrentPost] = useState(1)
  // eslint-disable-next-line
  const [postPerPage, setPostPerPage] = useState(6)
  const lastPageIndex = currentPage * postPerPage
  const firstPageIndex = lastPageIndex - postPerPage
  const currentPost = (props.api)?.slice(firstPageIndex, lastPageIndex)

  // eslint-disable-next-line
  const totalPages = data && data?.data?.metadata?.total
console.log(totalPages);
  const [isOpen, setIsOpen] = useState(false)
  const [details, setDetails] = useState(null);

  if (error) {
      setSuccess(false)
      setIsUser(true)
      setMessage('Check your internet Connection')
  }

  function openModal(data) {
    setIsOpen(true);
    setDetails(data)
  }

    const closeModal = () => {
        setIsOpen(false)
    }

  const siteGames = data && currentPost?.map((game, idx) => (
    <Col>
        <MyCard 
            key={game.id?.toString() ?? game.key.toString()}
            title={game.name ?? game.name}
            text={game.text}
            img={game?.images?.large ?? game.images}
            // button={game.btn}
            button={props.btn === 'OnsiteGames' ? "Play" : "More Info" }
            openModal={props.btn === 'OnsiteGames' ? "onsitefunction()" : openModal.bind(this, game)
            }
        />
    </Col>
))

// dangerouslySetInnerHTML={{__html: content}}
  return (
    <div style={{display: 'block'}}>
      <ModalEffect show={isOpen} closeModal={closeModal}>
          <div className="site-games">
              {details && <DetailsCard {...(details ? {...details} : {})} />}
          </div>
      </ModalEffect>
      <div className="site-games">
      {loading && <span style={{textAlign: 'center', margin: '5% 50%'}}> <Spinner animation="border" /></span>}
      {siteGames}
      </div>
      
      <br />
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
    </div>
  );

}

export default PaginationComponet;
