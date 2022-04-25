import React from 'react'
import {Nav, FormControl, Container, Form } from 'react-bootstrap'
import { MdNotifications } from 'react-icons/md';
import LoadingButton from '../../LoadingButton';
import { FiSearch } from 'react-icons/fi'
import './topnav.scss'

export default function TopNav() {
  return (
    <div className='top-nav'>
            {/* <div classname=''> */}
                <Container className='navbar'>
                    <Nav   
                        // onSelect={(selectedKey) => alert(`selected = "${selectedKey}"`)} 
                        variant="pills"
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="Leaderboard">Leaderboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Rewards">Rewards</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Staking">Staking</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="notice-search">
                        <div className='top-notifications-icon'> <MdNotifications/> </div>
                        <Form className="d-flex">
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
            {/* </Navbar> */}
    </div>
  )
}
