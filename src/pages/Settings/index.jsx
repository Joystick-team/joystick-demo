import React from 'react'
import Layout from '../../component/Layout'

export default function Settings() {
  return (
    <div className="settings">
      <Layout> 
        <div className="main"> 
          <div >Settings</div> 
        </div>
        <div className="side-adverts" style={{display:'flex'}}>
          {/* The left advert/chat/friends should be written here */}
          
        </div>
      </Layout> 
    </div>
    
  )
}
