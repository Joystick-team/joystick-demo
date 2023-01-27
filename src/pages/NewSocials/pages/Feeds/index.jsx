import React ,{useEffect} from 'react'
import Comments from './Comments/comments'
import MakePost from './MakePost/makePost'
import pic from "../../../../assets/images/postimg.png"
import FeedSidepage from './FeedsidePage'
import postImg1 from "../../../../assets/images/postImg2.png"
import postImg2 from "../../../../assets/images/postImg3.png"
import  comment1 from "../../../../assets/images/commentImg1.jpeg"
import  comment2 from "../../../../assets/images/commentImg2.jpeg"
import  comment3 from "../../../../assets/images/commentImg3.jpeg"
import { fetchAllPostsAction } from '../../../../Actions/Posts.Action'
import { useSelector, useDispatch } from "react-redux"
import SocialMessenger from '../../SocialMessenger'
import chatImg1 from "../../../../assets/images/chatImg1.png"
import chatImg2 from "../../../../assets/images/chatImg2.png"
import chatImg3 from "../../../../assets/images/user1.png"



const chats=[
  {
      img:chatImg1 ,
      name:"Jane Cooper"

  },
  {
      img:chatImg2,
      name:"Esther Howard"

  },
  {
      img:chatImg3,
      name:"Cody Fisher"

  }

]


export default function Feeds() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllPostsAction())
  },[])
  
   const {loading,success,error,posts} = useSelector(state=>state.posts)

  console.log(loading,success,error,posts,"feeds")

  //  const postArray=posts.posts
  //  console.log(postArray)
  console.log(posts?.posts,"soc")
   const postArray=posts?.posts
  
   const comments=[{}]


  return (
    <div className='feeds-div'>

        <div className='feeds-comments'>
            < MakePost pic={ pic } btnName={"Post"} />
             < Comments  comments={comments} posts={postArray} />
        </div>
        <div className='feeds-sidepage'>
          < FeedSidepage />
           <SocialMessenger  chats={chats} />
        </div>
     
    </div>
  )
}
