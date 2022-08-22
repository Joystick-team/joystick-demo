import React, { useState } from 'react'
import {Nav,Container } from 'react-bootstrap'
import ConnectButton from '../../ConnectButton';
import { Link, useLocation } from 'react-router-dom';
import SearchBox from '../../SearchBox';
import { FaUserAlt } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import JOYSTICK2 from '../../../assets/images/JOYSTICK-light.png'

import './topnav.scss'
import ModalEffect from '../../Modal';
import Auth from '../../../pages/Auth';
import SelectDropDown from '../../SelectDropDown';
import { useTheme } from '../../../ThemeContext';

export default function TopNav() {
    // eslint-disable-next-line
    const [show, setShow] = useTheme()
    const {pathname} = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const options = ['Login', 'Sign Up']
    const [isRegister, setIsRegister] = useState(false)
    
    const toggleRegister = () => {
        setIsOpen(!isOpen);
    }

    const checkRegister = () => {
        setIsRegister(!isRegister)
    }

    let handleChange = (options) => {
        if(options === 'Login') { 
            setIsOpen(true);
            setIsRegister(true)
        } else if(options === 'Sign Up') {
            setIsOpen(true);
            setIsRegister(false)
        }else{
            // setCurrentValue(`Game Option ${options}`) 
        }
    }

  return (
    <div className='top-nav'>
                <Container className='navbar'>
                    <div className="logo-title">
                        <Link to={'/'} >
                            <picture>
                                <source srcSet={JOYSTICK}  width={'80px'} height={`auto`} media={`(prefers-color-scheme: ${show})`}/>
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
                                <Auth isRegister={isRegister} checkRegister={checkRegister} />
                            </div>
                        </ModalEffect>
                        <div className="user-reg-icons">
                            <abbr title="User login">
                                <SelectDropDown options={options} 
                                    placeholder={<FaUserAlt />}
                                    label={<FaUserAlt />}
                                    onChange={handleChange}
                                /> 
                            </abbr>
                        </div>
                    </div>
                    <ConnectButton className='btn-connect' color="danger" title='Connect'/>
                </Container>
    </div>
  )
}
