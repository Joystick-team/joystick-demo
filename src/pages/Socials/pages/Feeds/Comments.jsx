import React,{useState, useEffect, useRef} from 'react'
import axios from 'axios';
import userAvarta from '../../../../assets/images/userAvarta.png'
import  { default as api } from '../../../../config/config.json'
import { message } from 'antd';
import { format } from 'timeago.js'


export default function Comment({comment, id, isLiked, setIsLiked, user_id}) {
    const [messageApi, contextHolder] = message.useMessage();
    
    const [text, setText] = useState('')
    const [editText, setEditText] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [editContent, setEditContent] = useState({})
    const refs = useRef(null)

    const handleComment = async(e)=>{
        e.preventDefault()
        const token = localStorage.getItem('userToken')
        // console.log(text)
        setIsLoading(true)
        var config = {
            method: 'post',
            url: `${api.url}/post/comment-post/${id}`,
            headers: { Authorization: `Bearer ${token}` },
            data: {text}
          };
        try {
            const res = await axios(config)
            setIsLoading(false)
            setIsLiked(!isLiked)
            messageApi.open({
                type: 'success',
                content: res.data.message,
              });
            setText('')
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: error.response.data.message,
              });
            setIsLoading(false)
        }
    }

    const showEdit = (id)=>{
        console.log(id)
        setEditContent({
            ...editContent,
            [id]: !editContent[id]
        });
    }



    const handleDelete = async(commentid)=>{
        const token = localStorage.getItem('userToken')
        var config = {
            method: 'delete',
            url: `${api.url}/post/delete-comment/${id}/${commentid}`,
            headers: { Authorization: `Bearer ${token}` },
            data: {text}
          };
        try {
            const res = await axios(config)
            setIsLoading(false)
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
            setIsLoading(false)
        }
    }
    const handleEdit = async(commentid)=>{
        const token = localStorage.getItem('userToken')
        setIsLoading(true)
        var config = {
            method: 'put',
            url: `${api.url}/post/edit-comment/${id}/${commentid}`,
            headers: { Authorization: `Bearer ${token}` },
            data: {text: editText}
          };
        try {
            const res = await axios(config)
            setIsLoading(false)
            setIsLiked(!isLiked)
            messageApi.open({
                type: 'success',
                content: res.data.message,
              });
            setEditContent({})
        } catch (error) {
            console.log(error.response.data.message)
            messageApi.open({
                type: 'error',
                content: error.response.data.message,
              });
            setIsLoading(false)
        }
    }
  return (
    <>  
        {contextHolder}
        {comment !== null || comment?.length >0 ?
            <div className="card card-comment">
                <div className="card-body scroll">
                        {comment.map((c,i)=>{
                            return(
                                <div key={c.comment_id}>
                                    <div className="d-flex flex-start align-items-center">
                                        <img className="rounded-circle shadow-1-strong me-3"
                                        src={userAvarta}  alt="Profile-picture" width="60"
                                        height="60" /> 
                                        <div>
                                        <h6 className="fw-bold text-primary mb-1">{c.user?.username}</h6>
                                        <p className="text-muted small mb-0">
                                            {format(c.date)}
                                        </p>
                                        </div>
                                    </div>
                                    {!!editContent[i] && localStorage.getItem('user_id') == user_id ?
                                        <div >
                                            <input className="mt-3 form-control  pb-0 w-100" style={{fontSize:"12px"}}
                                            defaultValue={c.text} onChange={(e)=> setEditText(e.target.value)}
                                            ref={refs} />
                                            <div className="small d-flex justify-content-start mb-3">
                                                <span className='d-flex align-items-center me-3'>
                                                    <button  className="btn btn-comment btn-sm mt-2 mb-4" disabled={isLoading ? true : false}
                                                    onClick={()=>handleEdit(c.comment_id)}>
                                                        {isLoading ? <>Loading...</> : <>Save</> }
                                                    </button>
                                                </span>
                                                <span className='d-flex align-items-center me-3' onClick={()=>setEditContent({})}>
                                                    <button  className="btn btn-primary btn-sm mt-2 mb-4" >
                                                        <>Cancel</> 
                                                    </button>
                                                </span>
                                            </div>
                                        </div>  :
                                        <p className="mt-3 mb-4 pb-0">
                                            {c.text}
                                        </p>
                                                 
                                    }
                                    {
                                        localStorage.getItem('user_id') === user_id ?
                                        <div className="small d-flex justify-content-start mb-3">
                                            <span className="d-flex align-items-center me-3" style={{cursor:"pointer"}}
                                            onClick={()=>handleDelete(c.comment_id)}>
                                                <i class="fas fa-trash-alt mr-2"></i>
                                                <p className="mb-0">Delete</p>
                                            </span>
                                            <span className="d-flex align-items-center me-3" onClick={()=>showEdit(i)}
                                            style={{cursor:"pointer"}}>
                                                <i class="far fa-edit mr-2"></i>
                                                <p className="mb-0">Edit</p> 
                                            </span>
                                        </div>
                                        :
                                        <></>

                                    }
                                </div>
                    )
                })}
                </div>
                <div className="card-footer py-3 border-0" >
                    <div className="d-flex flex-start w-100">
                        <img className="rounded-circle shadow-1-strong me-3"
                        src={userAvarta}  alt="Profile-picture" width="40"
                        height="40" />
                        <div className="form form-outline w-100" >
                        <textarea className="form-control" onChange={(e)=> setText(e.target.value)}
                        id="textAreaExample" rows="1" value={text}
                            style={{backgroun: "#fff"}}/>
                        </div>
                    </div>
                    <div className="float-end mt-2 pt-1">
                        {text.length > 0 ?
                            <button  className="btn btn-comment btn-sm" disabled={isLoading ? true : false} onClick={handleComment}>
                                {isLoading ? <>Loading...</> : <>Post comment</> }
                            </button>
                            : <></>
                        }
                    </div>
                </div>
            </div>
        :
        <div className="card card-comment">
            <div className="card-footer py-3 border-0" >
                <div className="d-flex flex-start w-100">
                    <img className="rounded-circle shadow-1-strong me-3"
                    src={userAvarta}   alt="Profile-picture" width="40"
                    height="40" />
                    <div className="form form-outline w-100" >
                    <textarea className="form-control" onChange={(e)=> setText(e.target.value)} rows="1" value={text}
                        style={{backgroun: "#fff"}}/>
                    </div>
                </div>
                <div className="float-end mt-2 pt-1">
                    {text.length > 0 ?
                        <button  className="btn btn-comment btn-sm" disabled={isLoading ? true : false} onClick={handleComment}>
                            {isLoading ? <>Loading...</> : <>Post comment</> }
                        </button>
                        : <></>
                    }
                </div>
            </div>
        </div>
        }
    </>
  )
}
