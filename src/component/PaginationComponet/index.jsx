import './pagination.scss';
import { useState } from 'react';
import MyCard from '../MyCard';
import { Col } from 'react-bootstrap';
import PaginationRange from './paginationRange';

function PaginationComponet(props) {
  // eslint-disable-next-line
  const [defaultPage, setDefaultPage] = useState(1)
  const [currentPage, setCurrentPost] = useState(1)
  // eslint-disable-next-line
  const [postPerPage, setPostPerPage] = useState(6)
  const lastPageIndex = currentPage * postPerPage
  const firstPageIndex = lastPageIndex - postPerPage
  const currentPost = (props.api).slice(firstPageIndex, lastPageIndex)
  // eslint-disable-next-line
  const [totalPages, setTotalPages] = useState(props.api.length)

  const offSiteGame = currentPost.map((game, idx) => (
    <Col>
        <MyCard 
            key={game.key && idx}
            title={game.title}
            text={game.text}
            img={game.img}
            button={game.btn}
            // openModal={openModal.bind(this, game)}
        />
    </Col>
))


  return (
    <div style={{display: 'block'}}>
      <div className="site-games">
      {offSiteGame}
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
