import React from 'react'
import DrawalNav from '../DrawalNav'
import './layout.scss'
import TopNav from '../NavMenus/TopNav'
import BottomNav from'../NavMenus/BottomNav'


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
          <div className="main-div sm:main-div">
            {props.children}
           
          </div>
          <div >
              <BottomNav />
          </div>
       </div>
      </div>
    </div>
  )
}
