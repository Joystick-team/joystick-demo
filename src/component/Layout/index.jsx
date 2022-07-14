import React from 'react'
import DrawalNav from '../DrawalNav'
import './layout.scss'
import TopNav from '../NavMenus/TopNav'
import SideNav from '../NavMenus/SideNav'
import BottomNav from "../NavMenus/BottomNav"
 

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
        <SideNav />
          <div className="main-div">
            {props.children}
          </div>
          <BottomNav />
        </div>
      </div>
    </div>
  )
}
