import React from 'react'

export default function ChatBox({firstLoad}) {
  return (
    <div className="row" style={{display: firstLoad && "none"}}>
        <div className='offset-1 col-9'>
            <textarea rows={'2'} placeholder="Write something ..."
            className='form-control shadow-none'/>
        </div>
        <div className="col-2 align-self-center">
            <span>
            <i class="fas fa-paper-plane"></i>
            </span>
        </div>
    </div>
  )
}
