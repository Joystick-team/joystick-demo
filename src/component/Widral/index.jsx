import React, { useState } from 'react'
import './layoutnav.scss'
import TopNav from '../NavMenus/TopNav'
import Example from '../Example';
import { BiMenu } from 'react-icons/bi';
// import JOYSTICK from '../../assets/images/JOYSTICK-logo2.png'

export default function Layout(props) {
  const [open, setOpen] = useState(true)

  

  return (
    <div>
        <div id="Layoutnav" className="sidenav"  style={{
          width: 250,
          ...(open ? {left: 0} : {left: -300}),
        }}>
        
        {/* <a href='#' className="closebtn" style={{cursor: 'pointer'}} onClick={closeNav}> &times; </a> */}
            <Example TogglecloseOpen={e => setOpen(!open)} />
        </div>

        <div id='main-layout' style={{
          //  ...(open ? {left: 0} : {left: -300}),
        }}>
        <div style={{fontSize:'30px', cursor:"pointer", marginTop: '5rem'}} onClick={e => setOpen(!open)} > {open ? 'close':<BiMenu />   }  </div>
        <div className="main-container">
        <TopNav />
          <div className="main-div">
              {props.children}
            {/* <div className="side-adverts" style={{display:'flex'}}>
              <SidePost />
            </div> */}
          </div>
        </div>
        </div>
    </div>
  )
}
