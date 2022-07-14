import React from 'react'
import {Nav, Offcanvas, Navbar, Container } from 'react-bootstrap'
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import { BsFillChatLeftQuoteFill, BsGridFill, BsDropletFill, BsFillPeopleFill, BsGearWideConnected, BsBroadcast} from 'react-icons/bs'
import { FiSearch, FiTwitter } from 'react-icons/fi'
import { FaHome, FaWallet, FaFacebookF } from "react-icons/fa";


import './sidenav.scss';
import ThemeToggle from '../../ThemeToggle'
export default function SideNav() {
  return (
    <div >
        <Navbar variant="dark"  expand={false} >
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" variant="dark"/>
                 <Navbar.Brand href="#">
                    <img loading='lazy' src={JOYSTICK} alt="JOYSTICK-logo" width='100px' height='60px' />
                 </Navbar.Brand>
                <FiSearch /> 

                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                className='side-nav'
                // variant='side-nav'
                variant="dark"
                >
                    <Offcanvas.Header closeButton variant="dark">
                        
                        {/* {/* <Offcanvas.Title id="offcanvasNavbarLabel">
                            
                            <img loading='lazy' src={JOYSTICK} alt="JOYSTICK-logo" width='80px' height='40px' />
                         </Offcanvas.Title> */}
                     </Offcanvas.Header>
                    <Offcanvas.Body variant="dark">
                        <Nav className=" flex-column" variant="pills" defaultActiveKey="/">
                            <Nav.Link activeKey="/" href="/"> <FaHome /> <span>Home</span></Nav.Link>
                            <Nav.Link href="/store"> <BsDropletFill /> <span>Store</span></Nav.Link>
                            <Nav.Link href="/library"> <BsGridFill/> <span>Library</span></Nav.Link>
                            <Nav.Link href="/socials"> <BsFillPeopleFill /> <span>Socials</span></Nav.Link>
                            <Nav.Link href="/livestream"> <BsBroadcast /> <span>Live</span></Nav.Link>
                            <br />
                            <br /><br /><br /><br /><br /> <hr />
                            <div className="footer-nav-side">
                                <Nav.Link href="/u/wallet"><FaWallet /> <span>Wallet</span></Nav.Link>
                                <Nav.Link href="/u/settings"><BsGearWideConnected /> <span>Settings</span></Nav.Link>
                                <div className="icons-sidenav-footer">
                                    <Nav.Link href="#action2"><FaFacebookF /> </Nav.Link>
                                    <Nav.Link href="#action3"><FiTwitter /> </Nav.Link>
                                    <Nav.Link href="#action4"><BsFillChatLeftQuoteFill /> </Nav.Link>
                                </div>
                            </div>
                            <div className="">
                                <ThemeToggle />
                            </div>
                        </Nav>
                        {/* <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button type='search' variant="outline-success">Search</Button>
                        </Form> */}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </div>
  )
}
