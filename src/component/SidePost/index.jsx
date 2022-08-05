import React from 'react'
import VideoPlayer from '../VideoPlayer'
import qualityStar from '../../assets/images/quality.png'
import CarGameVideo from '../../assets/videoclips/BirdVideo.mp4'
import './sideadvert.scss'
import ProfileDetails from '../ProfileDetails'
import Message from '../ContentTab/Message'

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
      <Message />
    </div>
  )
}
