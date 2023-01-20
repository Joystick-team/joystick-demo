import React from 'react'
import SocialTab from './SocialTab'
import "./newsocial.scss"
import { Outlet } from 'react-router-dom'


export default function NewSocials() {
     
  return (
    <div className='new-socials'>
       
        <div className='socialtab'>
            <SocialTab  />
        </div>
            <div className='socials-outlet'>
                <Outlet  />
            </div>
        
        
  

    </div>
  )
}
