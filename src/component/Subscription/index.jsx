import React, { useState } from 'react'
import { AppContextInit } from '../../context/AppContext'
// import LoadingButton from "../LoadingButton"

import "./subscription.scss"

export default function Subscription() {
  const { isSubscriber, setIsSubscriber } = AppContextInit()
  const [isSubscribeLoading, setIsSubscribeLoading] = useState(false)

  const handleSubscription = (e) => {
    setIsSubscriber(true)
    setIsSubscribeLoading(true)
    e.preventDefault();

    setTimeout(() => {
      setIsSubscribeLoading(false)
    }, 2000);
  }
  return (
     <>
     { isSubscriber && 
      <div className='subscription'>
        <main className='subscription-main-div'>
          <form action="" method="post" onSubmit={handleSubscription}>
            <h5>Stay up to date</h5>
            <div className='subscription-form'>
                <input
                  className='subscription-input'
                  placeholder='your email for updates'
                  type="text"
                  required
                />
                <button 
                  type="submit" 
                  className='subscription-btn'
                  
                  >{`${isSubscribeLoading ? 'Loading...' : 'Subscribe'}`}</button>
                 {/* <LoadingButton type='submit' title={"Subscribe"} variant='red'  className='subscription-btn'/> */}
            </div>
          </form>
        </main>
        
      </div>
    }
    </>
  )
}
