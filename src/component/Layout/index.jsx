import React from 'react'
import DrawalNav from '../DrawalNav'
import './test.scss'
import TopNav from '../NavMenus/TopNav'


export default function Layout(props) {
  return (
    <div className='test-container'>
      <div className="test">
        <div className="side-nav-bar">
          <div className="fixed-top-sidemenu">
          <DrawalNav />
          </div>
          
        </div>

        <div className="main-container">
        <TopNav />
          <div className="main-div">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
