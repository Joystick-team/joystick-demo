import React from 'react';

function Pagination({postPerPage, totalPosts}) {
    const pageNumbers = []
    for(let i; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }
    
    
    const displayPagination = pageNumbers.map(n=>{
        <li key={n} className='page=item'>
            <a href='#' className='page-link'>
                {n}
            </a>
        </li>
    })
    return (
        <nav>
            <ul className='pagination'>

            </ul>
        </nav>
    );
}

export default Pagination;