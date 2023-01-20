import React from 'react'
import Recommendations from '../../Feeds/FeedsidePage/Recommendations'
import creator1 from "../../../../../assets/images/creator1.png"
import RecentEvents from '../../Feeds/FeedsidePage/RecentsEvent'
import eventimg1 from "../../../../../assets/images/eventimg1.png"
import eventimg2 from "../../../../../assets/images/eventimg2.jpeg"
import Birthdays from '../../Feeds/FeedsidePage/Birthdays'
import "./profilesidepage.scss"


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





export default function ProfileSidePage() {
  return (
    <div className='profile-sidepage-main'>
      <Recommendations  recommendations={recommendations}/>
      <RecentEvents  events={events} />
      <Birthdays />
    </div>
  )
}
