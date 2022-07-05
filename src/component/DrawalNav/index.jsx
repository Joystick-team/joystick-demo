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

    console.log(pathname);
    return (
      <div className="" style={{position: 'relative'}}>
        <div className="side-nav">
          <div className="logo-title">
            <img src={JOYSTICK} alt="JOYSTICK-logo" />
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
                  <Nav className=" flex-column" variant="tabs" defaultActiveKey="/">
                    <div className="footer-nav">
                      <Link to="/" className="active" activeKey="/"> <FaHome /> <span>Home</span></Link>
                      <Link to="/store"> <BsDropletFill /> <span>Store</span></Link>
                      <Link to="/library"> <BsGridFill/> <span>Library</span></Link>
                      <Link to="/socials"> <BsFillPeopleFill /> <span>Socials</span></Link>
                      <Link to="/livestream"> <BsBroadcast /> <span>Live</span></Link>
                    </div>

                      <hr />
                      <div className="footer-nav-sids">
                        <Link to="/u/wallet"><FaWallet /> <span>Wallet</span></Link>
                        <Link to="/u/settings"><BsGearWideConnected /> <span>Settings</span></Link>
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