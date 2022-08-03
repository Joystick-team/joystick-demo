import { useState } from "react";
import { Collapse, Nav } from "react-bootstrap";
import {BiMenu} from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { BsBroadcast, BsDropletFill, BsFillChatLeftQuoteFill, BsFillPeopleFill, BsGearWideConnected, BsGridFill } from "react-icons/bs";
import { FaFacebookF, FaHome, FaWallet } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import JOYSTICK from '../../assets/images/JOYSTICK-logo2.png'
import './drawalNav.scss'
import ThemeToggle from "../ThemeToggle";
import { Link, useLocation } from "react-router-dom";

export default function DrawalNav({TogglecloseOpen}) {
    const [open, setOpen] = useState(true);

    const {pathname} = useLocation();
    // console.log(pathname);
    // if(pathname === '/store'){
    //   document.setAttribute('class', 'active')

    // }
    return (
      <div className="" style={{position: 'relative'}}>
        <div className="side-nav">
          <div className="logo-title">
            <img loading='eager' src={JOYSTICK} alt="JOYSTICK-logo" />
          </div>
          <p
            onClick={() => setOpen(!open)}
            // onClick={TogglecloseOpen}
            aria-controls="DrawalNav-collapse-text"
            aria-expanded={open}
            className='side-nav-burger'
          >
            {!open ? <BiMenu /> : <MdClose />}
          </p>
          <div>
            <Collapse in={open} dimension="width">
              <div>
                  <Nav className=" flex-column" variant="tabs" defaultActiveKey={pathname}>
                    <div className="footer-nav">
                      <Link to="/" className={ (pathname === '/' ?? pathname === '/home') && `active`}> <FaHome /> <span>Home</span></Link>
                      <Link to="/store" className={ pathname === '/store' && `active`}> <BsDropletFill /> <span>Store</span></Link>
                      <Link to="/library" className={ pathname === '/library' && `active`}> <BsGridFill/> <span>Library</span></Link>
                      <Link to="/socials" className={ pathname === '/socials' && `active`}> <BsFillPeopleFill /> <span>Socials</span></Link>
                      <Link to="/livestream" className={ pathname === '/livestream' && `active`}> <BsBroadcast /> <span>Live</span></Link>
                    </div>

                      <hr />
                      <div className="footer-nav-sids">
                        <Link to="/u/wallet" className={ pathname === '/u/wallet' && `active`}><FaWallet /> <span>Wallet</span></Link>
                        <Link to="/u/settings" className={ pathname === '/u/settings' && `active`}><BsGearWideConnected /> <span>Settings</span></Link>
                        <div className="icons-sidenav-footer">
                            <Link to="#action2"><FaFacebookF /> </Link>
                            <Link to="#action3"><FiTwitter /> </Link>
                            <Link to="#action4"><BsFillChatLeftQuoteFill /> </Link>
                        </div>
                        <ThemeToggle />
                      </div>

                  </Nav>

              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }