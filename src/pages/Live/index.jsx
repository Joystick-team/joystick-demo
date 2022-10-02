import React, {useState, useEffect} from 'react'
import VideoPlayer from '../../component/VideoPlayer'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
import Pagination from './Pagination';
import AllRooms from './AllRooms';

export default function Livescream() {
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [allRoom, setAllRoom] = useState([])
  const [room, setRoom] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)
  const navigate = useNavigate()

  const getAllRoom = async()=>{
    try {
      const res = await axios.get(`${api.test_url}/api/v1/room`)
      setAllRoom(res.data.message.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getAllRoom()
  }, [])

  const lastPageIndex = currentPage * postPerPage
  const firstPageIndex = lastPageIndex - postPerPage
  const currentPost = (allRoom)?.slice(firstPageIndex, lastPageIndex)

  console.log(allRoom)
  const toggleModal=()=>{
      setModal(!modal)
  }


  const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    try{
      const res = await axios.post(`${api.test_url}/api/v1/room/create-room`, {room_name: room})
      if(res.data.data.info){
        setMessage(res.data.data.info)
      }
      else{
        setMessage('room created')
        navigate(`/livestream/${room}`, { state: {token: res.data.data2.token } });
      }
      setIsLoading(false)
    }catch(err){
      console.log(err.response.data);
      setIsLoading(false)
    }
  }
  return (
    <div className='livescream'>
      {/* <Layout>  */}
        <div className="main"> 
          <div className="btn-live-container">
            <button className='btn-live mt-2' onClick={toggleModal}>
              Go Live
            </button>
          </div>
          {allRoom.length > 0 ? (
            <>
              <AllRooms allRoom={allRoom}/>
              <div className='row mt-3'>
                <Pagination
                postPerPage={postPerPage}
                totalPosts={allRoom.length} />
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
                        {message && <Alert variant='danger' className='text-center'>{message}</Alert>}
                        <form className="mt-2" onSubmit={(v)=> handleSubmit(v)}>
                            <div className='mt-2'>
                              <div className='form-group'>
                                <input type='text' 
                                onChange={(e)=> setRoom(e.target.value)}
                                className='form-control'
                                placeholder='Meeting-name'
                                />
                              </div>
                              <div className='form-group'>
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
