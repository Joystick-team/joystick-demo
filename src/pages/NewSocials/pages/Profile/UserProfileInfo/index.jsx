import React from 'react'
import profileBg from "../../../../../assets/images/profileBg.jpeg"
import "./profileinfo.scss"
import userPic from "../../../../../assets/images/creator4.png"

export default function ProfileInfo({profile}) {
   console.log(profile,"profile")

   const updateProfile=()=>{
      
   }


  return (
    <div className='profileInfo'>
         <div className='profile-bg-div'>
            <img src={profileBg} />
           </div> 
           
           <div className='profile-details-div'>
               
               <main className='profile--details-stats'>
                   
                   <h5>
                      <span className='text-num'>{profile?.followers}</span>
                      <span className='profile-text'>Followers</span>
                   </h5>

                   <div className='user-pic-name'>
                        <img src={userPic} />
                        <h5 >
                            <span className='user-name'>{profile?.first_name===null?profile?.username: profile?.first_name+ " " +profile?.last_name?"": profile?.last_name}</span>
                            <span className='user-role'>{profile?.roles[0]}</span>
                        </h5>
                        <h5>

                        </h5>
                   </div>
                   <h5>
                      <span className='text-num'>{profile?.following}</span>
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
