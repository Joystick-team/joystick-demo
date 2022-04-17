import React from 'react'
import GameVideo from '../../assets/videoclips/games.mp4'

export default function VideoPlayer() {
  return (
    <div style={{cursor: 'pointer'}}>
        <video width="272px" style={{borderRadius: '10PX'}} controls>
            <source src={GameVideo} />
            <source src="mov_bbb.ogg" type="video/ogg" />
        </video>
    </div>
  )
}