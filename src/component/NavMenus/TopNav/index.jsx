import React from 'react'
import {Nav, FormControl, Container, Form } from 'react-bootstrap'
import { MdNotifications } from 'react-icons/md';
import LoadingButton from '../../LoadingButton';
import { FiSearch } from 'react-icons/fi'
import './topnav.scss'
import { Link } from 'react-router-dom';

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
                        <div className='top-notifications-icon'> <MdNotifications/> </div>
                        <Form className="d-flex search-box-container">
                            <span><FiSearch /></span>
                            <FormControl
                                type="search"
                                placeholder={` Search`}
                                className="me-2 search-box"
                                aria-label="Search"
                            />
                        </Form>
                    </div>
                    <LoadingButton className='btn-connect' color="danger" title='Connect'/>
                </Container>
    </div>
  )
}
