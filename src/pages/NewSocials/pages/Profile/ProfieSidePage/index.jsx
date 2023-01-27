import React from 'react'
import Recommendations from '../../Feeds/FeedsidePage/Recommendations'
import creator1 from "../../../../../assets/images/creator1.png"
import RecentEvents from '../../Feeds/FeedsidePage/RecentsEvent'
import eventimg1 from "../../../../../assets/images/eventimg1.png"
import eventimg2 from "../../../../../assets/images/eventimg2.jpeg"
import Birthdays from '../../Feeds/FeedsidePage/Birthdays'
import "./profilesidepage.scss"
import FriendRequest from '../../Feeds/FeedsidePage/FriendRequest'
import chatImg1 from "../../../../../assets/images/chatImg1.png"
import chatImg2 from "../../../../../assets/images/chatImg2.png"
import chatImg3 from "../../../../../assets/images/user1.png"


import creator2 from "../../../../../assets/images/creator2.png"
import creator3 from "../../../../../assets/images/creator3.png"
import creator5 from "../../../../../assets/images/postImg3.png"
import creator4 from "../../../../../assets/images/creator3.png"
import SocialMessenger from '../../../SocialMessenger'


const recommendations=[
    {
        img: creator1 ,
        name:"Wade Warren",
        description:"Founder & CEO at Megathron",
        socials:[]
     

    },
    {
        img: creator2 ,
        name:"Alex James",
        description:"Founder & CEO at Megathron",
        socials:[]
     

    },
    {
        img: creator3 ,
        name:"John Doe",
        description:"Founder & CEO at Megathron",
        socials:[]
     

    }
   
]

const events=[
    {
        img:eventimg1,
        title:"Megathron Game pre-sale",
        description:"The official pre-sale online ceremony"
     

    },
    {
        img: eventimg2  ,
        title:"Live Podcast",
        description:"Live gaming podcast section with different udate on the latest games around the world"
   }
]



const friends=[
  {
      img:creator1,
      name:"Wade Warren"

  },
  {
      img:creator2,
      name:"Leslie Alexander"

  },
  {
      img:creator3,
      name:"Robert Fox"

  },
  {
      img:creator3,
      name:"Joesin"

  },
  {
      img:creator4,
      name:"Annette Black"

  },
  {
      img:creator5,
      name:"John Doe"

  },
]


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

  },
  {
      img:creator3,
      name:"Joesin"

  }

]



export default function ProfileSidePage() {
  return (
    <div className='profile-sidepage-main'>
      <Recommendations  recommendations={recommendations}/>
      <RecentEvents  events={events} />
      <Birthdays />
      {/* <FriendRequest   friends={friends}  chats={chats}/> */}
      {/* <SocialMessenger chats={chats}  /> */}
    </div>
  )
}
