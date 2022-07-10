import React from 'react'

export default function Posts(props) {
  return (
    <div className="post-card" style={{position: 'relative'}}> 
        <img loading='lazy' src={props.img} className='bg-img' alt=""/>
        <div className="content-body" style={{position: 'absolute', top: '60%'}}>
            <div className="content-head-h6">{props.name}</div>
            <small>{props.content}</small>
        </div>
        <div className="post-card-icons">
        <span>{props.likeicon} {props.likescount}</span>
        <span> {props.dislikeicon} {props.dislikescount}</span>
        <span>{props.messageicon}</span>
        <span>{props.shareicon}</span>  
        </div>
    </div>
  )
}
