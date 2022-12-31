import React, { useEffect, useState } from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import profilebg from '../../assets/images/profile-bg.png'
import socialsavatar from '../../assets/images/socialsavatar.png'

import axios from 'axios'
import { Tab, Tabs } from 'react-bootstrap'
import Chats from '../../component/Chats'
import Friendrequest from '../../component/Chats/Friendrequest'
import FriendrequestData from '../../component/Chats/Friendrequest/FriendrequestData'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import { default as api } from '../../config/config.json'
import Feed from './pages/Feeds'
import MyPost from './pages/MyPost'
import './socials.scss'

export default function Socials() {
  const [sliderCount, setSliderCount] = useState(Number(6))
  const [popChat, setPopChat] = useState(false)
  const getData = async () => {
    const token = localStorage.getItem('userToken')
    var config = {
      method: 'get',
      url: `${api.url}/auth/profile`,
      headers: { Authorization: `Bearer ${token}` },
    }
    try {
      const res = await axios(config)
      localStorage.setItem('user_id', res.data.id)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const handlePopUp = () => {
    setPopChat(!popChat)
  }

  useEffect(() => {
    getData()
    if (window.innerWidth < 1200) {
      setSliderCount(Number(4))
    }
    if (window.innerWidth < 431) {
      setSliderCount(Number(3))
    }
  }, [])

  return (
    <div className='socials'>
      <div className='main'>
        <div className='center-container'>
          <div className='socials-bg'>
            <img loading='eager' src={profilebg} className='bg-img' alt='' />
            <div className='profile-avatar'>
              <div className='img-profile-avatar'>
                <img
                  loading='eager'
                  src={socialsavatar}
                  width='180px'
                  height={'180px'}
                  alt=''
                />
                <p>Ray Louis</p>
              </div>
            </div>
            <div className='edit-profile'>
              <span>
                <MdOutlineEdit className='edit-icon' />
              </span>
              <span className='profile-edit-text'>
                Edit <span>profile</span>
              </span>
            </div>
          </div>
          <div className='social-post'>
            <Tabs
              defaultActiveKey='post'
              transition={false}
              id='noanim-tab-example'
              className='mb-3'
            >
              <Tab eventKey='post' title='Post'>
                <MyPost />
              </Tab>
              <Tab eventKey='feeds' title='Feeds'>
                <Feed />
              </Tab>
              <Tab eventKey='community' title='Community'>
                The Community Screen
              </Tab>
            </Tabs>
            <div className='friendsrequest-container'>
              <PreviousNextMethods
                rowNum={sliderCount}
                header={'Friend Requests'}
              >
                {FriendrequestData.map((friend, idx) => {
                  return (
                    <Friendrequest
                      key={idx}
                      title={friend.title}
                      image={friend.image}
                    />
                  )
                })}
              </PreviousNextMethods>
            </div>
          </div>
        </div>
      </div>
      <div className={'side-adverts'} style={{ flexGrow: '1' }}>
        <div className='friends-social'>
          <h5>Friends</h5>
          {FriendrequestData.map((friend, idx) => {
            return <Chats key={idx} title={friend.title} image={friend.image} />
          })}
        </div>
      </div>
    </div>
  )
}
