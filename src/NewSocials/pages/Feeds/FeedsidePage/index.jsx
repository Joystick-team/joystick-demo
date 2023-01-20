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
import Recommendations from './Recommendations'
import RecentEvents from './RecentsEvent'
// import {BiPodcast} from "react-icons/bs"
import eventimg1 from "../../../../../assets/images/eventimg1.png"
import eventimg2 from "../../../../../assets/images/eventimg2.jpeg"
import Birthdays from './Birthdays'
import MobileSocialTab from '../../../SocialTab/mobileSocialTab'


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


export default function FeedSidepage() {
    const tabItems=["Feeds","Community","Profile","Explore"]
  return (
    <div className='feed-sidepage-div'>
      < Creators creators={creators}/>
        <div className='mobilesocialtab'>
        <MobileSocialTab  tabs={[...tabItems]}/>
        </div>
      
       < VideoFeeds videofeeds={videoFeeds}/>
       <Recommendations recommendations={recommendations} />
       <RecentEvents events={events} />
       < Birthdays img={ creator5} name="Brooklyn Simmons"/>
    </div>
  )
}
