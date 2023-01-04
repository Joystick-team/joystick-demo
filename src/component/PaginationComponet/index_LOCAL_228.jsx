import { useState } from 'react';
import MyCard from '../MyCard';
import { Col } from 'react-bootstrap';
// import PaginationRange from './paginationRange';
import  { default as api } from '../../config/config.json'
import DetailsCard from '../DetailsCard';
import ModalEffect from '../Modal';
import useFetch from '../../hooks/useFetch';
import './pagination.scss';
import { AppContextInit } from '../../context/AppContext';
import LoadingScreen from '../LoadingScreen';
import {Paginate} from "../paginate"


function PaginationComponet(props) {
 
  //eslint-disable-next-line
  const { isUser, setIsUser, message, setMessage, setSuccess} = AppContextInit()
  const url = `${api?.url}/game?game_type=off_site&sort=asc-name&page=1&limit=15`
  //eslint-disable-next-line
  const [loading, data, error] = useFetch(url)
  const page = props.page;
  const metaData = props.metaData;
  const pages = Math.ceil(metaData?.total / metaData?.limit);
  const paginate = props.paginate;
  // eslint-disable-next-line
  const [defaultPage, setDefaultPage] = useState(1)
  const [currentPage, setCurrentPost] = useState(1)
  // eslint-disable-next-line
  const [postPerPage, setPostPerPage] = useState(15)
  const lastPageIndex = currentPage * postPerPage
  const firstPageIndex = lastPageIndex - postPerPage
  const currentPost = (props.api)?.slice(firstPageIndex, lastPageIndex)

  // eslint-disable-next-line
  const totalPost = data && data?.data?.metadata?.total;
  const totalPage = totalPost / postPerPage;

  const [isOpen, setIsOpen] = useState(false)
  const [details, setDetails] = useState(null);
  if (error) {
      setSuccess(false)
      setIsUser(true)
      setMessage('Games are currectly not available')
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
            // text={game.description}
            img={game?.images?.large ?? game.image}
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
              {details && <DetailsCard {...(details && {...details})} />}
          </div>
      </ModalEffect>
      {loading && <LoadingScreen isloading={loading} /> }
      <div className="site-games">
      { 
          !error ? siteGames 
           :
          <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
             No Data Found 
          </div>
      }
      </div>
      
      <br />
      <div className='pagination-container'>
        {/* {!error &&
          <PaginationRange 
            firstPosts={defaultPage}
            totalPosts={totalPost} 
            totalPage={totalPage}
            postPerPage={postPerPage} 
            // displayPages={3}
            setCurrentPageIndex={setCurrentPost}
            setCurrentPost={setCurrentPost}
            currentPage={currentPage}
            active={currentPage}
          />
        } */}
        {!error && !paginate&&
          <Paginate 
          page={page}
          pages={pages}
          />
        }
      </div>
    </div>
  );

}

export default PaginationComponet;
