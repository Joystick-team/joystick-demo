import React from 'react'
import userAvarta from '../../assets/images/userAvarta.png'
import { format } from 'timeago.js'
export default function Message({c}) {
    
  return (
    <div className='row'>
        <div className="col-md-12 mb-2 ">
            <div className="row">
                {c.sender !== localStorage.getItem('user_id') ?
                    <>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle shadow-1-strong me-3"
                                src={userAvarta}  alt="Profile-picture" width="40"
                                height="43" /> 
                                <div>
                                <p className='message-box align-self-center'>{c.content}</p>
                                </div>
                            </div>
                            <p className="d-flex flex-start message-bottom">{format(c.created_at)}</p>
                        </div>
                        <div className="col-6 ">

                        </div>
                    </>
                    :
                    <div className="offset-6 col-6 ">
                        <div className="d-flex align-items-center text-right">
                            <img className="rounded-circle shadow-1-strong me-3"
                            src={userAvarta}  alt="Profile-picture" width="40"
                            height="43" /> 
                            <div>
                            <p className='message-box align-self-center'>{c.content}</p>
                            </div>
                        </div>
                        <p className="d-flex flex-start message-bottom">{format(c.created_at)}</p>
                    </div>
                }
            </div>
           
        </div>
       
    </div>
  )
}
