import React from 'react'
import {Nav, FormControl, Container, Form } from 'react-bootstrap'
import { MdNotifications } from 'react-icons/md';
import LoadingButton from '../../LoadingButton';
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
                        {/* <Nav.Item>
                            <Nav.Link eventKey="Chats">Chats</Nav.Link>
                        </Nav.Item> */}

                        <Nav.Item>
                            <Nav.Link eventKey="Notifications"> <MdNotifications/> </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                    <LoadingButton color="danger" title='Connect'/>
                </Container>
            {/* </Navbar> */}
    </div>
  )
}
