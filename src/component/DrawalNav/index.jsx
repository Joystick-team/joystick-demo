import { useEffect, useState } from "react";
import { Collapse, Nav } from "react-bootstrap";
import {BiMenu} from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { BsBroadcast, BsDropletFill, BsFillChatLeftQuoteFill, BsFillPeopleFill, BsGearWideConnected, BsGridFill } from "react-icons/bs";
import { FaFacebookF, FaHome, FaWallet } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import JOYSTICK from '../../assets/images/JOYSTICK-logo.png'
import JOYSTICK2 from '../../assets/images/JOYSTICK-light.png'
import './drawalNav.scss'
import ThemeToggle from "../ThemeToggle";
import { Link, useLocation } from "react-router-dom";

export default function DrawalNav({TogglecloseOpen}) {
    const [open, setOpen] = useState(true);

    const {pathname} = useLocation();
    let [themeData, setThemeData] = useState(localStorage.getItem('theme-dark'))
    
    useEffect(() => {
          setThemeData(themeData)
          console.log('mike');
    }, [themeData])

    return (
      <div className="" style={{position: 'relative'}}>
        <div className="side-nav">
          <div className="logo-title">
            {/* <img loading='eager' src={JOYSTICK} alt="JOYSTICK-logo" /> */}

            <picture>
              <source srcSet={JOYSTICK}  media={`(prefers-color-scheme: ${themeData})`}/>
              <img src={JOYSTICK2} alt="JOYSTICK-logo" />
            </picture>
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
                  <Nav className=" flex-column" variant="tabs" defaultActiveKey={pathname.toString()}>
                    <div className="footer-nav">
                      <Link to="/" className={ (pathname.toString() === '/' ?? pathname.toString() === '/home') && `active`}> <FaHome /> <span>Home</span></Link>
                      <Link to="/store" className={ pathname.toString() === '/store' && `active`}> <BsDropletFill /> <span>Store</span></Link>
                      <Link to="/library" className={ pathname.toString() === '/library' && `active`}> <BsGridFill/> <span>Library</span></Link>
                      <Link to="/socials" className={ pathname.toString() === '/socials' && `active`}> <BsFillPeopleFill /> <span>Socials</span></Link>
                      <Link to="/livestream" className={ pathname.toString() === '/livestream' && `active`}> <BsBroadcast /> <span>Live</span></Link>
                    </div>

                      <hr />
                      <div className="footer-nav-sids">
                        <Link to="/u/wallet" className={ pathname.toString() === '/u/wallet' && `active`}><FaWallet /> <span>Wallet</span></Link>
                        <Link to="/u/settings" className={ pathname.toString() === '/u/settings' && `active`}><BsGearWideConnected /> <span>Settings</span></Link>
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