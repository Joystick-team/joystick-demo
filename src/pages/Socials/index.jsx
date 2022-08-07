import React,{useState,useEffect} from 'react'
import socialsavatar from '../../assets/images/socialsavatar.png'
import profilebg from '../../assets/images/profile-bg.png'
import { MdOutlineEdit } from 'react-icons/md'
import postData from '../../Store/postfile'
import Posts from '../../component/Posts'

import './socials.scss'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import Chats from '../../component/Chats'
import Friendrequest from '../../component/Chats/Friendrequest'
import FriendrequestData from '../../component/Chats/Friendrequest/FriendrequestData'
import { Tab, Tabs } from 'react-bootstrap'

export default function Socials() {
  const [sliderCount, setSliderCount] = useState(Number(6))

  useEffect(() => {
    if(window.innerWidth < 1200){
      setSliderCount(Number(4))
    }
    if(window.innerWidth < 431){
      setSliderCount(Number(3))
    }
  }, [])
  
  return (
    <div className='socials'>
        <div className="main">
          <div className="center-container">
            <div className="socials-bg" >
              <img loading='eager' src={profilebg} className='bg-img' alt=""/> 
              <div className="profile-avatar">
                <div className="img-profile-avatar">
                  <img loading='eager' src={socialsavatar} width='180px' height={'180px'} alt="" />
                  <p>Ray Louis</p>
                </div>
              </div>
              <div className="edit-profile">
              <span><MdOutlineEdit className='edit-icon'/></span><span className='profile-edit-text'>Edit <span>profile</span></span>
                </div>
            </div>
          <div className="social-post">
          <Tabs
            defaultActiveKey="post"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="post" title="Post">
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
            </Tab>
            <Tab eventKey="feeds" title="Feeds">
               The Feeds Screen
            </Tab>
            <Tab eventKey="community" title="Community">
            The Community Screen
            </Tab>
          </Tabs>
          <div className="friendsrequest-container">       
               <PreviousNextMethods rowNum={sliderCount} header={'Friend Requests'}>
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
        </div>

    </div>
  )
}
