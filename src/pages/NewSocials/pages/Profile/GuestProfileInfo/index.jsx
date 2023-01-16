import React from 'react'
import "./guestprofile.scss"

export default function GuestProfile() {
  return (

    <div className='guest-profileInfo'>
    <div className='guest-profile-bg-div'>
       <img src={profileBg} />
      </div> 
      
      <div className='guest-profile-details-div'>
          
          <main className='guest-profile--details-stats'>
              
              <h5>
                 <span className='text-num'>{"345"}</span>
                 <span className='profile-text'>Followers</span>
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
                 <span className='profile-text'>Following</span>
              </h5>
          </main>
              
           <button className='edit-btn'>
              Update Profile
           </button>
      
      </div>




</div>
  )
}
