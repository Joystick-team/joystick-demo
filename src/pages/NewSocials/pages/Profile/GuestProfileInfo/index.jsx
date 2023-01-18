import React from 'react'
import "./guestprofile.scss"
import profileBg from "../../../../../assets/images/profileBg.jpeg"

import userPic from "../../../../../assets/images/creator4.png"





export default function GuestProfile() {
  return (

    <div className='guest-profileInfo'>
    <div className='guest-profile-bg-div'>
       <img src={profileBg} />
      </div> 
      
      <div className='guest-profile-details-div'>
          <button className='msg-btn'>
           Message
           </button>
          
          <main className='guest-profile--details-stats'>
              
              <h5>
                 <span className='text-num'>{"345"}</span>
                 <button className='profile-text'>Followers</button>
              </h5>

              <div className='user-pic-name'>
                   <img src={userPic} />
                   <h5 >
                       <span className='user-name'>{"Ray Louise"}</span>
                       <span className='user-role'>{"Product manager"}</span>
                   </h5>
                   <h5>

                   </h5>
              </div>
              <h5>
                 <span className='text-num'>{"345"}</span>
                 <button className='profile-text-following'>Following</button>
              </h5>
          </main>
           <button className='edit-btn'>
                   Update Profile
         </button>
         
      
      </div>




</div>
  )
}
