import React ,{useState} from 'react'
import { Outlet,Link } from 'react-router-dom'
import SocialTab from '../../../SocialTab'
import "./profilecontents.scss"
import {BsThreeDotsVertical} from "react-icons/bs"

export default function ProfileContents() {
    const tabs=["Posts","Streams"]
    const [activeTab, setActiveTab] = useState("feeds");
  return (
    <div className='profile-content'>
         <div className='content-tab'>
               <div className='tabs'>
               {activeTab ==="feeds"?  
             
                  <Link to=""><div className='active-posts'>Posts</div> </Link>

                   :
                   <Link to=""><div onClick={()=>setActiveTab("")} >Posts</div> </Link>
                }
                  <Link to="streams"><div onClick={()=>setActiveTab("")} >Streams</div></Link>  
               </div>

           </div>
         
         <div className='profile-oulet'>
            <Outlet  />
         </div>


    </div>
  )
}
