import React from 'react'
import './layoutnav.scss'
import TopNav from '../NavMenus/TopNav'
import Example from '../Example';
// import JOYSTICK from '../../assets/images/JOYSTICK-logo2.png'

export default function Layout(props) {
    function openNav() {
        document.getElementById("Layoutnav").style.width = "250px";
        document.getElementById("main-layout").style.marginLeft = "250px";
        console.log('clicked open');
      }
      
      function closeNav() {
        document.getElementById("Layoutnav").style.width = "0";
        // document.getElementById("Layoutclose").style.width = "175px";
        document.getElementById("main-layout").style.marginLeft= "0";
        console.log('clicked close');
      }

    // const [open, setOpen] = useState(true)

  return (
    <div>
        <div id="Layoutnav" className="sidenav">
        {/* <a href='#' className="closebtn" style={{cursor: 'pointer'}} onClick={closeNav}> &times; </a> */}
            <Example TogglecloseOpen={closeNav} />
        </div>

        <div id='main-layout'>
        <div style={{fontSize:'30px', cursor:"pointer", marginTop: '5rem'}} onClick={openNav}>&#9776; open</div>
        <div className="main-container">
        <TopNav />
          <div className="main-div">
            <div className="main" > 
              {props.children}
            </div>
            {/* <div className="side-adverts" style={{display:'flex', justifyContent:'center'}}>
              <SidePost />
            </div> */}
          </div>
        </div>
        </div>
    </div>
  )
}
