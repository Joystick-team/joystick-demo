import React from 'react'
import VideoPlayer from '../VideoPlayer'
import userAvarta from '../../assets/images/userAvarta.png'
import qualityStar from '../../assets/images/quality.png'
import {GoPrimitiveDot} from 'react-icons/go'
import ChatsData from '../Chats/chatsdata'

import './sideadvert.scss'
import Chats from '../Chats'

export default function SidePost() {
  return (
    <div className="side-advert">

        <div className="profile">
          <img style={{cursor: 'pointer'}} src={userAvarta} alt="user-Avarta" />
          <div className="personaldetails">
            <p>Hello Dimgba!</p>
            <p style={{marginTop: '-1rem'}}><span> <GoPrimitiveDot /> </span> Online</p>
          </div>
        </div>

        <br />
        <div className="winner-post">
          Post       
          <div className="winner-post-card">
          <img src={qualityStar} alt="" />
          <p>Winner of the week's tournament</p>
        </div>
        </div>
      <br />
      <VideoPlayer />
      <br />
      <div className="">
        Chats
        <div className="chat-container">
          {ChatsData.map((chat, idx) => (
              <Chats 
                key={chat.idx}
                title={chat.title}
                body={chat.body}
                image={chat.image}
              />
          ))}
        </div>
      </div>
    </div>
  )
}
