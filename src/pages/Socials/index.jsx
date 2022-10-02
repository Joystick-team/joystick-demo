import React,{useState,useEffect} from 'react'
import socialsavatar from '../../assets/images/socialsavatar.png'
import profilebg from '../../assets/images/profile-bg.png'
import { MdOutlineEdit } from 'react-icons/md'


import './socials.scss'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import Chats from '../../component/Chats'
import Friendrequest from '../../component/Chats/Friendrequest'
import FriendrequestData from '../../component/Chats/Friendrequest/FriendrequestData'
import { Tab, Tabs } from 'react-bootstrap'
import MyPost from './pages/MyPost'
import Feed from './pages/Feeds'
import  { default as api } from '../../config/config.json'
import axios from 'axios';

export default function Socials() {
  const [sliderCount, setSliderCount] = useState(Number(6))
  const token = localStorage.getItem('userToken')
  const getData = async()=>{
    var config = {
        method: 'get',
        url: `${api.test_url}/api/v1/auth/profile`,
        headers: { Authorization: `Bearer ${token}` },
      };
    try {
        const res = await axios(config)
        console.log(res.data)
    } catch (error) {
        console.log(error.response.data)
    }
  }
  useEffect(() => {
    getData()
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
              {/* My post component here */}
              <MyPost/>
            </Tab>
            <Tab eventKey="feeds" title="Feeds">
               {/* The Feeds Screen */}
               <Feed/>
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
