import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import  comment1 from "../../../../../assets/images/commentImg1.jpeg"
import  comment2 from "../../../../../assets/images/commentImg2.jpeg"
import  comment3 from "../../../../../assets/images/commentImg3.jpeg"
import "./comment.scss"
import postImg1 from "../../../../../assets/images/postImg2.png"
import postImg2 from "../../../../../assets/images/postImg3.png"
import {BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlineLike,AiOutlineSend} from "react-icons/ai"
import {BiCommentDetail} from "react-icons/bi"
import LoadingButton from '../../../../../component/LoadingButton'
import {RiArrowDropDownLine} from "react-icons/ri"
import axios from 'axios'


export default function Comments({comments}) {
   
   const {userToken} = useSelector(state=>state.signin)
   const [commentText,setText]=useState("")



   const shareComment=async (Id)=>{

      const config = {
         headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${userToken?.access_token}`
         }
       }

       const res = await axios.get(
         `https://api.joysticklabs.io/api/v1/post/comment-post/${Id}`,
         config,
         {
            text:commentText
         }
       )

       console.log(res,"resss")

   }
  
   const likePost=async (Id)=>{

      const config = {
         headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${userToken?.access_token}`
         }
       }

       const res = await axios.get(
         `https://api.joysticklabs.io/api/v1/post/like-post/${Id}`,
         config
       )

       console.log(res,"resss")

   }
  return (
    <div className='social-comment'>
       
       { comments.map((comment)=>{

          return(
             <div className='comment-div'>
                 <main className='comment-top'>
                    <div className=' comment-user'>
                         <img src={comment?.profileImg}/>
                         <h5>
                            <span>{comment?.name}</span>
                            <span className='handle-user'>{comment?.handle}</span>
                         </h5>
                    </div>

                    <div className=' comment-date-option'>
                         <h5>{comment?. date}</h5>
                         <BsThreeDotsVertical className='option-icon' />
                    </div>
                 </main>

                 <main className='comment-img-div'> 
                   {
                    comment?. postImg.map((img)=>{
                       return(
                        <img  src={img} />
                       )
                    }
                   
                    )
                   }
                    
                 </main>

                 <main className='comment-post-div'>
                    <div className='post-text-div'>
                       
                          <h5 className='post-handle'> <span>{ comment?.handle}</span></h5>
                          <p className=''>
                            <span>{comment?.title}.</span>
                             {
                              comment?.post
                             }.
                          </p>
                         
                        
                    </div>

                     <div className='comment-post-fx'>
                          <main className='post-fx-top'>
                              <div  className='post-fx-top-left'>
                                  <h5>
                                     <AiOutlineLike />
                                     <span> {comment?.likes}</span>
                                  </h5>
                                  <h5>
                                    <BiCommentDetail />
                                    <span> {comment?.comments}</span>
                                  </h5>
                                  <h5>
                                    <AiOutlineSend />
                                  </h5>
                               
                              </div>
                              <div  className='post-fx-top-right'>
                                 <LoadingButton type='submit' title={"Share"} variant='red'  className='share-btn'/>
                               </div>

                              
                          </main>

                          <main className='post-fx-bottom'>
                               <h5>View all comments</h5>
                               <h6><RiArrowDropDownLine /></h6>
                          </main>

                          <main className='comment-textfield'>
                            <textarea 
                             placeholder='Write your comment here'
                             className='comment-text'
                             />        
                         </main>
                     </div>



                 </main>

             

             </div>
          )

       })

       }
       



    </div>
  )
}
