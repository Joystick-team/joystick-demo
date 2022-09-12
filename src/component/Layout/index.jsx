import React from 'react'
import './layout.scss'
import TopNav from '../NavMenus/TopNav'
// import SideNav from '../NavMenus/SideNav'
import BottomNav from '../NavMenus/BottomNav'


export default function Layout(props) {
  const { isUser, message, success } = AppContextInit()
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
