import React from 'react'
import "./mobilesocialtab.scss"



export default function MobileSocialTab({tabs}) {
    console.log(tabs)
  return (
    <div className='mobilesocialtab-main'>
        <div className='tab-row'>
            <div className='tab-items'>
                {tabs.map((tab)=>{
                    return(
                        <h5 className='text-sm font-semibold'>{tab}</h5>
                    )
                })}
            </div>
           
        </div>

    </div>
   
  )
}
