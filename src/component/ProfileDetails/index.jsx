import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import userAvarta from '../../assets/images/userAvarta.png'
import './profiledetails.scss'

export default function ProfileDetails() {
  return (
    <div className="profile">
        <img loading='lazy' style={{cursor: 'pointer'}} src={userAvarta} alt="user-Avarta" />
        <div className="personaldetails">
            <p>Hello Dimgba!</p>
            <p style={{marginTop: '-1rem'}}><span> <GoPrimitiveDot /> </span> Online</p>
        </div>
    </div>
  )
}
