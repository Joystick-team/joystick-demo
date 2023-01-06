import React from 'react'
import SocialTab from './SocialTab'
import "./newsocial.scss"
import { Outlet } from 'react-router-dom'


export default function NewSocials() {
     const tabItems=["Feeds","Community","Profile","Explore"]
  return (
    <div className='new-socials'>
       
        <div className='socialtab'>
            <SocialTab  tabs={[...tabItems]}/>
        </div>
            <div className='socials-outlet'>
                <Outlet  />
            </div>
        
        
  

    </div>
  )
}
