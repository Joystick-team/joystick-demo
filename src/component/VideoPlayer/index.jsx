import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoPlayer(props) {
  return (
    <div className='videoplayer' style={{cursor: 'pointer'}}>
        <ReactPlayer 
          url={props.source} 
          controls 
          volume={1} 
          width={props.width} 
          light={props.coverpicture} 
          height={'100%'} 
          playIcon={'PlayBtn'} 
          playing={false}
          />
    </div>
  )
}