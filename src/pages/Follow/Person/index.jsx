import React from 'react'
import "./person.scss"
import {BsThreeDotsVertical} from "react-icons/bs"

export default function Person({followee,btnName}) {
  return (
    
    <div className='person-main'>
       <main className='person-info'>
          <div className='details'>
             <img src={followee?.data?.avatar} />

             <h5>{followee?.data?.first_name + " " + followee?.data?.last_name}</h5>
          </div>

          <div className='btn-div'>
             <button>{btnName}</button>

         </div>
              
        

       </main>
        <main className='icon-main'>
           <BsThreeDotsVertical className='icon-menu'/>
        </main>
       
      

    </div>
  )
}
