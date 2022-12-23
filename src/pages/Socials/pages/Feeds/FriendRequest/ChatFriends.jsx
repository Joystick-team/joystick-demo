import React from 'react'
import FriendrequestData from '../../../../../component/Chats/Friendrequest/FriendrequestData'

export default function ChatFriends() {
  return (
    <div>
         {FriendrequestData.map((friend, idx) =>{
                    return (
                        <div className='card'> 
                            <div className='card-body'>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <div className="d-flex flex-start align-items-center" key={friend.key}>
                                            <img className="rounded-circle shadow-1-strong me-3"
                                            src={friend.image}  alt="Profile-picture" width="40"
                                            height="60" /> 
                                            <div>
                                            <h6 className="fw-bold text-primary mb-1">{friend.title}</h6>
                                                <button className='btn btn-md btn-primary'>
                                                    View Profile
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-start mb-3">
                                            <span className='d-flex align-items-center me-3'>
                                                <button  className="btn btn-comment btn-sm mt-2 mb-4">
                                                    Ignore
                                                </button>
                                            </span>
                                            <span className='d-flex align-items-center me-3'>
                                                <button  className="btn btn-primary btn-sm mt-2 mb-4" >
                                                    <>Accept</> 
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
    </div>
  )
}
