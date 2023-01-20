import React from 'react'
import "./creators.scss"
export default function Creators({creators}) {
    console.log(creators)
  return (
    
    <div className='creators-main-div'>
        <div className='scroll-div'>
      {creators.map((creator)=>{
        return(
           <div className='bg-div'>
            <main className='img-div'>
               <img src={creator.img} />
             </main>
            <h5 className='creator-name'>
              {creator.name}
            </h5>
            </div>
        )
      })}
       
       </div>
    </div>
  )
}
