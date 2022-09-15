import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationRange = ({totalPosts, postPerPage, setCurrentPageIndex, totalPage, currentPage, setCurrentPost, firstPosts, active}) => {
    // const displayPages = Math.ceil(totalPosts/postPerPage)
    // const firstItem = Math.ceil(firstPosts / displayPages)
    let pages = [];
    for (let index = 1; index <= Math.ceil(totalPosts/postPerPage); index++) {
        pages.push(index)
    }

    const incrementCount = () => {
        if(currentPage < (totalPage ?? 12)){
            setCurrentPost(currentPage + 1)
            console.log('goA ', currentPage);
        }else{
            setCurrentPost(e => e)
            console.log('go-1A ', currentPage);
        }
    }

    const decrementCount = () => {
        if(1 < currentPage && currentPage < (totalPage ?? 12)){
            setCurrentPost(currentPage - 1)
            console.log('goB ', currentPage);
        }else{
            setCurrentPost(e => e)
            console.log('go-1B ', currentPage);
        }
    }
    const incrementCountPage = () => {
        if(currentPage <= (totalPage ?? 12)){
            setCurrentPost(currentPage + 3)
            console.log('go2A ', currentPage);
        }else{
            setCurrentPost(e => e)
            console.log('go-2A ', currentPage);
        }
    }
    const decrementCountPage = () => {
        if(1 < currentPage && currentPage >= (totalPage ?? 12)){
            setCurrentPost(currentPage - 3)
            console.log('go2B ', currentPage);
        }else{
            setCurrentPost(e => e)
            console.log('go-2B ', currentPage);
        }
    }

    return (
        <>
            <Pagination> 
            {/* <Pagination.Item onClick={() => setCurrentPost(() => pages.at(0))}>{firstPosts}</Pagination.Item> */}
            <Pagination.Prev onClick={decrementCount} />
            <Pagination.Ellipsis onClick={decrementCountPage} />
                {pages.map((page) => {
                    return <Pagination.Item active={page === active} onClick={() => setCurrentPageIndex(page)} key={page} value={page}>{page}</Pagination.Item>
                })}
                <Pagination.Ellipsis onClick={incrementCountPage} />
                <Pagination.Next onClick={incrementCount} />
                {/* <Pagination.Item onClick={() => setCurrentPost(() => pages.at(-1))}>{displayPages}</Pagination.Item> */}
            </Pagination> 
        </>
    );
};
export default PaginationRange;