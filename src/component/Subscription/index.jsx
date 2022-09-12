import React from 'react'
import LoadingButton from "../LoadingButton"

import "./subscription.scss"

export default function Subscription() {
  return (
      <div className='subscription'>
        <main className='main-div'>
            <h5>Stay up to date</h5>
            <div className='subscription-form'>
                <input
                 className='subscription-input'
                 placeholder='your email for updates'
                 type="text"
                 />
                 <LoadingButton title={"Subscribe"} variant='red'  className='subscription-btn'/>
                {/* <button className='subscription-btn'>Subscribe</button> */}
            </div>
        </main>
        
      </div>
  )
}
