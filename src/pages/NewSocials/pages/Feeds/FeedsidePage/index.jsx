import React from 'react'
import Creators from './Creators'
import VideoFeeds from './VideoFeeds'
import "./feedsidepage.scss"
import creator1 from "../../../../../assets/images/creator1.png"
import creator2 from "../../../../../assets/images/creator2.png"
import creator3 from "../../../../../assets/images/creator3.png"
import creator5 from "../../../../../assets/images/postImg3.png"
import creator4 from "../../../../../assets/images/creator3.png"
import videoimg1 from  "../../../../../assets/images/videoimg1.jpeg"
import videoimg2 from  "../../../../../assets/images/videoimg2.jpeg"

import chatImg1 from "../../../../../assets/images/chatImg1.png"
import chatImg2 from "../../../../../assets/images/chatImg2.png"
import chatImg3 from "../../../../../assets/images/user1.png"


import Recommendations from './Recommendations'
import RecentEvents from './RecentsEvent'
// import {BiPodcast} from "react-icons/bs"
import eventimg1 from "../../../../../assets/images/eventimg1.png"
import eventimg2 from "../../../../../assets/images/eventimg2.jpeg"
import Birthdays from './Birthdays'
import MobileSocialTab from '../../../SocialTab/mobileSocialTab'
import FriendRequest from './FriendRequest'
import SocialMessenger from '../../../SocialMessenger'


const creators=[
    {
        img:creator1,
        name:"Scoth"

    },
    {
        img:creator2,
        name:"Marvis"

    },
    {
        img:creator3,
        name:"Joesin"

    },
    {
        img:creator3,
        name:"Joesin"

    },
    {
        img:creator4,
        name:"Emenike"

    },
    {
        img:creator5,
        name:"Agba"

    },
]


const videoFeeds=[
    {
        img:videoimg1 ,
       
    },
    {
        img:videoimg2 ,
       
   }
]

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
        img: creator3,
        name:"Jane Doe",
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


export default function FeedSidepage() {
    const tabItems=["Feeds","Community","Profile","Explore"]
  return (
    <div className='feed-sidepage-div'>
      < Creators creators={creators}/>
        <div className='mobilesocialtab'>
        <MobileSocialTab  tabs={[...tabItems]}/>
        </div>
      
       < VideoFeeds videofeeds={videoFeeds}/>
       <div className='feeds-sidepage-bottom'>
       <Recommendations recommendations={recommendations} />
       <RecentEvents events={events} />
       < Birthdays img={ creator5} name="Brooklyn Simmons"/>
       {/* <FriendRequest  friends={friends}  chats={chats} /> */}
       {/* <SocialMessenger  chats={chats} /> */}
       </div>
     
    </div>
  )
}
