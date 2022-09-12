import React, { useState } from 'react'
import {Nav, Offcanvas, Navbar, Container } from 'react-bootstrap'
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import JOYSTICK2 from '../../../assets/images/JOYSTICK-light.png'
import { BsFillChatLeftQuoteFill, BsGridFill, BsDropletFill, BsFillPeopleFill, BsGearWideConnected, BsBroadcast, BsCurrencyBitcoin} from 'react-icons/bs'
import { FiMenu, FiSearch, FiTwitter } from 'react-icons/fi'
import { FaHome, FaWallet, FaTelegram} from "react-icons/fa";
// import { TbBrandMeta} from "react-icons/fa";
import './sidenav.scss';
import ThemeToggle from '../../ThemeToggle'
import SearchBox from '../../SearchBox'
import { Link, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../../ThemeContext'
import ConnectButton from '../../ConnectButton'
import AuthButton from '../../../pages/Auth/AuthButton'

export default function SideNav() {
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
    <div>
        <Navbar variant="dark"  expand={false} >
        <Container fluid className='Mobile-Hamburger-container'>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className='mobile-Hamburger-button'>  
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
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                className='side-nav'
                // variant='side-nav'
                variant="dark"
                // style={{marginTop: '20%'}}
                >
                    <Offcanvas.Header closeButton variant="dark">
                        
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                        <Link to={'/'} >
                            {/* <picture>
                                <source srcSet={JOYSTICK2}  width={'80px'} height={`auto`} media={`(prefers-color-scheme: ${themeDetector})`}/>
                                <img src={JOYSTICK} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                            </picture> */}
                            { themeDetector === 'light' || themeDetector === null ? 
                                <img src={JOYSTICK2} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                                :
                                <img src={JOYSTICK} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                            }
                        </Link>
                         </Offcanvas.Title> 
                     </Offcanvas.Header>
                    <Offcanvas.Body variant="dark" >
                        <Nav className=" flex-column side-nav-list-item" variant="pills" defaultActiveKey="/">
                                <Link to="/home" className={ ( pathname === '/home' || pathname === '/') && `active`}> <FaHome /> <span>Home</span></Link>
                                <Link to="/store" className={ pathname === '/store' && `active`}> <BsDropletFill /> <span>Store</span></Link>
                                <Link to="/library" className={ pathname === '/library' && `active`}> <BsGridFill/> <span>Library</span></Link>
                                <Link to="/socials" className={ pathname === '/socials' && `active`}> <BsFillPeopleFill /> <span>Socials</span></Link>
                                <Link to="/livestream" className={ pathname === '/livestream' && `active`}> <BsBroadcast /> <span>Live</span></Link>
                            <br />
                            <div className="footer-nav-side">
                            <div className="mobile-connect-btn" expand={false}>
                                <ConnectButton className='btn-connect' icon={<BsCurrencyBitcoin />} style={{width: '100%', borderRadius: '12px'}} color="danger" title='Connect'/>
                            </div>
                            <Link to="/u/wallet" className={ pathname === '/u/wallet' && `active`}><FaWallet /> <span>Wallet</span></Link>
                            <Link to="/u/settings" className={ pathname === '/u/settings' && `active`}><BsGearWideConnected /> <span>Settings</span></Link>
                                <div className="icons-sidenav-footer">
                                    <Nav.Link href="#" target="_blank" ><FaTelegram /> </Nav.Link>
                                    <Nav.Link href="https://twitter.com/Joystick_labs?t=tJCfTkFcbIJ4KqJY0Ak4EQ&s=09" target="_blank"><FiTwitter /> </Nav.Link>
                                    <Link to="/message" className={ pathname === '/message' && `active`}><BsFillChatLeftQuoteFill /> </Link>
                                </div>
                                <AuthButton />
                                <ThemeToggle />
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </div>
  )
}
