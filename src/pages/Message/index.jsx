import React from 'react'
import ChatsData from '../../component/Chats/chatsdata'
import Chats from '../../component/Chats'
import './message.scss'

export default function Message() {
  return (
    <div className='message-container'>
        <div className="chat-section">
            <span>Chats</span>
            <div className="chat-container">
            {ChatsData.map((chat, idx) => (
                <Chats 
                    key={idx}
                    title={chat.title}
                    body={chat.body}
                    image={chat.image}
                />
            ))}
            </div>
        </div>
    </div>
  )
}
