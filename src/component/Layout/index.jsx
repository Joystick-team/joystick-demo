import React from 'react'
import DrawalNav from '../DrawalNav'
import './layout.scss'
import TopNav from '../NavMenus/TopNav'


export default function Layout(props) {
  return (
    <div className='layout-container'>
      <div className="layout">
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
