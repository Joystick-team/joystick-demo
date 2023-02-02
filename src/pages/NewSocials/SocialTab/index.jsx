import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function SocialTab({tabs}) {
    console.log(tabs)
    const [activeTab, setActiveTab] = useState("feeds");
  return (
    <div className='socialtab-main'>
        <div className='tab-row'>
            <div className='tab-items'>
            {activeTab ==="feeds"?  
             
                  <Link to=""><h5   className= "text-sm font-semibold active-feeds"  onClick={()=>setActiveTab("")}>Feeds</h5></Link>

                  :
                 
              <Link to=""><h5   className= "text-sm font-semibold"  onClick={()=>setActiveTab("")}>Feeds</h5></Link>
              }
            {/* <Link to=""><h5   className= "text-sm font-semibold"  onClick={()=>setActiveTab("feeds")}>Feeds</h5></Link> */}
            <Link to="community"><h5 className='text-sm font-semibold'  onClick={()=>setActiveTab("")}>Community</h5></Link>
            <Link to="Profile"><h5 className='text-sm font-semibold'  onClick={()=>setActiveTab("")}>Profile</h5></Link>
            <Link to="Explore"><h5 className='text-sm font-semibold'  onClick={()=>setActiveTab("")}>Explore</h5></Link>
                
            </div>
            <div className='tab-empty'>
           
            </div>
        </div>

    </div>
   
  )
}
