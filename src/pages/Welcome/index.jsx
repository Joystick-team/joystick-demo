import React from 'react'
import logo from '../../assets/images/JOYSTICK-logo.png';
import BottomNav from '../../component/NavMenus/BottomNav';
import SideNav from '../../component/NavMenus/SideNav';
import './welcome.css'

export default function WelcomePage() {
  return (
    <div>
      <SideNav />
        <header className="Welcome-page">
          <img src={logo} className="Welcome-page-logo" alt="logo" />
          {/* <p>
            Welcome to JOYSTICK Gamefi Project
          </p> */}
          
        </header>
        <BottomNav />
    </div>

  )
}
