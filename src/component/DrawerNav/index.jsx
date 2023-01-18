import { useState } from "react";
import { useSelector } from 'react-redux'
import { Collapse, Nav } from "react-bootstrap";
import {BiMenu} from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { BsBroadcast, BsDropletFill, BsFillChatLeftQuoteFill, BsFillPeopleFill, BsGearWideConnected, BsGridFill } from "react-icons/bs";
import { FaTelegram, FaHome, FaWallet } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import JOYSTICK2 from '../../../assets/images/JOYSTICK-light.png'
import './drawalNav.scss'
import ThemeToggle from "../../ThemeToggle";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../ThemeContext";

export default function DrawerNav({ TogglecloseOpen }) {
  
  const [open, setOpen] = useState(true);
  const { userToken } = useSelector(state => state.signin)
  const [themeDetector, setThemeDetector] = useTheme()
  const isLandingPage = window.location.href.endsWith("/")
    return (
      <div className={`${open ? 'drawer__nav' : 'empty__image'} `} >
        <div className="drawer-nav">
          <div className={`${open ? 'drawer__image-continer' : 'drawer__image__none'}`}>
            
            { open && 
                <Link className={'no__link'} to="/">
                    {/* <picture>
                        <source srcSet={JOYSTICK2} width={'80px'} height={`auto`} media={`(prefers-color-scheme: ${themeDetector})`}/>
                        <img loading='lazy' src={JOYSTICK} alt="JOYSTICK-logo" width='100px' height='60px' />
                    </picture> */}
                    
                    { themeDetector === 'light' || themeDetector === null ? 
                        <img src={JOYSTICK2} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                        :
                        <img src={JOYSTICK} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                    }
                </Link>
            }
          </div>
          <p
            onClick={() => setOpen(!open)}
            // onClick={TogglecloseOpen}
            aria-controls="DrawerNav-collapse-text"
            aria-expanded={open}
            className='drawer__nav__burger'
          >
            
            {!open ? <BiMenu /> : <MdClose />}
          </p>
          <div>
            <Collapse in={open} dimension="width">
              <div>
                  <Nav className=" flex-column" variant="tabs">
                    <div className="drawer__nav-slide">
                    {
                      !isLandingPage && userToken?.access_token && <NavLink to="/home"> <FaHome /> <span>Home</span></NavLink>
                    }
                      <NavLink to="/store"> <BsDropletFill /> <span>Store</span></NavLink>
                      <NavLink to="/library" > <BsGridFill/> <span>Library</span></NavLink>
                      <NavLink to="/feeds" > <BsFillPeopleFill /> <span>Socials</span></NavLink>
                      <NavLink to="/livestream"> <BsBroadcast /> <span>Live</span></NavLink>
                    </div>

                      <hr />
                      <div className="drawer_down_nav-sids">
                        <NavLink to="/u/wallet" ><FaWallet /> <span>Wallet</span></NavLink>
                        <NavLink to="/u/settings"><BsGearWideConnected /> <span>Settings</span></NavLink>
                        <div className="icons-drawer_nav-footer">
                            <Nav.Link href="#"  target="_blank"><FaTelegram/> </Nav.Link>
                            <Nav.Link href="https://twitter.com/Joystick_labs?t=tJCfTkFcbIJ4KqJY0Ak4EQ&s=09" target="_blank"><FiTwitter /> </Nav.Link>
                            <NavLink to="/message" ><BsFillChatLeftQuoteFill /> </NavLink>
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