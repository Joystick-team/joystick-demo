import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialTab({tabs}) {
    console.log(tabs)
  return (
    <div className='socialtab-main'>
        <div className='tab-row'>
            <div className='tab-items'>
               
            <Link to=""><h5 className='text-sm font-semibold'>Feeds</h5></Link>
            <Link to="community"><h5 className='text-sm font-semibold'>Community</h5></Link>
            <Link to="Profile"><h5 className='text-sm font-semibold'>Profile</h5></Link>
            <Link to="Explore"><h5 className='text-sm font-semibold'>Explore</h5></Link>
                
            </div>
            <div className='tab-empty'>
           
            </div>
        </div>

    </div>
   
  )
}
