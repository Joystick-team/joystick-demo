import React from 'react'
import Example from '../../component/Example'
import './test.scss'

export default function TestPage() {
  return (
    <div className='test'>
      <div className="nav-bar">
        <Example />
      </div>
      <div className="main"> Main
      </div>
      <div className="side-advert">Chat side Chat side Chat side Chat side Chat side Chat side Chat side Chat side Chat side Chat side</div>
    </div>
  )
}
