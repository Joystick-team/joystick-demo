import React from 'react'
import "./pagelayout.scss"
import ActiveFriends from '../../component/ActiveFriends'


export default function PageLayout({children}) {
  return (
    <div className='page-layout-follow'>
        <div className='layout-follow-div'>
             <div className='follow-left-section'>
                  {children}
             </div>

             <div className='follow-right-section'>
                  <ActiveFriends />
                </div>
        </div>

    </div>
  )
}
