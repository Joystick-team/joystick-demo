import React, { useEffect, useState } from 'react'
import { Nav, Container } from 'react-bootstrap'
import LoadingButton from '../../LoadingButton';
import { Link, useLocation } from 'react-router-dom';
import SearchBox from '../../SearchBox';
import { FaUserAlt } from 'react-icons/fa';
import { MdNotifications, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import JOYSTICK2 from '../../../assets/images/JOYSTICK-light.png'

import './topnav.scss'
import ModalEffect from '../../Modal';
import Auth from '../../../pages/Auth';
export default function TopNav() {
    let [themeData, setThemeData] = useState(localStorage.getItem('theme-dark'))
    const {pathname} = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    // const closeRegister = () => {
    //     setIsOpen(false);
    // }
    
    const toggleRegister = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
          setThemeData(localStorage.getItem('theme-dark'))
    }, [])
    
  return (
    <div className='top-nav'>
                <Container className='navbar'>
                    <div className="logo-title">
                        <Link to={'/'} >
                            <picture>
                                <source srcSet={JOYSTICK}  width={'80px'} height={`auto`} media={`(prefers-color-scheme: ${themeData})`}/>
                                <img src={JOYSTICK2} width={'80px'} height={`auto`} alt="JOYSTICK-logo" />
                            </picture>
                        </Link>
                    </div>
                    <Nav   
                        variant="pills"
                    >
                        <div className="top-nav-list">
                            <ul>
                                <li><Link to="/leaderboard" className={`${pathname === '/leaderboard'  && 'active'}`}>Leaderboard</Link></li>
                                <li><Link to="/rewards" className={`${pathname === '/rewards'  && 'active'}`}>Rewards</Link></li>
                                <li><Link to="/staking" className={`${pathname === '/staking'  && 'active'}`}>Staking</Link></li>
                            </ul>
                        </div>
                    </Nav>
                    <div className="notice-search">
                        <abbr title="notifications">
                            <div className='top-notifications-icon'> <MdNotifications /> </div>
                        </abbr>
                        <SearchBox />
                    </div>
                    <div className="user-reg" style={{cursor: 'pointer'}}>
                        <ModalEffect show={isOpen} closeModal={toggleRegister}>
                            <div className="">
                                <Auth />
                            </div>
                        </ModalEffect>
                        <div className="user-reg-icons" onClick={toggleRegister}>
                            <abbr title="User login">
                                <FaUserAlt /> 
                                <MdOutlineKeyboardArrowDown />
                            </abbr>
                        </div>
                    </div>
                    <LoadingButton className='btn-connect' color="danger" title='Connect'/>
                </Container>
    </div>
  )
}
