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
        }else{
            setCurrentPost(e => e)
        }
    }

    const decrementCount = () => {
        if(1 < currentPage && currentPage < (totalPage ?? 12)){
            setCurrentPost(currentPage - 1)
        }else{
            setCurrentPost(e => e)
        }
    }
    const incrementCountPage = () => {
        if(currentPage <= (totalPage ?? 12)){
            setCurrentPost(currentPage + 3)
        }else{
            setCurrentPost(e => e)
        }
    }
    const decrementCountPage = () => {
        if(1 < currentPage && currentPage >= (totalPage ?? 12)){
            setCurrentPost(currentPage - 3)
        }else{
            setCurrentPost(e => e)
        }
    }

    const data = pages.map((page) => {
        return <Pagination.Item active={page === active} onClick={() => setCurrentPageIndex(page)} key={page} value={page}>{page}</Pagination.Item>
    })
    return (
        <>
            <Pagination> 
            {/* <Pagination.Item onClick={() => setCurrentPost(() => pages.at(0))}>{firstPosts}</Pagination.Item> */}
                <Pagination.Prev onClick={decrementCount} />
                <Pagination.Ellipsis onClick={decrementCountPage} />
                    {data}
                <Pagination.Ellipsis onClick={incrementCountPage} />
                <Pagination.Next onClick={incrementCount} />
                {/* <Pagination.Item onClick={() => setCurrentPost(() => pages.at(-1))}>{displayPages}</Pagination.Item> */}
            </Pagination> 
        </>
    );
};
export default PaginationRange;