import React from 'react'
import "./videofeeds.scss"


export default function VideoFeeds({videofeeds}) {
  return (
    <div className='video-main-div'>
    <div className='vid-scroll-div'>
       {videofeeds.map((vid)=>{
         return(
            <div className='bg-img'>
                <img src={vid?.img}/>
                 <main>
                     
                 </main>
            </div>
         )

       })

       }
   
   </div>
</div>
  )
}
