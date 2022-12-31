import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { RWebShare } from "react-web-share";
import '../../socials.scss'
import  { default as api } from '../../../../config/config.json'
import Dropdown from 'react-bootstrap/Dropdown';
import Comments from './Comments';
import FriendrequestData from '../../../../component/Chats/Friendrequest/FriendrequestData';
import Chats from '../../../../component/Chats';

export default function SinglePost() {
  const [data, setData] = useState({})
  const param = useParams()
  const [showComment, setShowComment] = useState(false)

  const getData = async()=>{
    const token = localStorage.getItem('userToken')
    var config = {
        method: 'get',
        url: `${api.url}/post/get-one-post/${param.id}`,
        headers: { Authorization: `Bearer ${token}` },
      };
    try {
        const res = await axios(config)
        console.log(res.data.post)
        setData(res.data.post)
    } catch (error) {
        console.log(error.response.data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  function checkURL(url) {
    let message
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        message = 'isImage'
    }
    else if(url.match(/\.(mp4|gif|mp3)$/) != null){
        message = 'isVideo'
    }
    else{
        message = 'notfound'
    }
    return message
    }

  const handleLike = async(id)=>{
    const token = localStorage.getItem('userToken')
    var config = {
        method: 'post',
        url: `${api.url}/post/like-post/${id}`,
        headers: { Authorization: `Bearer ${token}` },
      };
    try {
        const res = await axios(config)
        // setIsLiked(!isLiked)
    } catch (error) {
        console.log(error.response.data)
    }
}
  return (
    <div className="socials container-fluid">
        <div className='main mr-2'>
                <div className="card carder post-header">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-9">
                                <div className="d-flex flex-start align-items-center">
                                    <img className="rounded-circle shadow-1-strong me-3"
                                        src={"/assets/images/userAvarta.png"}  alt="Profile-picture" width="60"
                                        height="60" />
                                    <div>
                                        <h6 className="fw-bold text-primary mb-1">{data.user?.username}</h6>
                                        <p className="text-muted small mb-0">
                                        <small>Created: {data.created_at}</small> 
                                        </p>
                                    </div>
                                    </div>
                            </div>
                            <div className='col-3  text-right align-self-center'>
                                
                                <Dropdown className='remove-arrow' drop='right'>
                                    <Dropdown.Toggle className=" icon b-0 p-0"  id="dropdown-custom-components">
                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {/* <Dropdown.Item href="#/action-1">Delete Post</Dropdown.Item> */}
                                        <Dropdown.Item href="#">Copy link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <p className="card-text mb-2">
                                {data.text}
                            </p>
                            <img className='img-fluid'
                                src={data.url}  alt="image-content" /> 
                        </div>
                        <div className="row mt-3">
                            <div className="col-7 offset-5 text-right">
                                <span className='mr-3'>
                                    {data.likes== null ? <>{0}</> : <>{data.likes.length}</>} Likes
                                </span> {data.comments  == null ? <>{0}</> : <>{data.comments.length}</>} Comments
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <span style={{cursor:"pointer"}} onClick={()=> handleLike(data.id)}>
                                    <i className="fa fa-heart mr-2" aria-hidden="true" 
                                    style={{color: `${data.likes?.find(el => el === localStorage.getItem("user_id"))  ? "red" : "grey"}`}}
                                    ></i>Like
                                </span>
                            </div>
                            <div className="col-4">
                                <span style={{cursor:"pointer"}} onClick={()=>setShowComment(!showComment)}>
                                    <i className="fa fa-comment mr-2" aria-hidden="true"></i>Comment       
                                </span>
                            </div>
                            <div className="col-4">
                                <RWebShare
                                    data={{
                                    text: "Like humans, flamingos make friends for life",
                                    url: `${window.location.href}/${data.id}`,
                                    title: "Share",
                                    }}
                                    onClick={() => console.log("shared successfully!")}
                                >
                                    <span style={{cursor:"pointer"}}><i className="fa fa-share mr-2" aria-hidden="true"></i>Share</span>
                                </RWebShare>
                                {/* <ShareSocial 
                                    url ="url_to_share.com"
                                    socialTypes={['facebook','twitter','reddit','linkedin']}
                                /> */}
                            </div>
                        </div>
                        {showComment &&
                            <div className="row d-flex mt-3 justify-content-center">
                                <Comments comment= {data.comments} username={data.user.username} id ={data.id}/>
                            </div>
                        }
                    </div>
            </div>
             </div>
            <div className={"side-adverts"} style={{flexGrow: '1'}}>
                <div className="friends-social">
                    <h5>Friends</h5>
                    {FriendrequestData.map((friend, idx) =>{
                            return <Chats 
                                        key={idx}
                                        title={friend.title}
                                        image={friend.image}
                                    />
                        })}
                {/* <SidePost /> */}
                </div>
            </div>
       
    </div>
  )
}
