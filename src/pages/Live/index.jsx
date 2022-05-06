import React from 'react'
import Layout from '../../component/Layout'

export default function Livescream() {
  return (
    <div className='livescream'>
      <Layout> 
        <div className="main"> 
          Livescream
        </div>
        <div className="side-adverts" style={{flexGrow: '1'}}>
          {/* The left advert/chat/friends should be written here */}
          hello
          {/* hello
          hello
          hello
          hello
          hello
          hello
          hello
          hello
          hello
          hello
          hello
          hello */}
        </div>
      </Layout> 
    </div>
  )
}
