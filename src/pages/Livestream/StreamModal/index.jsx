import React from 'react'
import "./modal.css"
export default function Modal({children ,cname,trigger,onClose}) {
  return (
    <div className='modal'>
          { trigger?
            <div className="overlay-style">
                <div className="modal-upload">
                   {children}
                </div> 
                
            </div>
         : <div></div>
            
            }

    </div>
  )
}