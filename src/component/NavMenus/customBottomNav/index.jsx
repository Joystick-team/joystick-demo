import React from 'react'
import {Container } from 'react-bootstrap'
import { MdLeaderboard } from 'react-icons/md'
import { BsStack } from 'react-icons/bs'
import { BiTrophy, BiMessageDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './customBottomNav.scss'

 const CustomBottomNav=() =>{
    return (
        <div className='bottom-nav' >
           <div>
            <Container fluid>
            <div className="flex-item-row ">
              <div className="bottom-icons"><Link to='#'><MdLeaderboard className=''/></Link> <span className="span-text">Leaderboard</span></div>
                    <div className="bottom-icons"><Link to='#'><BiTrophy /></Link> <span className="span-text">Rewards</span></div>
                    <div className="bottom-icons"><Link to='#'><BsStack /></Link> <span className="span-text">Staking</span></div>
                    <div className="bottom-icons"><Link to='#'><BiMessageDetail /></Link> <span className="span-text">Chats</span></div>
             </div>
           </Container>
           </div>
        </div>
      )
}
export default CustomBottomNav