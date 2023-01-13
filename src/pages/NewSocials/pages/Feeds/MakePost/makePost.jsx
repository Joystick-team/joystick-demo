import React from 'react'
import "./makepost.scss"
import {AiOutlinePicture} from "react-icons/ai"
import {BiVideoPlus} from "react-icons/bi"
import {CgFileDocument} from "react-icons/cg"
import LoadingButton from '../../../../../component/LoadingButton'


export default function MakePost({pic,btnName}) {
  return (
    <div className='makepost'>
        <div className='post-div'>
            <div className='write-post'>
              <img src={pic} className="post-img"/>

              <textarea 
                placeholder='Write something here ...'
                className='post-text'
              />
            </div>
            <div className='publish-post'>
               <main className='post-attachment'>
                   <h5>
                      <AiOutlinePicture />
                      <span>Add a photo</span>
                   </h5>
               
                  <h5>
                      <BiVideoPlus />
                      <span>Add a video</span>
                   </h5>
             

           
                   <h5>
                      <CgFileDocument/>
                      <span>Add a document</span>
                   </h5>
               </main>

               <LoadingButton type='submit' title={btnName} variant='red'  className='publish-btn'/>
            </div>
           
        </div>
    </div>
  )
}
