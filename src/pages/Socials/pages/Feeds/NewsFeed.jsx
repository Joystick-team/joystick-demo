import React,{useState, useRef, useEffect} from 'react';
import axios from 'axios';
import { RWebShare } from "react-web-share";
import { message } from 'antd';
import  { default as api } from '../../../../config/config.json'
import Dropdown from 'react-bootstrap/Dropdown';
import Comments from './Comments';
import { BsFillPauseFill, BsFillPlayFill, BsVoicemail } from 'react-icons/bs'
import VideoPlayer from '../../../../component/VideoPlayer';
import PaginationRange from '../../../../component/PaginationComponet/paginationRange';
import { format } from 'timeago.js'




function NewsFeed(props) {
    const [data, setData] = useState([])
    const [isLiked, setIsLiked] = useState(false)
    const [showComment, setShowComment] = useState({})
    const [file, setFile] = useState();
    const [copySuccess, setCopySuccess] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [defaultPage, setDefaultPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(4)
    const lastPageIndex = currentPage * postPerPage
    const firstPageIndex = lastPageIndex - postPerPage
    const currentPost = (data)?.slice(firstPageIndex, lastPageIndex)
    const [messageApi, contextHolder] = message.useMessage();


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

    const getData = async()=>{
        const token = localStorage.getItem('userToken')
        var config = {
            method: 'get',
            url: `${api.url}/post/get-all-posts`,
            headers: { Authorization: `Bearer ${token}` },
          };
        try {
            const res = await axios(config)
            console.log(res.data)
            setData(res.data.posts)
        } catch (error) {
            console.log(error.response.data)
        }
      }
    
      useEffect(() => {
        getData()
      }, [isLiked])

      const textAreaRef = useRef(null);

      function copyToClipboard(e, url){
        e.stopPropagation()
        navigator.clipboard.writeText(url)
        setCopySuccess('copied')
        setTimeout(()=>{
            setCopySuccess('')
            e.dispatchEvent( e )
        }, 3000)
      };

    const handleLike = async(id)=>{
        const token = localStorage.getItem('userToken')
        var config = {
            method: 'post',
            url: `${api.url}/post/like-post/${id}`,
            headers: { Authorization: `Bearer ${token}` },
          };
        try {
            const res = await axios(config)
            setIsLiked(!isLiked)
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const handleDeletePost = async(id)=>{
        const token = localStorage.getItem('userToken')
        var config = {
            method: 'delete',
            url: `${api.url}/post/delete-post/${id}`,
            headers: { Authorization: `Bearer ${token}` },
          };
        try {
            const res = await axios(config)
            setIsLiked(!isLiked)
            messageApi.open({
                type: 'success',
                content: res.data.message,
              });
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: error.response.data.message,
              });
        }
    }

    const showCardComment =(id)=>{
        setShowComment({
            ...showComment,
            [id]: !showComment[id]
        });
    }

    const disp = currentPost?.map((d,i)=>{
        return(
            <div className='col-12 mt-3' key={d.id}>
                <div className="card carder post-header">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-9">
                                <div className="d-flex flex-start align-items-center">
                                    <img className="rounded-circle shadow-1-strong me-3"
                                      src={"assets/images/userAvarta.png"}  alt="Profile-picture" width="60"
                                      height="60" />
                                    <div>
                                      <h6 className="fw-bold text-primary mb-1">{d.user.username}</h6>
                                      <p className="text-muted small mb-0">
                                      <small>{format(d.created_at)}</small> 
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
                                        {localStorage.getItem('user_id') === d.user.id && 
                                            <Dropdown.Item onClick={()=>handleDeletePost(d.id)}>Delete Post</Dropdown.Item>     
                                        }
                                        <Dropdown.Item onClick={(e)=>copyToClipboard(e,`${window.location.href}/${d.id}`)}>
                                            Copy link <small>{copySuccess}</small>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <p className="card-text mb-2">
                                {d.text}
                            </p>
                            {checkURL(d.url) === 'isImage' &&
                                <img className='img-fluid'
                                src={d.url}  alt="image-content" /> 
                            }
                            {checkURL(d.url) === 'isVideo' &&
                                <>
                                    <div className="live-video">
                                    <VideoPlayer source={d.url} width={'100%'}  />
                                    </div>
                                </> 
                            }
                        </div>
                        <div className="row mt-3">
                            <div className="col-7 offset-5 text-right">
                               <span className='mr-3'>
                                  {d.likes== null ? <>{0}</> : <>{d.likes.length}</>} Likes
                               </span>  <>{d.comment.length}</> Comments
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <span style={{cursor:"pointer"}} onClick={()=> handleLike(d.id)}>
                                    <i className="fa fa-heart mr-2" aria-hidden="true" 
                                    style={{color: `${d.likes?.find(el => el === localStorage.getItem("user_id"))  ? "red" : "grey"}`}}
                                    ></i>Like
                                </span>
                            </div>
                            <div className="col-4">
                                <span style={{cursor:"pointer"}} onClick={()=>showCardComment(i)}>
                                    <i className="fa fa-comment mr-2" aria-hidden="true"></i>Comment       
                                </span>
                            </div>
                            <div className="col-4">
                                <RWebShare
                                    data={{
                                    text: "Like humans, flamingos make friends for life",
                                    url: `${window.location.href}/${d.id}`,
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
                        {!!showComment[i] &&
                            <div className="row d-flex mt-3 justify-content-center">
                                <Comments comment= {d.comment} 
                                user_id = {d.user.id}
                                username={d.user.username} 
                                id ={d.id} isLiked={isLiked}
                                setIsLiked = {setIsLiked}/> 
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    })
    return (
            <div className="row m-1">
                {contextHolder}
                {disp}
                <div className='pagination-container mt-2'>
                        <PaginationRange 
                          firstPosts={defaultPage}
                          totalPosts={data.length} 
                          totalPage={data.length/postPerPage}
                          postPerPage={postPerPage} 
                          // displayPages={3}
                          setCurrentPageIndex={setCurrentPage}
                          setCurrentPost={setCurrentPage}
                          currentPage={currentPage}
                          active={currentPage}
                        />
                    </div>
            </div>
    );
}

export default NewsFeed;