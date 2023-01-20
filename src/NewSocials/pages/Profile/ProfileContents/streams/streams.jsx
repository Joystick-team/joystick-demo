import React, { useEffect, useState } from 'react'
import stream1 from "../../../../../../assets/images/stream1.png"
import stream2 from "../../../../../../assets/images/stream2.png"
import stream3 from "../../../../../../assets/images/stream3.png"
import stream4 from "../../../../../../assets/images/stream4.png"
import "./streams.scss"
import {BsThreeDotsVertical} from "react-icons/bs"
import axios from 'axios'
import  { default as api } from '../../../../../../config/config.json'
import { format } from 'timeago.js'



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
  const [history, setHistory] = useState([])
  
  const getUserHistory = async()=>{
    const token = JSON.parse(localStorage.getItem('userToken')).access_token
    try {
      var config = {
        method: 'get',
        url: `${api.url}/room/livestream/user/history`,
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios(config)
      setHistory(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUserHistory()
  }, [])

  return (
    <div className='profile-streams'>
      {history.length > 0 ?
        <>
          { history.map((stream)=>{
              return(
                <div className='row stream-item mb-3' key={stream.id}>
                    <div className="col-5">
                      <div className="card" >
                        <img className="card-img-top img-view" src={stream.thumbnail} alt="thumbnail"/>
                        <div className="card-img-overlay pl-0 pt-1">
                              <span className='count-tag ml-0'>
                                  <span className='ml-1 mr-2'><img src={'/assets/images/Vector-eye.png'}
                                      height={10} 
                                      alt='vector'/> 
                                  </span>
                                  {stream.room_members === null ? 0 : stream.room_members.length}
                              </span>
                          </div>
                      </div>
                    </div>
                    <div className="col-5 align-self-center">
                          <h6 className='stream-name'>{stream.room_name} </h6>
                          <h6 className='streamer-name'>{stream.user.fist_name ?  
                          <>{stream.user.first_name} {stream.user.last_name}</> : stream.user.username } </h6>
                          <h6 className='streamer-date'>{format(stream.created_at)} </h6>
                    </div>
                    <div className="col-2 text-right">
                      <BsThreeDotsVertical />
                    </div>
                </div>
              )
          })

          }
        
        </> :
        (
          <>
            { streams?.map((stream)=>{
                return(
                  <div className='stream-item' key={stream.id}>
                      <main className='stream-item-left'>
                        <img  src={stream.img} />
                        <div className='stream-info'>
                            <h5 className='stream-name'>{stream.room_name} </h5>
                            <h5 className='streamer-name'>{stream.streamer} </h5>
                            <h5 className='streamer-date'>{format(stream.date)} </h5>
                        </div>

                      </main>
                        
                       <h5>
                         <BsThreeDotsVertical />
                       </h5>

                  </div>
                  
                )
            })
          }
          </>
        )
      }


    </div>
  )
}
