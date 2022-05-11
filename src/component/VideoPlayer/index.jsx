import React from 'react'
import './videoplayer.scss'

export default function VideoPlayer(props) {
  return (
    <div className='videoplayer' style={{cursor: 'pointer'}}>
        <video style={{borderRadius: '10PX'}} poster={props.coverImage} controls>   
        {/* //change the poster to the appropriate image that should display before the video finish loading on the browser />' */}
            <source src={props.source} />
            <source src="mov_bbb.ogg" type="video/ogg" />
        </video>
    </div>
  )
}