import React from 'react'
import Layout from '../../component/Layout'
import socialsavatar from '../../assets/images/socialsavatar.png'
import campaign from '../../assets/images/campaign.png'
import nightwar from '../../assets/images/nightwar.png'

import profilebg from '../../assets/images/profile-bg.png'
import { MdOutlineEdit } from 'react-icons/md'


import './socials.scss'
import SidePost from '../../component/SidePost'
export default function Socials() {
  return (
    <div className='socials'>
      <Layout> 
        <div className="main">
          <div className="center-container">
          <div className="socials-bg" >
            <img src={profilebg} className='bg-img' alt=""/> 
            <div className="profile-avatar">
              <div className="img-profile-avatar">
                <img src={socialsavatar} width='180px' height={'180px'} alt="" />
                <p>Ray Louis</p>
                
              </div>
            </div>
            <div className="edit-profile">
               <span><MdOutlineEdit /></span> Edit profile
              </div>
          </div>
          <div className="social-post">
            <div className="">
                <h4>Post</h4>
              <div className="post-card-container">
                <div className="post-card"> 
                    <img src={campaign} className='bg-img' alt=""/>
                  </div>
                  <div className="post-card">
                  <img src={nightwar} className='bg-img' alt=""/>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className={"side-adverts"}>
          <div className="">
       Friends
        <SidePost />
      </div>
        </div>
      </Layout> 

    </div>
  )
}
