import React from 'react'
import DrawalNav from '../DrawalNav'
import './layout.scss'
import TopNav from '../NavMenus/TopNav'
import BottomNav from'../NavMenus/BottomNav'
import SideNav from '../NavMenus/SideNav'


export default function Layout(props) {
  return (
    <div className='layout-container'>
      <div className="layout">
        <div className="side-nav-bar">
          <div className="fixed-top-sidemenu sm:fixed-top-sidemenu">
          <DrawalNav />
          </div>
          
        </div>
        

        <div className="main-container">
        <TopNav />
        <SideNav />
          <div className="main-div sm:main-div">
            {props.children}
           
          </div>
          <div >
             
          </div>
       </div>
       
      </div>
      <BottomNav />
    </div>
  )
}
