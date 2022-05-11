import React from 'react'
import Layout from '../../component/Layout'
import VideoPlayer from '../../component/VideoPlayer'
import GameVideo from '../../assets/videoclips/games.mp4'
import livegamecover from '../../assets/images/livegamecover.png'

import { BsFillPauseFill, BsFillPlayFill, BsVoicemail } from 'react-icons/bs'
import './livestream.scss'
import ProfileDetails from '../../component/ProfileDetails'

export default function Livescream() {
  return (
    <div className='livescream'>
      <Layout> 
        <div className="main"> 
          <div className="btn-live-container">
            <button className='btn-live'>Go Live</button>
          </div>
          <div className="live-video">
          <VideoPlayer source={GameVideo} coverImage={livegamecover} />
          </div>
          <div className="video-icons">
            <span className="video-icons-one" style={{color: 'white'}}> <BsFillPlayFill /></span>
            <span><BsFillPauseFill /></span>
            <span><BsVoicemail /></span>
          </div>
        </div>
        <div className="side-adverts" >
          {/* The left advert/chat/friends should be written here */}
          <ProfileDetails />
        </div>
      </Layout> 
    </div>
  )
}
