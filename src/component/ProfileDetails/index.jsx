import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import userAvarta from '../../assets/images/userAvarta.png'
import { profileAction } from '../../Actions/Authentication/Profile.Action'
import './profiledetails.scss'

export default function ProfileDetails() {
  const { profile_data } = useSelector(state => state.profile)
  const { userToken } = useSelector(state => state.signin)
  const dispatch = useDispatch()

  useEffect(() => {
    userToken?.access_token&& dispatch(profileAction())
  },[userToken?.access_token,dispatch])
  return (
    <div className="profile">
        <img loading='eager' style={{cursor: 'pointer'}} src={userAvarta} alt="user-Avarta" />
        <div className="personaldetails">
        <p className="p-text">Hello {userToken?.access_token&& profile_data? profile_data.username: "Avatar"}</p>
        <p style={{ marginTop: '-1rem' }}><span > <GoPrimitiveDot color={userToken?.access_token&&navigator.onLine?"green":"grey"} /> </span> {userToken?.access_token&& navigator.onLine?"online":"offline"}</p>
        </div>
    </div>
  )
}
