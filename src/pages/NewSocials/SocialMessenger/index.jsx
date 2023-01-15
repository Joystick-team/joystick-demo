import React,{useState} from 'react'
import "./socialmessenger.scss"
import {SiGooglechat} from "react-icons/si"
import {TiArrowSortedUp,TiArrowSortedDown} from "react-icons/ti"



const Friend=({ chat})=>{

  return(
    <div className='chat-friend-div'>
       <img src={chat.img}/>
        
    </div>
  )

}

export default function SocialMessenger({chats}) {
  const [trigger,setTrigger]=useState(false)
  return (
    <div className='social-messenger-div'>
          { trigger?
            <div className="messages-div">
                <div className='messenger-header'>
                      <h5>Messages</h5>
                      <main className='messenger-header-left'>
                        <SiGooglechat />
                        <TiArrowSortedDown onClick={()=>setTrigger(false)}/>
                      </main>
                </div>
              
              <div className='chats-div'>
                {
                  chats.map((chat)=>{

                    return(
                     <Friend chat={chat} />
                    )
                  })
                }


              </div>
                
            </div>
         : 
         
      <div className='messenger-header'>
         <h5>Messages</h5>
          <main className='messenger-header-left'>
          <SiGooglechat />
          <TiArrowSortedUp onClick={()=>setTrigger(true)}/>

          </main>
       


      </div>
            
            }

    </div>
  )
}
