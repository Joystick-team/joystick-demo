import React, { useState } from 'react'
import './mysidenav.scss'
import TopNav from '../NavMenus/TopNav'
import SidePost from '../SidePost';
import PreviousNextMethods from '../PreviousNextMethods';
import AnnouncementCarousel from '../AnnouncementCard';
import RecentGames from '../RecentGames';
import Example from '../Example';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import JOYSTICK from '../../assets/images/JOYSTICK-logo2.png'

export default function MySide() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        console.log('clicked open');
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("mySideclose").style.width = "175px";
        document.getElementById("main").style.marginLeft= "0";
        console.log('clicked close');
      }

    const [open, setOpen] = useState(true)

  return (
    <div>
        <div id="mySidenav" className="sidenav">
        {/* <div className="logo-title" id='mySideclose'>
            <img src={JOYSTICK} alt="JOYSTICK-logo" />
          </div> */}
        {/* <a href='#' className="closebtn" style={{cursor: 'pointer'}} onClick={closeNav}> &times; </a> */}
            <Example TogglecloseOpen={closeNav} />
        </div>

        <div id="main">
        <div style={{fontSize:'30px', cursor:"pointer", marginTop: '5rem'}} onClick={openNav}>&#9776; open</div>
        <div className="main-container">
        <TopNav />
          <div className="main-div">
            <div className="main" style={{marginRight: '18rem'}}> 
            <AnnouncementCarousel />
              <PreviousNextMethods>
                <RecentGames />
              </PreviousNextMethods>
            </div>
            <div className="side-adverts" style={{display:'flex', justifyContent:'center'}}>
              <SidePost />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
