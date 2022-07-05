import React from 'react'
import VideoPlayer from '../../component/VideoPlayer'
// import GameVideo from '../../assets/videoclips/games.mp4'
import GameVideo from '../../assets/videoclips/BirdVideo.mp4'
// import GameVideo from '../../assets/videoclips/car.mp4'
import livegamecover from '../../assets/images/livegamecover.png'
// import { ReactVideoPlayer } from '../../component/VideoPlayer'

import { BsFillPauseFill, BsFillPlayFill, BsVoicemail } from 'react-icons/bs'
import './livestream.scss'
import ProfileDetails from '../../component/ProfileDetails'

export default function Livescream() {
  return (
    <div className='livescream'>
      {/* <Layout>  */}
        <div className="main"> 
          <div className="btn-live-container">
            <button className='btn-live'>Go Live</button>
          </div>
          <div className="live-video">
          {/* <VideoPlayer source={GameVideo} coverImage={livegamecover} /> */}
          <VideoPlayer source={GameVideo} width={'100%'} coverpicture={livegamecover} />
          </div>
          <div className="video-icons">
            <span className="video-icons-one" style={{color: 'white'}}> <BsFillPlayFill /></span>
            <span><BsFillPauseFill /></span>
            <span><BsVoicemail /></span>
          </div>
        </div>
        <div className="side-adverts" >
        <ProfileDetails />
          The left advert/chat/friends should be written here <br />
          The left advert/chat/friends should be written here <br />
          The left advert/chat/friends should be written here <br />
          
        </div>
      {/* </Layout>  */}
    </div>
  )
}
