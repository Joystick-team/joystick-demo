import { useState } from 'react'
import { Collapse, Nav } from 'react-bootstrap'
import { BiMenu } from 'react-icons/bi'
import { useSearchParams } from "react-router-dom";
import {
  BsBroadcast,
  BsDropletFill,
  BsFillChatLeftQuoteFill,
  BsFillPeopleFill,
  BsGearWideConnected,
  BsGridFill,
} from 'react-icons/bs'
import { FaHome, FaTelegram, FaWallet } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { useSelector} from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import JOYSTICK2 from '../../../assets/images/JOYSTICK-light.png'
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import { useTheme } from '../../../ThemeContext'
import ThemeToggle from '../../ThemeToggle'
import './drawalNav.scss'

export default function DrawerNav({ TogglecloseOpen }) {
  
  console.log("location", window.location.href.endsWith("/"))
  const isLandingPage = window.location.href.endsWith("/")
 
  const [open, setOpen] = useState(true)
  // const {profile_data} = useSelector(state=>state.profile)
  const { userToken } = useSelector(state => state.signin)
  // eslint-disable-next-line
  const [themeDetector, setThemeDetector] = useTheme()
  return (
    <div className={`${open ? 'drawer__nav' : 'empty__image'} `}>
      <div className='drawer-nav'>
        <div
          className={`${
            open ? 'drawer__image-continer' : 'drawer__image__none'
          }`}
        >
          {open && (
            <Link className={'no__link'} to='/'>
              {/* <picture>
                        <source srcSet={JOYSTICK2} width={'80px'} height={`auto`} media={`(prefers-color-scheme: ${themeDetector})`}/>
                        <img loading='lazy' src={JOYSTICK} alt="JOYSTICK-logo" width='100px' height='60px' />
                    </picture> */}

              {themeDetector === 'light' || themeDetector === null ? (
                <img
                  src="/assets/images/newLogo.png"
                  alt='JOYSTICK-logo'
                />
              ) : (
                <img
                  src="/assets/images/newLogo.png"
                  alt='JOYSTICK-logo'
                />
              )}
            </Link>
          )}
        </div>
        <p
          onClick={() => setOpen(!open)}
          // onClick={TogglecloseOpen}
          aria-controls='DrawerNav-collapse-text'
          aria-expanded={open}
          className='drawer__nav__burger'
        >
          {!open ? <BiMenu /> : <MdClose />}
        </p>
        <div>
          <Collapse in={open} dimension='width'>
            <div>
              <Nav className=' flex-column' variant='tabs'>
                <div className='drawer__nav-slide'>
                  {userToken?.access_token&&<NavLink to='/home'>
                      {' '}
                      <FaHome /> <span>Home</span>
                    </NavLink>
                  }
                  {userToken?.access_token&&(
                    <NavLink to='/store'>
                      {' '}
                      <BsDropletFill /> <span>Store</span>
                    </NavLink>
                  )}
                 {userToken?.access_token&&<NavLink to='/library'>
                      {' '}
                      <BsGridFill /> <span>Library</span>
                    </NavLink>
                  }
                  {userToken?.access_token&&<NavLink to='/socials'>
                      {' '}
                      <BsFillPeopleFill /> <span>Socials</span>
                    </NavLink>
                  }
                 {userToken?.access_token&&<NavLink to='/livestream'>
                      {' '}
                      <BsBroadcast /> <span>Live</span>
                    </NavLink>
                  }
                </div>

                {/* <hr /> */}
                <div className='drawer_down_nav-sids'>
                  {userToken?.access_token && (
                    <NavLink to='/u/wallet'>
                      <FaWallet /> <span>Wallet</span>
                    </NavLink>
                  )}
                  {userToken?.access_token&&<NavLink to='/u/settings'>
                      <BsGearWideConnected /> <span>Settings</span>
                    </NavLink>
                  }
                  {/* <div className='icons-drawer_nav-footer'>
                    <Nav.Link href='#' target='_blank'>
                      <FaTelegram />{' '}
                    </Nav.Link>
                    <Nav.Link
                      href='https://twitter.com/Joystick_labs?t=tJCfTkFcbIJ4KqJY0Ak4EQ&s=09'
                      target='_blank'
                    >
                      <FiTwitter />{' '}
                    </Nav.Link>
                    <NavLink to='/message'>
                      <BsFillChatLeftQuoteFill />{' '}
                    </NavLink>
                  </div> */}
                  <ThemeToggle />
                </div>
              </Nav>
            </div>
          </Collapse>
        </div>
      </div>
    </div >
  )
}
