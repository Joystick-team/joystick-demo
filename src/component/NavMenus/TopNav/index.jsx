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
                <Container className='navbar '>
                  
                  
              
                    <Nav className="sm:navbar" 
                        // onSelect={(selectedKey) => alert(`selected = "${selectedKey}"`)} 
                        variant="pills"
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="/Leaderboard">Leaderboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/Rewards">Rewards</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/Staking">Staking</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="notice-search sm:notice-Search">
                        <div className='top-notifications-icon sm:top-notifications-icon '> <MdNotifications/> </div>
                        <Form className="d-flex form">
                            <span><FiSearch className='sm:search-icon'/></span>
                            <FormControl
                                type="search"
                                placeholder={` Search`}
                                className="me-2 search-box "
                                aria-label="Search"
                            />
                        </Form>
                    </div>
                    <span className='lg:searchicon' style={{display:'block'}}><FiSearch /></span>
                    <LoadingButton className='btn-connect sm:btn-connect' color="danger" title='Connect'/>
                  
                </Container>
            {/* </Navbar> */}
    </div>
  )
}
