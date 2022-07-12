import React from 'react'
import {BiDotsVertical} from 'react-icons/bi';

export default function Chats(props) {
  return (
    <div>
        <div className="chat-details">
            <div className="chat-profile">
            <img loading='lazy' style={{cursor: 'pointer'}} src={props.image} alt="chat-Avarta" />
            <div className="chatdetails" style={{cursor: 'pointer'}}>
                <p className="profile-chat-title" >{props.title}</p>
                <p style={{marginTop: '-1rem'}}>{props.body}</p>
            </div>
            </div>
        <div className="chat-option-icon" style={{cursor: 'pointer'}}>
          <BiDotsVertical />
        </div>
      </div>
    </div>
  )
}
