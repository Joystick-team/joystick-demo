import React, {useState, useEffect} from 'react'
import VideoPlayer from '../../component/VideoPlayer';
import { Tab, Tabs } from 'react-bootstrap';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AppContextInit } from '../../context/AppContext'
// import GameVideo from '../../assets/videoclips/games.mp4'
import GameVideo from '../../assets/videoclips/BirdVideo.mp4'
import  { default as api } from '../../config/config.json'
// import GameVideo from '../../assets/videoclips/car.mp4'
import livegamecover from '../../assets/images/livegamecover.png'
// import { ReactVideoPlayer } from '../../component/VideoPlayer'

import { BsFillPauseFill, BsFillPlayFill, BsVoicemail } from 'react-icons/bs'
import './livestream.scss'
import ProfileDetails from '../../component/ProfileDetails'
import axios from 'axios';
import AllRooms from './AllRooms';
import PaginationRange from '../../component/PaginationComponet/paginationRange';
import History from './History';

export default function Livescream() {
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState({success:'', failure:''})
  const [isLoading, setIsLoading] = useState(false)
  const [state, setState] = useState({privacy: 'public'})
  const [allRoom, setAllRoom] = useState([])
  const [history, setHistory] = useState([])
  const [room, setRoom] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [defaultPage, setDefaultPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(4)
  const navigate = useNavigate()

  const getAllRoom = async()=>{
    const token = JSON.parse(localStorage.getItem('userToken')).access_token
    var config = {
      method: 'get',
      url: `${api.url}/room/live-stream/all`,
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
  const getUserHistory = async()=>{
    const token = JSON.parse(localStorage.getItem('userToken')).access_token
    try {
      var config = {
        method: 'get',
        url: `${api.url}/room/live-stream/user`,
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios(config)
      console.log(res.data)
      setHistory(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getAllRoom()
    getUserHistory()
    return () => {}
  }, [])

  const lastPageIndex = currentPage * postPerPage
  const firstPageIndex = lastPageIndex - postPerPage
  const currentPost = (allRoom)?.slice(firstPageIndex, lastPageIndex)
  const historyPost = history?.slice(firstPageIndex, lastPageIndex)


  const toggleModal=()=>{
      setModal(!modal)
  }


  const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    console.log(state)
    const token = JSON.parse(localStorage.getItem('userToken')).access_token
    if(!token){
      return setMessage({failure: "User login is required!!"})
    }
    try{
      var config = {
        method: 'post',
        url: `${api.url}/room`,
        headers: { Authorization: `Bearer ${token}` },
        data: state
      };
      const res = await axios(config)
      setMessage({success: 'room created'})
      console.log(res.data)
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
          <div className="btn-live-container">
            <button className='btn-live mt-2 mb-3' onClick={toggleModal}>
              Go Live
            </button>
          </div>
          <div className="stream-tab">
            <div className="row">
              <div className='col-12'>
                <Tabs
                defaultActiveKey="post"
                transition={false}
                id="noanim-tab-example"
                className="mb-1 pt-2 pl-2"
                >
                <Tab eventKey="post" title="Live Stream">
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
                        <div className="live-video">
                          <VideoPlayer source={GameVideo} width={'100%'} coverpicture={livegamecover} />
                        </div>
                        <div className="video-icons">
                          <span className="video-icons-one" style={{color: 'white'}}> <BsFillPlayFill /></span>
                          <span><BsFillPauseFill /></span>
                          <span><BsVoicemail /></span>
                        </div>
                      </>
                    )}
                </Tab>
                <Tab eventKey="feeds" title="Currently Online">
                  {history.length >0?
                  <>
                    <History history={historyPost}/>
                    <div className='pagination-container mt-2'>
                        <PaginationRange 
                          firstPosts={defaultPage}
                          totalPosts={history.length} 
                          totalPage={history.length/postPerPage}
                          postPerPage={postPerPage} 
                          // displayPages={3}
                          setCurrentPageIndex={setCurrentPage}
                          setCurrentPost={setCurrentPage}
                          currentPage={currentPage}
                          active={currentPage}
                        />
                    </div>
                  </>
                  : <h4 className='ml-4'>No history record found</h4>
                }
                </Tab>
                <Tab eventKey="feeds" title="Top Streamers">
                  {history.length >0?
                  <>
                    <History history={historyPost}/>
                    <div className='pagination-container mt-2'>
                        <PaginationRange 
                          firstPosts={defaultPage}
                          totalPosts={history.length} 
                          totalPage={history.length/postPerPage}
                          postPerPage={postPerPage} 
                          // displayPages={3}
                          setCurrentPageIndex={setCurrentPage}
                          setCurrentPost={setCurrentPage}
                          currentPage={currentPage}
                          active={currentPage}
                        />
                    </div>
                  </>
                  : <h4 className='ml-4'>No history record found</h4>
                }
                </Tab>
              </Tabs>
              </div>
            </div>
          </div>
        </div>
        <div className="side-adverts" >
        <ProfileDetails />
          The left advert/chat/friends should be written here <br />
          The left advert/chat/friends should be written here <br />
          The left advert/chat/friends should be written here <br />
          
        </div>
      {/* </Layout>  */}
      <div className="row">
            <div className="col-12">
                <Modal isOpen= {modal} toggle={toggleModal}>
                  <ModalHeader  toggle={() => toggleModal()}>
                      <h6>Create a meeting room</h6>
                  </ModalHeader>
                    <ModalBody>
                        {message.success && 
                        <Alert variant='success' className='text-center'>{message.success}</Alert>}
                        {message.failure && <Alert variant='danger' className=' text-center'>{message.failure}</Alert>}
                        <form className="mt-2" onSubmit={(v)=> handleSubmit(v)}>
                            <div className='mt-2'>
                              {/* <div className='form-group'>
                                <input type='text' 
                                onChange={(e)=> setState({...state, room_name:e.target.value})}
                                className='form-control'
                                placeholder='Meeting-name'
                                />
                              </div> */}
                              <label>Room privacy</label>
                              <div onChange={(e)=> setState({...state,privacy:e.target.value})}>
                                <input type="radio" value="public" name="privacy" checked /> Public <span>{ }</span>
                                <input type="radio" value="private" name="privacy" /> Private
                              </div>
                              <div className='form-group mt-2'>
                                <button 
                                className='btn btn-md btn-success w-100'>
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
