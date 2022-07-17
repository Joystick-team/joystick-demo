import React from 'react'
import {Nav,Container } from 'react-bootstrap'
import LoadingButton from '../../LoadingButton';
import './topnav.scss'
import { Link } from 'react-router-dom';
import SearchBox from '../../SearchBox';
import { MdNotifications } from 'react-icons/md';

export default function TopNav() {
  return (
    <div className='top-nav'>
                <Container className='navbar'>
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
