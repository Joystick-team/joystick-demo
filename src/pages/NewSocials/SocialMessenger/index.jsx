import React,{useState} from 'react'
import "./socialmessenger.scss"
import {SiGooglechat} from "react-icons/si"
import {TiArrowSortedUp,TiArrowSortedDown} from "react-icons/ti"



const Friend=({ chat})=>{

  return(
    <div className='chat-friend-div'>

       <img src={chat.img}/>
       <main className='chat-detail'>
         <h5>
           <span className='chat-name'>{chat.name}</span>
           <span className='chat-msg'>{"wow,thanks"}</span>
         </h5>
         <h5>
           <span className='chat-date'>{"Sat 24"}</span>
           <span className='chat-count'>{"1"}</span>

         </h5>
       </main>
        
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
