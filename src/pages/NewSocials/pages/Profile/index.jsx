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
import chatImg1 from "../../../../assets/images/chatImg1.png"
import chatImg2 from "../../../../assets/images/chatImg2.png"
import chatImg3 from "../../../../assets/images/user1.png"
import SocialMessenger from '../../SocialMessenger'


const chats=[
  {
      img:chatImg1 ,
      name:"Jane Cooper"

  },
  {
      img:chatImg2,
      name:"Esther Howard"

  },
  {
      img:chatImg3,
      name:"Cody Fisher"

  }

]





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
               <SocialMessenger  chats={chats} />
            </main>

        </div>
    </div>
  )
}
