import React,{useEffect} from 'react'
import "./profile.scss"
import ProfileInfo from './UserProfileInfo'
import ProfileContents from './ProfileContents'
import ProfileSidePage from './ProfieSidePage'
import Link from 'antd/es/typography/Link'
import { Outlet } from 'react-router-dom'
import GuestProfile from './GuestProfileInfo'
import MobileSocialTab from '../../SocialTab/mobileSocialTab'
import { useSelector, useDispatch } from "react-redux"
import { profileAction } from '../../../../Actions/Authentication/Profile.Action'





export default function Profile() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(profileAction())
  },[])

  const {profile_loading,profile_success,profile_data} = useSelector(state=>state.profile)
  console.log(profile_data,"profilepage")
  return (
    <div className='social-profile'>
       <div  className='mobilesocialtab' >
       < MobileSocialTab  />
       </div>
   
       <ProfileInfo profile={profile_data} />
      {/* < GuestProfile /> */}
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
