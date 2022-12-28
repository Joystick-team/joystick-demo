import React, { useState } from 'react';
import { BsFillChatLeftQuoteFill, BsGridFill, BsDropletFill, BsFillPeopleFill, BsGearWideConnected, BsBroadcast, BsCurrencyBitcoin} from 'react-icons/bs'
import { FiMenu, FiSearch, FiTwitter } from 'react-icons/fi'
import { FaHome, FaWallet, FaTelegram} from "react-icons/fa";
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTheme } from '../../../ThemeContext';
import '../SideNav/sidenav.scss';
import ConnectButton from '../../ConnectButton';
import AuthButton from '../../../pages/Auth/AuthButton';
import ThemeToggle from '../../ThemeToggle';
import SearchBox from '../../SearchBox';
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import JOYSTICK2 from '../../../assets/images/JOYSTICK-light.png'
import './mobileSideNav.scss';
import { AppContextInit } from '../../../context/AppContext';

export default function MobileSideNav() {
    const { setMobileDrawer, mobileDrawer } = AppContextInit()
    const handleClose = () => setMobileDrawer(false);
    const handleShow = () => setMobileDrawer(true);
    const [showSearch, setShowSearch] = useState(false);
    const {pathname} = useLocation()
    //eslint-disable-next-line
    const [themeDetector, setThemeDetector] = useTheme()
        
    const closeSearch = () => {
        setShowSearch(false)
       }
       window.addEventListener('click', closeSearch)

    function handleSearch (event) {
        setShowSearch(true)
        // if(showSearch){
            // setShowSearch(true)
            event.stopPropagation()
        // }
    }


    function preventSearch(event){
            setShowSearch(true)
            event.stopPropagation()
        
   }

    return (
      <div >
        <div className="mobile_top_nav navbar-dark">
            <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" className='mobile-Hamburger-button'>  
                <FiMenu />
            </Navbar.Toggle>
                <NavLink to="/">
                {/* <picture>
                    <source srcSet={JOYSTICK2} width={'80px'} height={`auto`} media={`(prefers-color-scheme: ${themeDetector})`}/>
                    <img loading='lazy' src={JOYSTICK} alt="JOYSTICK-logo" width='100px' height='auto' />
                </picture> */}

                { themeDetector === 'light' || themeDetector === null ? 
                    <img src={JOYSTICK2} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                    :
                    <img src={JOYSTICK} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                }
                
                </NavLink>
            <div className="search-mobile">
            {/* <FiSearch /> */}
                <div className="" >
                    
                {showSearch ?  <SearchBox onClick={preventSearch} /> : <span onClick={handleSearch} style={{float: 'right', fontSize: '1.35rem'}}><FiSearch /></span>}
                </div>
            </div>
            {/* <Button className='mobile-Hamburger-button' onClick={handleShow}>
            <FiMenu />
        </Button> */}
        </div>

  
        <Offcanvas className='side-nav' show={mobileDrawer} onHide={handleClose.bind()}>
          <Offcanvas.Header closeButton>
            { themeDetector === 'light' || themeDetector === null ? 
                <img src={JOYSTICK2} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                :
                <img src={JOYSTICK} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
            }
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className=" flex-column side-nav-list-item" variant="pills" defaultActiveKey="/">
                    <Link to="/home" onClick={handleClose} className={ ( pathname === '/home' || pathname === '/') && `active`}> <FaHome /> <span>Home</span></Link>
                    <Link to="/store" onClick={handleClose} className={ pathname === '/store' && `active`}> <BsDropletFill /> <span>Store</span></Link>
                    <Link to="/library" onClick={handleClose} className={ pathname === '/library' && `active`}> <BsGridFill/> <span>Library</span></Link>
                    <Link to="/socials" onClick={handleClose} className={ pathname === '/socials' && `active`}> <BsFillPeopleFill /> <span>Socials</span></Link>
                    <Link to="/livestream" onClick={handleClose} className={ pathname === '/livestream' && `active`}> <BsBroadcast /> <span>Live</span></Link>
                <br />
                <div className="footer-nav-side">
                <div className="mobile-connect-btn"  onClick={handleClose}>
                    <ConnectButton className='btn-connect' icon={<BsCurrencyBitcoin />} style={{width: '100%', borderRadius: '12px'}} color="danger" title='Connect'/>
                </div>
                <Link to="/u/wallet" onClick={handleClose} className={ pathname === '/u/wallet' && `active`}><FaWallet /> <span>Wallet</span></Link>
                <Link to="/u/settings" onClick={handleClose} className={ pathname === '/u/settings' && `active`}><BsGearWideConnected /> <span>Settings</span></Link>
                    <div className="icons-sidenav-footer">
                        <Nav.Link href="#" target="_blank" ><FaTelegram /> </Nav.Link>
                        <Nav.Link href="https://twitter.com/Joystick_labs?t=tJCfTkFcbIJ4KqJY0Ak4EQ&s=09" target="_blank"><FiTwitter /> </Nav.Link>
                        <Link to="/message" onClick={handleClose} className={ pathname === '/message' && `active`}><BsFillChatLeftQuoteFill /> </Link>
                    </div>
                    <AuthButton clicked={handleClose}/>
                    <ThemeToggle />
                </div>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    )
}
