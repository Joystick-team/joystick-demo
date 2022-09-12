import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationRange = ({totalPosts, postPerPage, setCurrentPageIndex, currentPage, setCurrentPost, firstPosts, active}) => {
    // const displayPages = Math.ceil(totalPosts/postPerPage)
    // const firstItem = Math.ceil(firstPosts / displayPages)
    let pages = [];
    for (let index = 1; index <= Math.ceil(totalPosts/postPerPage); index++) {
        pages.push(index)
    }

    const incrementCount = () => {
        setCurrentPost(currentPage + 1)
    }

    const decrementCount = () => {
        setCurrentPost(currentPage - 1)
    }
    const incrementCountPage = () => {
        setCurrentPost(currentPage + 3)
    }
    const decrementCountPage = () => {
        setCurrentPost(currentPage - 3)
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