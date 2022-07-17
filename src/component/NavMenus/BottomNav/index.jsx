import React from 'react'
import {Navbar, Container } from 'react-bootstrap'
import { MdLeaderboard } from 'react-icons/md'
import { BsStack } from 'react-icons/bs'
import { BiTrophy, BiMessageDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './bottomnav.scss'

export default function BottomNav() {
  return (
    <div className='bottom-nav' >
        <Navbar className='text-center bottom-nav-bg' bg="dark" variant="dark" fixed="bottom">
            <Container fluid className='bottom-nav-icons-holder'>
                <div className="bottom-nav-icons"><Link to="/leaderboard"><MdLeaderboard /><span>Leaderboard</span></Link> </div>
                <div className="bottom-nav-icons"><Link to="/rewards"><BiTrophy /></Link> <span>Rewards</span></div>
                <div className="bottom-nav-icons"><Link to="/staking"><BsStack /></Link> <span>Staking</span></div>
                <div className="bottom-nav-icons"><Link to='#'><BiMessageDetail /></Link> <span>Chats</span></div>
            </Container>
        </Navbar>
    </div>
  )
}
