import React ,{useState} from 'react'
import "./mobilesocialtab.scss"
import { Link } from 'react-router-dom'


export default function MobileSocialTab({tabs}) {
    console.log(tabs)
    const [activeTab, setActiveTab] = useState("feeds");
  return (
    <div className='mobilesocialtab-main'>
        <div className='tab-row'>
            <div className='tab-items'>
            {activeTab ==="feeds"?  
             
             <Link to=""><h5   className= "text-sm font-semibold active-feeds"  onClick={()=>setActiveTab("")}>Feeds</h5></Link>

             :
            
         <Link to=""><h5   className= "text-sm font-semibold"  onClick={()=>setActiveTab("")}>Feeds</h5></Link>
         }
            {/* <Link to=""><h5 className='text-sm font-semibold'>Feeds</h5></Link> */}
            <Link to="community"><h5 className='text-sm font-semibold'  onClick={()=>setActiveTab("")}>Community</h5></Link>
            <Link to="Profile"><h5 className='text-sm font-semibold'  onClick={()=>setActiveTab("")}>Profile</h5></Link>
            <Link to="Explore"><h5 className='text-sm font-semibold'  onClick={()=>setActiveTab("")}>Explore</h5></Link>
              
            </div>
           
        </div>

    </div>
   
  )
}
