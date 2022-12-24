import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import userAvarta from '../../assets/images/userAvarta.png'
import './profiledetails.scss'

export default function ProfileDetails() {
  return (
    <div className="profile">
        <img loading='eager' style={{cursor: 'pointer'}} src={userAvarta} alt="user-Avarta" />
        <div className="personaldetails">
            <p className="p-text">Hello Avarta!</p>
            <p style={{marginTop: '-1rem'}}><span> <GoPrimitiveDot /> </span> Online</p>
        </div>
    </div>
  )
}
