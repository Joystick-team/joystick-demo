import { useState } from "react";
import { Collapse, Nav } from "react-bootstrap";
import {BiMenu} from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { BsBroadcast, BsDropletFill, BsFillChatLeftQuoteFill, BsFillPeopleFill, BsGearWideConnected, BsGridFill } from "react-icons/bs";
import { FaFacebookF, FaHome, FaWallet } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import JOYSTICK from '../../assets/images/JOYSTICK-logo.png'
import './exampls.scss'

export default function Example() {
    const [open, setOpen] = useState(true);
  
    return (
      <div className="" style={{position: 'relative'}}>
        <div className="side-nav">
          <div className="logo-title">
            <img src={JOYSTICK} alt="JOYSTICK-logo" />
          </div>
          <p
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className='side-nav-burger'
          >
            {!open ? <BiMenu /> : <MdClose />}
          </p>
          <div>
            <Collapse in={open} dimension="width">
              <div>
                  <Nav className=" flex-column" variant="tabs" defaultActiveKey="#/">
                    <div className="footer-nav">
                      <Nav.Link activeKey="#/" href="#/"> <FaHome /> <span>Home</span></Nav.Link>
                      <Nav.Link href="#/store"> <BsDropletFill /> <span>Store</span></Nav.Link>
                      <Nav.Link href="#/library"> <BsGridFill/> <span>Library</span></Nav.Link>
                      <Nav.Link href="#/socials"> <BsFillPeopleFill /> <span>Socials</span></Nav.Link>
                      <Nav.Link href="#/live"> <BsBroadcast /> <span>Live</span></Nav.Link>
                    </div>

                      <hr />
                      <div className="footer-nav-sids">
                        <Nav.Link href="#wallet"><FaWallet /> <span>Wallet</span></Nav.Link>
                        <Nav.Link href="#settings"><BsGearWideConnected /> <span>Settings</span></Nav.Link>
                        <div className="icons-sidenav-footer">
                            <Nav.Link href="#action2"><FaFacebookF /> </Nav.Link>
                            <Nav.Link href="#action3"><FiTwitter /> </Nav.Link>
                            <Nav.Link href="#action4"><BsFillChatLeftQuoteFill /> </Nav.Link>
                        </div>

                      </div>

                  </Nav>

              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }