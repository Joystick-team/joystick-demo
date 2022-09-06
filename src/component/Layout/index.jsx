import React from 'react'
import './layout.scss'
import TopNav from '../NavMenus/TopNav'
// import SideNav from '../NavMenus/SideNav'
import BottomNav from '../NavMenus/BottomNav'
import MobileSideNav from '../NavMenus/MobileSideNav'
import { AppContextInit } from '../../context/AppContext'
import DropAlert from '../ErrorAlert'
import DrawerNav from '../NavMenus/DrawalNav'


export default function Layout(props) {
  const { isUser, message, success } = AppContextInit()
console.log('success', success);
  return (
    <div className='layout-container'>

      <TopNav />
      <div className="layout">
          {isUser && 
              <DropAlert  title={`${success ? 'Success!' : 'Oops!! An Error Occured'}`}>
                {message}
            </DropAlert> 
            }
        <div className="side-nav-bar">
          <div className="fixed-top-sidemenu">
         <DrawerNav />
          </div>
        </div>

        <div className="main-container">
        <div className="mobile-nav">
          {/* <SideNav /> */}
          <MobileSideNav />
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
