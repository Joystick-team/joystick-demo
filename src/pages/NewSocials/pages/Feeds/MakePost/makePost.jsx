import React,{useState,useRef} from 'react'
import "./makepost.scss"
import { useSelector, useDispatch } from "react-redux"
import {AiOutlinePicture} from "react-icons/ai"
import {BiVideoPlus} from "react-icons/bi"
import {CgFileDocument} from "react-icons/cg"
import LoadingButton from '../../../../../component/LoadingButton'
import axios from 'axios' 
import {AiOutlineClose} from "react-icons/ai"

export default function MakePost({pic,btnName}) {
  const [postText,setPostText]=useState("")
  const {userToken} = useSelector(state=>state.signin)


  const [fileUrl, setFileUrl] = useState({
    src: "",
    alt: "upload an image/Video",
    });

    const [file, setFile] = useState("");
  


   const hiddenFileInput = useRef(null)

    const handleClick = event => {
        event.preventDefault()
        hiddenFileInput.current.click()
    }

      const handleChange = e => {
          const fileUploaded = e.target.files[0]
          if (fileUploaded) {
            setFileUrl({
                  src: URL.createObjectURL(fileUploaded),
                  alt: fileUploaded.name,
              });
              setFile(fileUploaded)
          }
          // handleFile(fileUploaded)
      }

      const handleRemoveFile = () => {
          setFile()
          setFileUrl({
            src: "",
            alt: "",
          })
          // handleFile(null)
      }




  const createPost=async()=>{
    console.log("creatibg post")
    console.log(postText)
    console.log(userToken?.access_token,"token")
    
    const formData = new FormData();
    formData.append('file', file);
    console.log(file)
    formData.append('text', postText);
    console.log(postText)
    console.log(formData)
    const config = {
       headers: {
        'Content-Type': 'multipart/form-data',
           Authorization: `Bearer ${userToken?.access_token}`
       }
     }

     const res = await axios.post(
       "https://api.joysticklabs.io/api/v1/post",
     
       formData ,
       config
     )

    console.log(res,"resss")
     setPostText("")
     setFileUrl({
      src: "",
      alt: "",
    })

 }


  return (
    <div className='makepost'>
        <div className='post-div'>
            <div className='write-post'>
              <div className='write-post-top'>
              <img src={pic} className="post-img"/>

            <textarea 
              placeholder='Write something here ...'
              className='post-text'
              onChange={(e)=>setPostText(e.target.value)}
              name="postText"
              value={postText}
            />
              </div>
            
              {fileUrl.src==""?
                ""
                :
                <div className='view-post-img-div'>
                    <h5 onClick={ handleRemoveFile}><AiOutlineClose /></h5>
                    <main className='view-img'>
                      <img src={fileUrl?.src} className=""/>
                    </main>
                 
                </div>

              }
            </div>
            <div className='publish-post'>
               <main className='post-attachment'>
                   <h5>
                  
                      <AiOutlinePicture />
                      <span onClick={handleClick}>Add a photo</span>
                     
                 
                      <input className=''
                          type="file"
                          ref={hiddenFileInput}
                          onChange={handleChange}
                      />
                   </h5>
               
                  <h5>
                      <BiVideoPlus />
                      <span>Add a video</span>
                       <input className=''
                        type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                       
                       />
                   </h5>
             

           
                   <h5>
                      {/* <CgFileDocument/> */}
                      <span>Create an event</span>
                       <input className=''
                          type="file"
                          ref={hiddenFileInput}
                          onChange={handleChange}
                        />
                   </h5>
               </main>
               <div  onClick={createPost}>
                  <LoadingButton type='submit' title={btnName} variant='red'  className='publish-btn'
               
               />
               </div>
             
            </div>
           
        </div>
    </div>
  )
}
