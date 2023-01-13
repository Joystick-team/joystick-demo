import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import SocialTab from '../../../SocialTab'
import "./profilecontents.scss"
import {BsThreeDotsVertical} from "react-icons/bs"

export default function ProfileContents() {
    const tabs=["Posts","Streams"]
  return (
    <div className='profile-content'>
         <div className='content-tab'>
               <div className='tabs'>
                  <Link to="" > <div>Posts</div></Link>
                  <Link to="streams"><div>Streams</div></Link>  
               </div>

           </div>
         
         <div className='profile-oulet'>
            <Outlet  />
         </div>


    </div>
  )
}
