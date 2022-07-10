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
import { useLocation } from "react-router-dom";

export default function DrawalNav({TogglecloseOpen}) {
    const [open, setOpen] = useState(true);

    const {pathname} = useLocation();

    console.log(pathname);
    return (
      <div className="" style={{position: 'relative'}}>
        <div className="side-nav">
          <div className="logo-title">
            <img loading='lazy' src={JOYSTICK} alt="JOYSTICK-logo" />
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
                      <Nav.Link href="/"> <FaHome /> <span>Home</span></Nav.Link>
                      <Nav.Link href="/store"> <BsDropletFill /> <span>Store</span></Nav.Link>
                      <Nav.Link href="/library"> <BsGridFill/> <span>Library</span></Nav.Link>
                      <Nav.Link href="/socials"> <BsFillPeopleFill /> <span>Socials</span></Nav.Link>
                      <Nav.Link href="/livestream"> <BsBroadcast /> <span>Live</span></Nav.Link>
                    </div>

                      <hr />
                      <div className="footer-nav-sids">
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

              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }