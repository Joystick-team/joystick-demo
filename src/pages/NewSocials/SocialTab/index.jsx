import React from 'react'

export default function SocialTab({tabs}) {
    console.log(tabs)
  return (
    <div className='socialtab-main'>
        <div className='tab-row'>
            <div className='tab-items'>
                {tabs.map((tab)=>{
                    return(
                        <h5 className='text-sm font-semibold'>{tab}</h5>
                    )
                })}
            </div>
            <div className='tab-empty'>
           
            </div>
        </div>

    </div>
   
  )
}
