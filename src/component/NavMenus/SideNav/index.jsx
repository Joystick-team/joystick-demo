import React from 'react'
import {Nav, Offcanvas, Navbar, Container} from 'react-bootstrap'
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import { BsFillChatLeftQuoteFill, BsGridFill, BsDropletFill, BsFillPeopleFill, BsGearWideConnected, BsBroadcast} from 'react-icons/bs'
import { FiMenu, FiSearch, FiTwitter } from 'react-icons/fi'
import { FaHome, FaWallet, FaFacebookF } from "react-icons/fa";


import './sidenav.scss';
import ThemeToggle from '../../ThemeToggle'
import SearchBox from '../../SearchBox'
import useToggle from '../../../hooks/useToggle'

export default function SideNav() {
    const {showSearch, setShowSearch} = useToggle();
    console.log('Page ==>', showSearch);
  return (
    <div >
        <Navbar variant="dark"  expand={false} >

        <Container fluid className='Mobile-Hamburger-container'>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className='mobile-Hamburger-button'>  
                    <FiMenu />
                </Navbar.Toggle>
                 <Navbar.Brand href="/">
                    <img loading='lazy' src={JOYSTICK} alt="JOYSTICK-logo" width='100px' height='60px' />
                 </Navbar.Brand>
                <div className="search-mobile" onClick={setShowSearch}>
                {/* <FiSearch /> */}
                    {showSearch ?  <SearchBox /> : <FiSearch />}
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
                            
                            <img loading='lazy' src={JOYSTICK} alt="JOYSTICK-logo" width='80px' height='auto' />
                         </Offcanvas.Title> 
                     </Offcanvas.Header>
                    <Offcanvas.Body variant="dark" >
                        <Nav className=" flex-column side-nav-list-item" variant="pills" defaultActiveKey="/">
                            <Nav.Link activeKey="/" href="/"> <FaHome /> <span>Home</span></Nav.Link>
                            <Nav.Link href="/store"> <BsDropletFill /> <span>Store</span></Nav.Link>
                            <Nav.Link href="/library"> <BsGridFill/> <span>Library</span></Nav.Link>
                            <Nav.Link href="/socials"> <BsFillPeopleFill /> <span>Socials</span></Nav.Link>
                            <Nav.Link href="/livestream"> <BsBroadcast /> <span>Live</span></Nav.Link>
                            <br />
                            <div className="footer-nav-side">
                                <Nav.Link href="/u/wallet"><FaWallet /> <span>Wallet</span></Nav.Link>
                                <Nav.Link href="/u/settings"><BsGearWideConnected /> <span>Settings</span></Nav.Link>
                                <div className="icons-sidenav-footer">
                                    <Nav.Link href="#action2"><FaFacebookF /> </Nav.Link>
                                    <Nav.Link href="#action3"><FiTwitter /> </Nav.Link>
                                    <Nav.Link href="#action4"><BsFillChatLeftQuoteFill /> </Nav.Link>
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
