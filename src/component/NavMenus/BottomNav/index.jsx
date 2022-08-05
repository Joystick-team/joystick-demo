import React from 'react'
import {Navbar, Container } from 'react-bootstrap'
import { MdLeaderboard } from 'react-icons/md'
import { BsStack } from 'react-icons/bs'
import { BiTrophy, BiMessageDetail } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import './bottomnav.scss'

export default function BottomNav() {
  const {pathname} = useLocation()

  return (
    <div className='bottom-nav' >
        <Navbar className='text-center bottom-nav-bg' bg="dark" variant="dark" fixed="bottom">
            <Container fluid className='bottom-nav-icons-holder'>
                <div className="bottom-nav-icons"><Link to="/leaderboard" className={`${pathname === '/leaderboard' && 'active' }`}><MdLeaderboard /><span>Leaderboard</span></Link> </div>
                <div className="bottom-nav-icons"><Link to="/rewards" className={`${pathname === '/rewards'  && 'active'}`}><BiTrophy /><span>Rewards</span></Link></div>
                <div className="bottom-nav-icons"><Link to="/staking" className={`${pathname === '/staking' && 'active' }`}><BsStack /><span>Staking</span></Link> </div>
                <div className="bottom-nav-icons"><Link to="/message" className={`${pathname === '/message' && 'active' }`} ><BiMessageDetail /> <span>Chat</span></Link></div>
            </Container>
        </Navbar>
    </div>
  )
}
