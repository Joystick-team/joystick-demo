import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoPlayer(props) {
  return (
    <div className='videoplayer' style={{cursor: 'pointer'}}>
        {/* <video style={{borderRadius: '10PX'}} poster={props.coverImage} controls>    */}
        {/* //change the poster to the appropriate image that should display before the video finish loading on the browser />' */}
            {/* <source src={props.source} />
            <source src="mov_bbb.ogg" type="video/ogg" />
        </video> */}
        <ReactPlayer 
          url={props.source} 
          controls 
          volume={1} 
          width={props.width} 
          light={props.coverpicture} 
          height={'100%'} 
          playIcon={'PlayBtn'} 
          playing={true}
          />
    </div>
  )
}

// export default function VideoPlayer(props) {
//     // Lazy load the YouTube player
//   return <ReactPlayer url={props.source} controls/>
// }

// export default ReactVideoPlayer