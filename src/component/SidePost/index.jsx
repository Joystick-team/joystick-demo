import React from 'react'
import VideoPlayer from '../VideoPlayer'
import qualityStar from '../../assets/images/quality.png'
import CarGameVideo from '../../assets/videoclips/BirdVideo.mp4'
import ChatsData from '../Chats/chatsdata'

import './sideadvert.scss'
import Chats from '../Chats'
import ProfileDetails from '../ProfileDetails'

export default function SidePost() {
  return (
    <div className="side-advert">
      <ProfileDetails />
        <br />
        <div className="winner-post">
          <span>Post</span>    
          <div className="winner-post-card">
            <img loading='lazy' src={qualityStar} alt="" />
            <p>Winner of the week's tournament</p>
          </div>
        </div>
      <br />
        <VideoPlayer source={CarGameVideo} width={300}/>
      <br />
      <div className="chat-section">
        <span>Chats</span>
        <div className="chat-container">
          {ChatsData.map((chat, idx) => (
              <Chats 
                key={idx}
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
