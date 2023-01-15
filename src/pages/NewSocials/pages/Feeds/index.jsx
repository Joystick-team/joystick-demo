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



const comments=[
  {
    postImg: [comment1 ],
    name:"Wide Fox",
    handle:"@wide-control",
    profileImg: postImg1 ,
    title:"The evolution of gaming around the world",
    post:"",
    likes:"228",
    comments:"228",
    date:"1 hour ago"
  },
  {
    postImg:[],
    name:"Floyd Miles",
    handle:"@wide-control",
    profileImg: postImg2,
    title:"The evolution of gaming around the world",
    post:"The Navidia Workspace team is delivering features that matter, that streamline communication and collaboration without getting in the way. ",
    date:"1 hour ago",
    likes:"4001",
    comments:"228"
  },

  {
    postImg:[  comment3 ],
    name:"Wide Fox",
    handle:"@wide-control",
    profileImg: postImg1,
    title:"The evolution of gaming around the world",
    post:" ",
    date:"1 hour ago",
    likes:"228",
    comments:"228"
  }
]




export default function Feeds() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllPostsAction())
  },[])
  
   const {loading,success,error,posts} = useSelector(state=>state.posts)

  console.log(loading,success,error,posts,"feeds")


  return (
    <div className='feeds-div'>

        <div className='feeds-comments'>
            < MakePost pic={ pic } btnName={"Publish post"} />
             < Comments  comments={comments} />
        </div>
        <div className='feeds-sidepage'>
         < FeedSidepage />
       
        </div>
     
    </div>
  )
}
