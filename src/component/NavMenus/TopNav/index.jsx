import React, { useEffect, useState } from 'react'
import {Nav,Container } from 'react-bootstrap'
import LoadingButton from '../../LoadingButton';
import './topnav.scss'
import { Link } from 'react-router-dom';
import SearchBox from '../../SearchBox';
import { MdNotifications } from 'react-icons/md';
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import JOYSTICK2 from '../../../assets/images/JOYSTICK-light.png'

export default function TopNav() {
    let [themeData, setThemeData] = useState(localStorage.getItem('theme-dark'))
    
    useEffect(() => {
          setThemeData(localStorage.getItem('theme-dark'))
          console.log('mike');
    }, [])
  return (
    <div className='top-nav'>
                <Container className='navbar'>
                <div className="logo-title">
                            <picture>
                            <source srcSet={JOYSTICK}  media={`(prefers-color-scheme: ${themeData})`}/>
                            <img src={JOYSTICK2} alt="JOYSTICK-logo" />
                            </picture>
                        </div>
                    <Nav   
                        variant="pills"
                    >
                        <div className="top-nav-list">
                            <ul>
                                <li><Link to="/leaderboard">Leaderboard</Link></li>
                                <li><Link to="/rewards">Rewards</Link></li>
                                <li><Link to="/staking">Staking</Link></li>
                            </ul>
                        </div>
                    </Nav>
                    <div className="notice-search">
                        <div className='top-notifications-icon'> <MdNotifications /> </div>
                        <SearchBox />
                    </div>
                    <LoadingButton className='btn-connect' color="danger" title='Connect'/>
                </Container>
    </div>
  )
}
