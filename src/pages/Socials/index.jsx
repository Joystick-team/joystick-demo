import React from 'react'
import Layout from '../../component/Layout'
import socialsavatar from '../../assets/images/socialsavatar.png'
import profilebg from '../../assets/images/profile-bg.png'
import { MdOutlineEdit } from 'react-icons/md'
import postData from '../../postfile'
import Posts from '../../component/Posts'

import './socials.scss'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import Chats from '../../component/Chats'
import Friendrequest from '../../component/Chats/Friendrequest'
import FriendrequestData from '../../component/Chats/Friendrequest/FriendrequestData'
export default function Socials() {
  // const importeddata = 
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
              {
                postData.map((data, idx) => {
                  return <Posts 
                            key={data.id}
                            img={data.img}
                            likeicon = {data.likeicon}
                            dislikeicon={data.dislikeicon}
                            messageicon={data.messageicon}
                            shareicon={data.shareicon}
                            likescount={data.likescount}
                            dislikescount={data.dislikescount}
                            name={data.name}
                            content={data.content}
                          />
                })
              }
              </div>
              <div className="friendsrequest-container">       
               <PreviousNextMethods rowNum={6} header={'Friend Requests'}>
               {FriendrequestData.map((friend, idx) =>{
                  return <Friendrequest 
                            key={idx}
                            title={friend.title}
                            image={friend.image}
                          />
                })}
              </PreviousNextMethods>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className={"side-adverts"} style={{flexGrow: '1'}}>
          <div className="friends-social">
            <h5>Friends</h5>
          {FriendrequestData.map((friend, idx) =>{
                  return <Chats 
                            key={idx}
                            title={friend.title}
                            image={friend.image}
                          />
                })}
        {/* <SidePost /> */}
      </div>
      <h5>Chats</h5>
        </div>
      </Layout> 

    </div>
  )
}
