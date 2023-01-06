import React from 'react'
import "./events.scss"
import {BsThreeDotsVertical} from "react-icons/bs"
export default function RecentEvents({events}) {
  return (
    <div className='events-main-div'>
         <main className='events-top'>
             <h5>Recent Event</h5>
             <BsThreeDotsVertical />
         </main>

          <div  className='events-mid'>
         {
            events.map((event)=>{

                return(
                    <div className='events'>
                        <main className='event-div'>
                            <img src={event.img}/>
                            <h5 >
                                <span className='event-title'>{event.title}</span>
                                <span className='event-descp'> {event.description}</span>
                            </h5>

                        </main>
                        <main className='event-seen'>
                            <h5>Seen</h5>
                            <h5></h5>
                        </main>
              
                    </div>
                )

            })
         }

            </div>
        

    </div>
  )
}
