import React from 'react'
import DrawalNav from '../DrawalNav'
import './layout.scss'
import TopNav from '../NavMenus/TopNav'
import SideNav from '../NavMenus/SideNav'
import BottomNav from '../NavMenus/BottomNav'
import Subscription from '../Subscription'


export default function Layout(props) {
  return (
    <div className='layout-container'>
      <TopNav />
      <div className="layout">
      
        <div className="side-nav-bar">
          <div className="fixed-top-sidemenu">
          <DrawalNav />
          </div>
        </div>

        <div className="main-container">
        <div className="mobile-nav">
          <SideNav />
        </div>
          <div className="main-div">
            {props.children}
          </div>
          <div>
            <Subscription />
          </div>
          <div className="mobile-bottom-nav">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  )
}
