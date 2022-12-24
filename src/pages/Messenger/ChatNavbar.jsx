import React from 'react'
import userAvarta from '../../assets/images/userAvarta.png'
export default function ChatNavbar({avatar, firstName, lastName}) {
  return (
    <header>
        <div className="row">
            <div className="col-12 p-2">
            <div className="ml-3 d-flex flex-start align-items-center">
                <img className="rounded-circle shadow-1-strong me-3"
                src={avatar ? avatar : userAvarta}  alt="Profile-picture" width="40"
                height="40" /> 
                <div>
                <h6 className="fw-bold align-self-center">{firstName} {lastName} </h6>
                    {/* <button className='btn btn-md btn-primary'>
                        View Profile
                    </button> */}
                </div>
            </div>
            </div>
        </div>
    </header>
  )
}
