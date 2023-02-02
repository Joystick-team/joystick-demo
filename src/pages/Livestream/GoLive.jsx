import React,{useEffect,useState} from "react";
import { MdVerified } from "react-icons/md";
import LiveChat from "./LiveChat";
import LiveFriends from "./LiveFriends";
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useCreateStream,Player} from '@livepeer/react';


const GoLive = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [trigger,setTrigger] =useState(false)
  const [isLoading,setIsLoading] =useState(false)
 
    function openModal() {
        setIsOpen(true);
    }

 
    const toggleModal=()=>{
      setIsOpen(!isOpen)
     }

    const [streamName, setStreamName] = useState('');
    const {
        mutate: createStream,
        data: stream,
        status,
      } = useCreateStream({ name: streamName });
     
   

      const createLivestream=async()=>{
        setIsLoading(true)
        createStream?.();
        setIsLoading(false)
        toggleModal()
       }


    console.log(stream,"cccccc")



  return (
    <div className="live">
      <div className="live-video">
         {/* <img src="/assets/images/joystick-user.png" alt="live" /> */}
         <div  className="live-video-player">
           <Player
              title={stream?.name}
              playbackId={stream?.playbackId}
              autoPlay
              muted
            
           />
         </div>
         {stream?.playbackId ===undefined?
           <button onClick={openModal}>Create stream</button>
            :
          <p>{stream?.name}</p>
           }
         {/* <div className="live-stream-create">
          
         </div> */}
      </div>

      <div className="live-profile-info">
        <div className="imgandname">
          <img src="/assets/images/joystick-user.png" alt="live" />
          <div className="name">
            <span>
              <p>Scott Devonski</p>
              <MdVerified />
            </span>
            <p>2 mins ago</p>
          </div>
        </div>
        <button className="follow-btn">Follow</button>
      </div>

      <div className="live-interaction">
        <LiveChat />
        <LiveFriends />
      </div>
      
      <Modal isOpen= {isOpen} toggle={ toggleModal} className="modal-live">
                  <ModalHeader  toggle={() => toggleModal()}>
                      <h6>Create a meeting room</h6>
                  </ModalHeader>
                    <ModalBody>
                  
                         <form className="mt-2" >
                            <div className='mt-2'>
                              <div className='form-group'>
                                <input type='text' 
                           
                                className='form-control'
                                placeholder='Stream-name'
                                onChange={(e)=>setStreamName(e.target.value)}
                                />
                               
                              </div>
                        
                              <div className='form-group mt-2'>
                                <button 
                                className='btn btn-md btn-success w-100'
                                disabled={ status === 'loading' || !createStream}
                                onClick={createLivestream}
                                >
                                  {isLoading ? "Loading..." : "Create room"}
                                  Create a stream
                                </button>
                              </div>
                            </div>
                                
                        </form>
                    </ModalBody>
                </Modal>
      
    </div>
  );
};

export default GoLive;
