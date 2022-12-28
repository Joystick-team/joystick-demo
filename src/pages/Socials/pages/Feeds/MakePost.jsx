import React, {useState} from 'react';
import axios from 'axios';
import socialsavatar from '../../../../assets/images/socialsavatar.png'
import styled from 'styled-components'
import  { default as api } from '../../../../config/config.json'
import { Alert } from 'react-bootstrap';
import VideoPlayer from '../../../../component/VideoPlayer';
import { message } from 'antd';

const Styles = styled.div`
        .cs-upload_btn{
            font-size: 13px;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.6);
        }
        div{
            // font-family: 'Montserrat';
        }
        .publish{
            background: #C71F1F;
            border-radius: 15.4443px;
            color: white;
            font-size: 13px !important;
        }
        .publish:hover{
            background: #ee7878;
            color: white
        }
        .big-margin{
            margin-left: 10px;
            margin-right: 0px;
        }
        textarea{
            font-size: 15.4443px;
            resize: none;
            border: none;
        }
        .br{
            border-right: 2px solid #5D5D5D;
            border-left: 2px solid #5D5D5D;
        }
        .card-inner{
            height: 62px;
            background: rgba(22, 21, 21, 0.6);
            border-radius: 7.3px;
        }
        @media (max-width: 768px) {
            .big-margin{
                margin-left: 0px;
                margin-right: 0px;
          }
          .card-inner{
            height: auto;
          }
          .sl .pl-4{
            padding-left: 10px !important
          }
          .cs-upload_btn{
            font-size: 11.4px
        }
        i{
            margin-right: 2px !important
        }
        .publish{
            font-size: 15px !important;
            text-transform: capitalize;
        }
        span{
            display: none
        }
          
        }
        @media (max-width: 820px) {
            .big-margin{
                margin-left: 0px;
                margin-right: 0px;
          }
          .card-inner{
            height: auto;
          }
          .sl .pl-4{
            padding-left: 10px !important
          }
          .cs-upload_btn{
            font-size: 11.4px
        }
        i{
            margin-right: 2px !important
        }
        .publish{
            font-size: 15px !important;
            text-transform: capitalize;
        }
         span{
            display: none
        }
          
        }
          
        `

function MakePost(props) {
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [messageApi, contextHolder] = message.useMessage();
    const handleChange= (e)=>{
        setDescription(e.target.value)
    }
    function checkURL(url) {
        let message
        if(url.match(/\.(jpeg|jpg|gif|svg|png|webp)$/) != null){
            message = 'isImage'
        }
        else if(url.match(/\.(mp4|gif|mp3)$/) != null){
            message = 'isVideo'
        }
        else{
            message = 'notfound'
        }
        console.log(message)
        return message
        }
    const onFileChange = (e)=>{
        setFile(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))
    }


    const handleSubmit= async(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', file);
        formData.append('text', description);
        const token = localStorage.getItem('userToken')
        var config = {
            method: 'post', 
            url: `${api.url}/post`,
            headers: { Authorization: `Bearer ${token}` },
            data: formData
          };
        // console.log(`${api.posturl}/post`)
        setIsLoading(true)
        try {
            const res = await axios(config)
            console.log(res.data)
            messageApi.open({
                type: 'success',
                content: res.data.message,
              });
            setTimeout(()=>{
                window.location.reload()
            }, 2000)
        } catch (error) {
            console.log(error.response.data)
            messageApi.open({
                type: 'error',
                content: error.response.data.message,
              });
            setIsLoading(false)
        }
    }
    
    return (
            <Styles>
                <div className='col-12'>
                    <div className='card post-header'>
                        <div className='card-body pl-1 pr-1'>
                            <div className='row sl'>
                                <div className='col-2 col-md-1 pl-4 pr-0'>
                                    <img loading='eager' height={'40px'} className='rounded'
                                    src={socialsavatar}  alt="Profile-picture" />
                                </div>
                                <div className='col-10 col-md-11  pl-0'>
                                    <textarea type='text' 
                                    onChange={handleChange}
                                    value={description}
                                    placeholder='Write something here .....'
                                    className='form-control shadow-none'/>
                                </div>
                            </div>
                            {preview && 
                                <div className='row  mt-2'>
                                    <div className='col-12 text-center '>
                                    {checkURL(file.name) === 'isImage' &&
                                        <>
                                            <img height={100} width={150}
                                            src={[preview]}  alt="image-content" /> 
                                                <i class="fa fa-times-circle" style={{cursor: "pointer"}} onClick={()=> setPreview(null)} aria-hidden="true"></i>
                                            <span >
                                            </span>
                                        </>
                                        
                                    }
                                    {checkURL(file.name) === 'isVideo' &&
                                        <div className='row'>
                                            <div className='col-12 col-md-6 col-8 offset-3 offset-md-4 text-center '>
                                                <VideoPlayer source={preview} width="200px"  height="100px" />
                                                <i class="fa fa-times-circle" style={{cursor: "pointer"}} onClick={()=> setPreview(null)} aria-hidden="true"></i>

                                            </div>
                                        </div> 
                                    }
                                        
                                    </div>
                                </div>
                            }
                            <div className='row big-margin mt-4'>
                                <div className='card card-inner'>
                                    <div className='card-body pl-1 pr-1'>
                                        <div className='row sl'>
                                            <div className='col-3 col-md-2 align-self-center'>
                                                <label for="files" className="cs-upload_btn">
                                                <i className="far fa-images mr-2"></i> <span>Add a</span> Photo
                                                </label>
                                                <input type='file' 
                                                    accept="image/*" 
                                                    id="files"
                                                    style={{display:'none'}}  
                                                    onChange={onFileChange} required/> 
                                            </div>
                                            <div className='col-3 col-md-2 align-self-center br'>
                                                <label for="filess" className="cs-upload_btn">
                                                <i className="fas fa-video mr-2"></i><span>Add a </span>Video
                                                </label>
                                                <input type='file' 
                                                    accept="video/*" 
                                                    id="filess"
                                                    style={{display:'none'}}  
                                                    onChange={onFileChange} required/> 
                                            </div>
                                            <div className='col-3 col-md-3 align-self-center'>
                                                <label for="fil" className="cs-upload_btn">
                                                    <i className="fas fa-file-alt mr-2"></i><span>Add a</span> Document
                                                </label>
                                                <input type='file' 
                                                    accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                                                    id="fil"
                                                    style={{display:'none'}}  
                                                    onChange={onFileChange} required/> 
                                            </div>
                                            <div className='col-3 col-md-3 offset-md-2 text-right'>
                                                <button onClick={handleSubmit}
                                                disabled={description || !isLoading ? false : true}
                                                className='btn publish mr-0 w-100'>
                                                    {isLoading ? <>Loading...</> : <><span>Publish</span> post</> }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Styles>
    );
}

export default MakePost;