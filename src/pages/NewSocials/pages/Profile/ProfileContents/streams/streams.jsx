import React from 'react'
import stream1 from "../../../../../../assets/images/stream1.png"
import stream2 from "../../../../../../assets/images/stream2.png"
import stream3 from "../../../../../../assets/images/stream3.png"
import stream4 from "../../../../../../assets/images/stream4.png"
import "./streams.scss"
import {BsThreeDotsVertical} from "react-icons/bs"



const streams=[
  {
    img:stream1,
    views:"24.8k",
    name:"Rainbow Siege",
    streamer:"Ray Louis",
    date:"3 days Ago"
  
  },
  {
    img:stream2,
    views:"12.4k",
    name:"FIFA 23 FUT",
    streamer:"Ray Louis",
    date:"3 days Ago"
  
  },

  {
    img:stream2,
    views:"12.4k",
    name:"FIFA 23 FUT",
    streamer:"Ray Louis",
    date:"3 days Ago"
  
  },
  {
    img:stream3,
    views:"12.4k",
    name:"Call of Duty MW2",
    streamer:"Ray Louis",
    date:"2 week ago"

  },
  {

  }

]

export default function Streams() {

  return (
    <div className='profile-streams'>
         { streams.map((stream)=>{
             return(
                <div className='stream-item'>
                    <main className='stream-item-left'>
                      <img  src={stream.img} />
                      <div className='stream-info'>
                          <h5 className='stream-name'>{stream.name} </h5>
                          <h5 className='streamer-name'>{stream.streamer} </h5>
                          <h5 className='streamer-date'>{stream.date} </h5>
                      </div>

                    </main>
                     
                     <h5>
                       <BsThreeDotsVertical />

                     </h5>

                </div>
             )
         })

         }


    </div>
  )
}
