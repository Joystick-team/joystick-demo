import React from 'react'
import Comments from './Comments/comments'
import MakePost from './MakePost/makePost'
import pic from "../../../../assets/images/postimg.png"
import FeedSidepage from './FeedsidePage'

export default function Feeds() {
  return (
    <div className='feeds-div'>

        <div className='feeds-comments'>
            < MakePost pic={ pic } />
             < Comments />
        </div>
        <div className='feeds-sidepage'>
         < FeedSidepage />
        
        </div>
     
    </div>
  )
}
