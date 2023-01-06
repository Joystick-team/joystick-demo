import React from 'react'
import "./birthdays.scss"
import {AiOutlineSend} from "react-icons/ai"
import {RiGift2Fill} from "react-icons/ri"



export default function Birthdays({img,name}) {
  return (
    <div className='birthdays-main-div'>
          <main className='birthdays-div-top'>
            <h5>
                Birthdays
            </h5>
            <h5 style={{color:"red"}}>
                See All
            </h5>
        </main>

        <main className='birthday-mid'>
             <div  className='birthday-today'>
                 <main className='birthday-person'>
                    <img  src={img}/>
                    <h5>
                        <span className="person-title">{name}</span>
                        <span className="birthday-descp">Birthday today</span>
                    </h5>
                 </main>

                 <main className='write-inbox'>
                     <textarea 
                       placeholder="Write to inbox"
                       className='box-text'
                     />
                     <h5>
                        <AiOutlineSend style={{color:"red"}} />
                     </h5>
                 </main>
                 <main></main>
             </div>
        </main>

        <main className='birthday-upcoming'>
                    <h5 className='gift-img'>

                      <RiGift2Fill style={{color:"red"}}/>
                    </h5>
                  
                    <h5>
                        <span className="upcoming-title">Upcoming Birthdays</span>
                        <span className="upcoming-descp">See 16 others  who have upcoming
Birthdays and wish them</span>
                    </h5>
        </main>

    </div>
  )
}
