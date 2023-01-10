import React from 'react'
import "./profile.scss"
import ProfileInfo from './UserProfileInfo'
import ProfileContents from './ProfileContents'
import ProfileSidePage from './ProfieSidePage'
import Link from 'antd/es/typography/Link'
import { Outlet } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='social-profile'>
       <ProfileInfo />
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
