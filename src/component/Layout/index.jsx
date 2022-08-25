import React from 'react'
import DrawerNav from '../DrawerNav'
import './layout.scss'
import TopNav from '../NavMenus/TopNav'
import SideNav from '../NavMenus/SideNav'
import BottomNav from '../NavMenus/BottomNav'


export default function Layout(props) {
  return (
    <div className='layout-container'>
      <TopNav />
      <div className="layout">
      
        <div className="side-nav-bar">
          <div className="fixed-top-sidemenu">
          <DrawerNav />
          </div>
        </div>

        <div className="main-container">
        <div className="mobile-nav">
          <SideNav />
        </div>
          <div className="main-div">
            {props.children}
          </div>
          <div className="mobile-bottom-nav">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  )
}
