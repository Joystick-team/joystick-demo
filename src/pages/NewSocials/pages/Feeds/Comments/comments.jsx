import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import  comment1 from "../../../../../assets/images/commentImg1.jpeg"
import  comment2 from "../../../../../assets/images/commentImg2.jpeg"
import  comment3 from "../../../../../assets/images/commentImg3.jpeg"
import "./comment.scss"
import postImg1 from "../../../../../assets/images/postImg2.png"
import postImg2 from "../../../../../assets/images/postImg3.png"
import {BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlineLike,AiOutlineSend,AiOutlineClose} from "react-icons/ai"
import {BiCommentDetail} from "react-icons/bi"
import LoadingButton from '../../../../../component/LoadingButton'
import {RiArrowDropDownLine,RiArrowDropUpLine,RiDeleteBin6Line} from "react-icons/ri"
import axios from 'axios'
import {FaEdit} from  "react-icons/fa"
import {RxDrawingPin} from "react-icons/rx"
import {MdOutlineContentCopy} from "react-icons/md"






const CommentBox=({comment})=>{
   return(
      <div  className='comment-box'>
         <p>{comment.text} </p>

      </div>
   )
}

const Comment=({ post, shareComment,likePost,trigger,setTrigger,commentText, setText})=>{
   const [optiontrigger,setOptionTrigger]=useState(false)
   return(
      <div className='comment-div'>
      <main className='comment-top'>
         <div className=' comment-user'>
              <img src={post?.user?.avater}/>
              <h5>
                 <span>{post?.user?.firstname?"" :+ post?.user?.firstname + " " +post?.user?.lastname?"" :+ post?.user?.lastname }</span>
                 <span className='handle-user'>@{post?.user?.username}</span>
              </h5>
         </div>

         <div className=' comment-date-option'>
              {/* <h5>{post?. date}</h5> */}
              { optiontrigger? 
                   <main className='comment-option-actions' >
                     <h5>
                       <AiOutlineClose  onClick={()=>setOptionTrigger(false)} />
                     </h5>

                     <div className='comment-action-col'>
                        <h5><RiDeleteBin6Line /> Delete</h5>
                        <h5><FaEdit /> Edit</h5>
                        <h5><RxDrawingPin /> Pin to my profile</h5>
                        <h5><MdOutlineContentCopy /> Copy link</h5>

                     </div>
                   

                  </main>
                :

              <BsThreeDotsVertical className='option-icon' onClick={()=>setOptionTrigger(true)}/>
            

       }
         </div>
      </main>

      <main className='comment-img-div'> 
    
             <img  src={post?.url} />
         
      </main>

      <main className='comment-post-div'>
         <div className='post-text-div'>
            
               <h5 className='post-handle'> <span>@{post?.user?.username}</span></h5>
               <p className=''>
                 <span>{post?.text}.</span>
                  {/* {
                   post?.text
                  }. */}
               </p>
              
             
         </div>

          <div className='comment-post-fx'>
               <main className='post-fx-top'>
                   <div  className='post-fx-top-left'
                      onClick={()=>likePost(post?.id)}
                     >
                       <h5>
                          <AiOutlineLike />
                          <span> {post?.likes==null? 0:post?.likes}</span>
                       </h5>
                       <h5>
                         <BiCommentDetail />
                         <span> {post?.comment?.length}</span>
                       </h5>
                       <h5>
                         <AiOutlineSend />
                       </h5>
                    
                   </div>
                   <div  className='post-fx-top-right'
                       onClick={()=>shareComment(post?.id)}
                   >
                      <LoadingButton type='submit' title={"Share"} variant='red'  className='share-btn'
                     
                      />
                    </div>

                   
               </main>

               <main className='post-comments-session'>
               { trigger?

                  <div className='post-comments-all'>
                        <div className='post-fx-bottom' onClick={()=>setTrigger(false)}>
                          <h5>View all comments</h5>
                          <h6 onClick={()=>setTrigger(false)}><RiArrowDropUpLine /></h6>
                        </div>

                        <main className='posts-comment-col'>
                           {post?.comment?.map((comment)=>{
                              return(
                                <CommentBox comment={comment} />
                              )
                           })}
                        </main>

                  </div>
                    :
                    <div className='post-fx-bottom' onClick={()=>setTrigger(true)}>
                          <h5>View all comments</h5>
                          <h6 onClick={()=>setTrigger(true)}><RiArrowDropDownLine /></h6>

                    </div>
                 
               }
               </main>

               <main className='comment-textfield'>
                 <textarea 
                  placeholder='Write your comment here'
                  className='comment-text'
                  name="commentText"
                  value={commentText}
                  onChange={(e)=>setText(e.target.value)}
                  />        
              </main>
          </div>



      </main>

  

  </div>

   )
}

export default function Comments({comments,posts}) {
   
   const {userToken} = useSelector(state=>state.signin)
   const [commentText,setText]=useState("")
   const [trigger,setTrigger]=useState(false)
   const [optiontrigger,setOptionTrigger]=useState(false)


   const shareComment=async (Id)=>{

      const config = {
         headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${userToken?.access_token}`
         }
       }

       const res = await axios.post(
         `https://api.joysticklabs.io/api/v1/post/comment-post/${Id}`,
        
         {
            text:commentText
         },
         config
       )

       console.log(res,"sending comments")
       setText("")

   }
  
   const likePost=async (Id)=>{

      const config = {
         headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${userToken?.access_token}`
         }
       }

       const res = await axios.post(
         `https://api.joysticklabs.io/api/v1/post/like-post/${Id}`,
         config
       )

       console.log(res,"resss")

   }


   console.log(posts)

  return (
   
   
    <div className='social-comment'>
       
       {posts?.map((post)=>{
          console.log(post,"pppp")
         console.log(post?.comment?.length) 
          return(

             <>
              <Comment commentText={commentText} setText={setText} post={post}  shareComment={shareComment} likePost={likePost} trigger={trigger} setTrigger={setTrigger} />
             </>
      

         
             
          )

       })

       }
       



    </div>
  )
}
