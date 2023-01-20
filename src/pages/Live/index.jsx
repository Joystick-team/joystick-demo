import React, {useState, useEffect} from 'react'
import VideoPlayer from '../../component/VideoPlayer';
import { Tab, Tabs } from 'react-bootstrap';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GameVideo from '../../assets/videoclips/BirdVideo.mp4'
import  { default as api } from '../../config/config.json'
import TrendingStreams from './Trending'
import './livestream.scss'
import ProfileDetails from '../../component/ProfileDetails'
import axios from 'axios';
import AllRooms from './AllRooms';
import PaginationRange from '../../component/PaginationComponet/paginationRange';
import History from './History';
import CurrentlyOnline from './CurrentlyOnline';
import TopStreamers from './TopStreamers';

export default function Livescream() {
  const [modal, setModal] = useState(false)
  const [activeTab, setActiveTab] = useState('1')
  const [message, setMessage] = useState({success:'', failure:''})
  const [isLoading, setIsLoading] = useState(false)
  const [state, setState] = useState({privacy: 'public', name: '', file:null})
  const [preview, setPreview] = useState(null)
  const [allRoom, setAllRoom] = useState([])
  const [currentlyOnline, setCurrentlyOnline] = useState([])
  const [history, setHistory] = useState([])
  const [room, setRoom] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [defaultPage, setDefaultPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)
  const navigate = useNavigate()

  const getAllRoom = async()=>{
    const token = JSON.parse(localStorage.getItem('userToken')).access_token
    var config = {
      method: 'get',
      url: `${api.url}/room`,
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      const res = await axios(config)
      // console.log(res.data)
      setAllRoom(res?.data?.data.filter(r=> r.privacy === 'public'))
    } catch (error) {
      console.log(error)
    }
  }

  const getCurrentlyOnline = async()=>{
    const token = JSON.parse(localStorage.getItem('userToken')).access_token
    try {
      var config = {
        method: 'get',
        url: `${api.url}/room/live/online-tab`,
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios(config)
      // console.log(res.data)
      setCurrentlyOnline(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getCurrentlyOnline()
  }, [])
  
  useEffect(()=>{
    getAllRoom()
    return () => {}
  }, [])

  const lastPageIndex = currentPage * postPerPage
  const firstPageIndex = lastPageIndex - postPerPage
  const currentPost = (allRoom)?.slice(firstPageIndex, lastPageIndex)
  const currentStream = (currentlyOnline)?.slice(firstPageIndex, lastPageIndex)
  const historyPost = history?.slice(firstPageIndex, lastPageIndex)


  const toggleModal=()=>{
      setModal(!modal)
  }

  const onFileChange = (e)=>{
    setState({...state, file: e.target.files[0]})
    setPreview(URL.createObjectURL(e.target.files[0]))
}
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    console.log(state)
    const token = JSON.parse(localStorage.getItem('userToken')).access_token
    if(!token){
      return setMessage({failure: "User login is required!!"})
    }
    const formData = new FormData();
    formData.append('file', state.file);
    formData.append('room_name', state.description);
    formData.append('privacy', state.privacy);
    try{
      var config = {
        method: 'post',
        url: `${api.url}/room`,
        headers: { Authorization: `Bearer ${token}` },
        data: formData
      };
      const res = await axios(config)
      setMessage({success: 'room created'})
      // console.log(res.data)
      localStorage.setItem("meeting-token", res.data.meeting_token.token)
      // navigate(`/livestream/${res.data.room.name}`);
      setIsLoading(false)
      setTimeout(()=>{
        toggleModal()
        setMessage({success: '', failure: ''})
        window.location.reload()
      }, 5000)
    }catch(err){
      console.log(err);
      setMessage({failure: "Something went wrong"})
      setIsLoading(false)
    }
  }
  return (
    <div className='livescream'>
      {/* <Layout>  */}
        <div className="main"> 
          <div className="row">
            <div className=" col-12 text-center mt-5 mb-3 small align-self-center">
                <button className='btn btn-live'
                onClick={toggleModal}>
                <span className='mr-1'>
                  <img src='/assets/images/bi_camera-reels-fill.png'/>
                </span> Go Live
                </button>
            </div>
          </div>
          <div className="row row-tab">
            <div className="offset-md-2 col-md-8 col-12">
              <div className="card pl-3 pr-3 pt-1 pb-1">
                <div className="row">
                  <div 
                  className="col-4 p-2 text-center tabs" 
                  onClick={()=> setActiveTab('1')}
                  style={{cursor:"pointer", color: activeTab==="1" && "white",
                  background: activeTab==="1" && "#DB242D"}}>
                    Live Streams
                  </div>
                  <div className="col-4 p-2 text-center tabs"
                  onClick={()=> setActiveTab('2')}
                  style={{cursor:"pointer", color: activeTab==="2" && "white",
                  background: activeTab==="2" && "#DB242D"}}>
                    Currently Online
                  </div>
                  <div className="col-4 p-2 text-center tabs"
                  onClick={()=> setActiveTab('3')}
                  style={{cursor:"pointer" , color: activeTab==="3" && "white",
                  background: activeTab==="3" && "#DB242D"}}>
                    Top Streamers
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-12 text-right align-self-center">
              <button className='btn btn-live big'
              onClick={toggleModal}>
              <span className='mr-1'>
                  <img src='/assets/images/bi_camera-reels-fill.png'/>
                </span> Go Live
              </button>
            </div>
          </div>
          {activeTab==="1" && 
            <div className="row mt-2">
                <TrendingStreams trending={allRoom.slice(0,8)}/>
                {allRoom.length > 0 ? (
                      <>
                        <AllRooms allRoom={currentPost}/>
                        <div className='pagination-container mt-2'>
                          <PaginationRange 
                            firstPosts={defaultPage}
                            totalPosts={allRoom.length} 
                            totalPage={allRoom.length/postPerPage}
                            postPerPage={postPerPage} 
                            // displayPages={3}
                            setCurrentPageIndex={setCurrentPage}
                            setCurrentPost={setCurrentPage}
                            currentPage={currentPage}
                            active={currentPage}
                          />
                        </div>
                      </>
                    ): (
                      <>
                        <h4>No livestream record found</h4>
                      </>
                    )}
            </div>
          }
          {activeTab==="2" && 
            <div className="row mt-2">
              <TrendingStreams trending={allRoom.slice(0,8)}/>
              {allRoom.length > 0 ? (
                    <>
                      <CurrentlyOnline allOnline={currentStream}/>
                      <div className='pagination-container mt-2'>
                        <PaginationRange 
                          firstPosts={defaultPage}
                          totalPosts={currentlyOnline.length} 
                          totalPage={currentlyOnline.length/postPerPage}
                          postPerPage={postPerPage} 
                          // displayPages={3}
                          setCurrentPageIndex={setCurrentPage}
                          setCurrentPost={setCurrentPage}
                          currentPage={currentPage}
                          active={currentPage}
                        />
                      </div>
                    </>
                  ): (
                    <>
                      <h4>No active livestream found</h4>
                    </>
                  )}
          </div>
          }
          {activeTab==="3" && 
            <div className="row mt-2">
              <TrendingStreams trending={allRoom.slice(0,8)}/>
              <TopStreamers/>        
            </div>
          }
        </div>
      {/* </Layout>  */}
      <div className="row">
            <div className="col-12">
                <Modal isOpen= {modal} toggle={toggleModal}
                style={{color: "black"}}>
                  <ModalHeader  toggle={() => toggleModal()}>
                      <h6>Create a meeting room</h6>
                  </ModalHeader>
                    <ModalBody>
                        {message.success && 
                        <Alert variant='success' className='text-center'>{message.success}</Alert>}
                        {message.failure && <Alert variant='danger' className=' text-center'>{message.failure}</Alert>}
                        <form className="mt-2" onSubmit={(v)=> handleSubmit(v)}>
                            <div className='mt-2'>
                              <div className='form-group'>
                                <input type='text' 
                                onChange={(e)=> setState({...state, description:e.target.value})}
                                className='form-control'
                                placeholder='Livestream name'
                                />
                              </div>
                              <div className='form-group mt-3 text-center'>
                                  <label for="files" className="cs-upload_btn" style={{cursor:"pointer"}}>
                                  <i className="far fa-images mr-2"></i> <span>Add a</span> Thumbnail
                                  </label>
                                  <input type='file' 
                                      accept="image/*" 
                                      id="files"
                                      style={{display:'none'}}  
                                      onChange={onFileChange} required/> 
                              </div>
                              {preview && 
                                <div className='row  mt-2'>
                                    <div className='col-12 text-center '>
                                        <>
                                            <img height={100} width={150}
                                            src={[preview]}  alt="image-content" /> 
                                                <i class="fa fa-times-circle" style={{cursor: "pointer"}} onClick={()=> setPreview(null)} aria-hidden="true"></i>
                                        </>
                                      </div>
                                    </div>
                                }
                              <label>Room privacy</label>
                              <div onChange={(e)=> setState({...state,privacy:e.target.value})}>
                                <input type="radio" value="public" name="privacy" checked /> Public <span>{ }</span>
                                <input type="radio" value="private" name="privacy" /> Private
                              </div>
                              <div className='form-group mt-2'>
                                <button 
                                className='btn btn-md w-100' disabled={isLoading ? true: false}
                                style={{background: "#DB242D", color:"white"}}>
                                  {isLoading ? "Loading..." : "Create room"}
                                </button>
                              </div>
                            </div>
                                
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    </div>
  )
}
