import React from 'react'
import Intro from './Intro'
import "./posts.scss"
import PlayedGames from './PlayedGames'
import axie from "../../../../../../assets/images/axie.png"
import MakePost from '../../../Feeds/MakePost/makePost'
import pic from "../../../../../../assets/images/creator3.png"
import Comments from '../../../Feeds/Comments/comments'
import  comment1 from "../../../../../../assets/images/commentImg1.jpeg"
import postImg1 from "../../../../../../assets/images/postImg2.png"

const playedGames=[
  {
    img:axie,
    name:"Axie Infinity"
  },
  {
    img:axie,
    name:"Axie Infinity"
  },
  {
    img:axie,
    name:"Axie Infinity"
  }
]


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
  }
]


export default function Posts() {
  return (
    <div className='profile-post'>
        <Intro />
        <PlayedGames   playedGames={ playedGames}/>
        <MakePost  pic={ pic } btnName={" Post"}/>
        <Comments  comments={comments}/>
      </div>
  )
}
