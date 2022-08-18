import React, { useEffect, useState } from 'react'
import {Nav, Offcanvas, Navbar, Container } from 'react-bootstrap'
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
// import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import JOYSTICK2 from '../../../assets/images/JOYSTICK-light.png'
import { BsFillChatLeftQuoteFill, BsGridFill, BsDropletFill, BsFillPeopleFill, BsGearWideConnected, BsBroadcast} from 'react-icons/bs'
import { FiMenu, FiSearch, FiTwitter } from 'react-icons/fi'
import { FaHome, FaWallet, FaTelegram} from "react-icons/fa";
import './sidenav.scss';
import ThemeToggle from '../../ThemeToggle'
import SearchBox from '../../SearchBox'
import { Link, useLocation } from 'react-router-dom'

export default function SideNav() {
    const [showSearch, setShowSearch] = useState(false);
    const {pathname} = useLocation()
        
    const handleSearch = () => {
        setShowSearch(true)
    }

    let [themeData, setThemeData] = useState(localStorage.getItem('theme-dark'))
    useEffect(() => {
          setThemeData(themeData)
    }, [themeData])
   
  return (
    <div >
        <Navbar variant="dark"  expand={false} >

        <Container fluid className='Mobile-Hamburger-container'>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className='mobile-Hamburger-button'>  
                    <FiMenu />
                </Navbar.Toggle>
                 <Navbar.Brand href="/">
                    <picture>
                        <source srcSet={JOYSTICK} width={'80px'} height={`auto`} media={`(prefers-color-scheme: ${themeData})`}/>
                        
                    </picture>
                    {/* <img loading='lazy' src={JOYSTICK} alt="JOYSTICK-logo" width='100px' height='60px' /> */}
                 </Navbar.Brand>
                <div className="search-mobile" onClick={setShowSearch}>
                {/* <FiSearch /> */}
                    <div className="" >
                        
                    {showSearch ?  <SearchBox /> : <span onClick={handleSearch} style={{float: 'right', fontSize: '1.35rem'}}><FiSearch /></span>}
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
                            <picture>
                                <source srcSet={JOYSTICK}  width={'80px'} height={`auto`} media={`(prefers-color-scheme: ${themeData})`}/>
                                <img src={JOYSTICK2} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                            </picture>
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

                            <Link to="/u/wallet" className={ pathname === '/u/wallet' && `active`}><FaWallet /> <span>Wallet</span></Link>
                            <Link to="/u/settings" className={ pathname === '/u/settings' && `active`}><BsGearWideConnected /> <span>Settings</span></Link>
                                <div className="icons-sidenav-footer">
                                    <Nav.Link href="#" target="_blank" ><FaTelegram /> </Nav.Link>
                                    <Nav.Link href="https://twitter.com/Joystick_labs?t=tJCfTkFcbIJ4KqJY0Ak4EQ&s=09" target="_blank"><FiTwitter /> </Nav.Link>
                                    <Link to="/message" className={ pathname === '/message' && `active`}><BsFillChatLeftQuoteFill /> </Link>
                                </div>
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
