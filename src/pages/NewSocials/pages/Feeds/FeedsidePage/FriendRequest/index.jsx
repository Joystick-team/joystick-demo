import React from 'react'
import "./friendsrequest.scss"
import {BiChevronDown} from "react-icons/bi"
import {MdCancel} from "react-icons/md"
import {BsFillCheckCircleFill} from "react-icons/bs"
import SocialMessenger from '../../../../SocialMessenger'



export default function FriendRequest({friends,chats}) {
  return (
    <div className='friendrequest-div'>

      <main className='friendrewuest-div-top'>
                  <h5>
                      Friend Requests
                  </h5>
                  <h5 >
                    <span> View All</span> 

                      <BiChevronDown />
                  </h5>
        </main>

        <main className='friends-main'> 
          {friends.map((friend)=>{
            return(
              <div className='friend-item'>
                  <main className='friend-detail'>
                    <img src={friend.img} />
                    <div className='friend-detail-left'>
                      <span>{friend.name}</span>
                      <button>View Profile</button>

                    </div>
                  </main>
                  <main className='friend-accept-reject'>
                    <h5>
                      <MdCancel />
                      <span>Ignore</span>
                    </h5>

                    <h5>
                      <BsFillCheckCircleFill style={{color:"green"}}/>
                      <span>Accept</span>
                    </h5>
                    
                 </main>

              </div>
            )
          })

          }

        </main>

      <SocialMessenger  chats={chats}/>
        
    </div>
  )
}
