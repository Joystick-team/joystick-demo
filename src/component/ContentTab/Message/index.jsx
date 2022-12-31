import React from 'react'
import ChatsData from '../../Chats/chatsdata'
import Chats from '../../Chats'
import '../message.scss'

export default function Message() {
  const messages = ChatsData.map((chat, idx) => (
            <Chats 
                key={idx}
                title={chat.name}
                body={chat.body}
                image={chat.image}
            />
          ))
  return (
      <div className='message-container'>
        <div className="chat-section">
            <span>Chats</span>
            <div className="chat-container">
              {messages}
            </div>
          </div>
        </div>
  )
}
