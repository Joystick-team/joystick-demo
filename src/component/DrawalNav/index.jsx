import { useEffect, useState } from "react";
import { Collapse, Nav } from "react-bootstrap";
import {BiMenu} from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { BsBroadcast, BsDropletFill, BsFillChatLeftQuoteFill, BsFillPeopleFill, BsGearWideConnected, BsGridFill } from "react-icons/bs";
import { FaTelegram, FaHome, FaWallet } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import JOYSTICK from '../../assets/images/JOYSTICK-logo.png'
import JOYSTICK2 from '../../assets/images/JOYSTICK-light.png'
import './drawalNav.scss'
import ThemeToggle from "../ThemeToggle";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function DrawalNav({TogglecloseOpen}) {
    const [open, setOpen] = useState(true);

    // const {pathname} = useLocation();

    let [themeData, setThemeData] = useState(localStorage.getItem('theme-dark'))
    useEffect(() => {
          setThemeData(themeData)
    }, [themeData])
    return (
      <div className={`${open ? 'drawal__nav' : 'empty__image'} `} >
        <div className="drawal-nav">
          <div className={`${open ? 'drawal__image-continer' : 'drawal__image__none'}`}>
            { open && 
                <Link className={'no__link'} to="/">
                    <picture>
                        <source srcSet={JOYSTICK} width={'80px'} height={`auto`} media={`(prefers-color-scheme: ${themeData})`}/>
                        
                    </picture>
                    <img loading='lazy' src={JOYSTICK2} alt="JOYSTICK-logo" width='100px' height='60px' />
                </Link>
            }
          </div>
          <p
            onClick={() => setOpen(!open)}
            // onClick={TogglecloseOpen}
            aria-controls="DrawalNav-collapse-text"
            aria-expanded={open}
            className='drawal__nav__burger'
          >
            
            {!open ? <BiMenu /> : <MdClose />}
          </p>
          <div>
            <Collapse in={open} dimension="width">
              <div>
                  <Nav className=" flex-column" variant="tabs">
                    <div className="drawal__nav-slide">
                      <NavLink to="/home"> <FaHome /> <span>Home</span></NavLink>
                      <NavLink to="/store" > <BsDropletFill /> <span>Store</span></NavLink>
                      <NavLink to="/library" > <BsGridFill/> <span>Library</span></NavLink>
                      <NavLink to="/socials" > <BsFillPeopleFill /> <span>Socials</span></NavLink>
                      <NavLink to="/livestream"> <BsBroadcast /> <span>Live</span></NavLink>
                    </div>

                      <hr />
                      <div className="drawal_down_nav-sids">
                        <NavLink to="/u/wallet" ><FaWallet /> <span>Wallet</span></NavLink>
                        <NavLink to="/u/settings"><BsGearWideConnected /> <span>Settings</span></NavLink>
                        <div className="icons-drawal_nav-footer">
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