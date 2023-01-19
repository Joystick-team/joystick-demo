import React from 'react'
import "./profile.scss"
import ProfileInfo from './UserProfileInfo'
import ProfileContents from './ProfileContents'
import ProfileSidePage from './ProfieSidePage'
import Link from 'antd/es/typography/Link'
import { Outlet } from 'react-router-dom'
import GuestProfile from './GuestProfileInfo'


import MobileSocialTab from '../../SocialTab/mobileSocialTab'

export default function Profile() {
  return (
    <div className='social-profile'>
       <div  className='mobilesocialtab' >
       < MobileSocialTab  />
       </div>
   
       {/* <ProfileInfo /> */}
      < GuestProfile />
        <div className='profile-feeds'>
            <main className='profile-contents'>
            
               <Outlet   />
            </main>
            <main className='profile-sidepage'>
               < ProfileSidePage  />
            </main>

        </div>
    </div>
  )
}
