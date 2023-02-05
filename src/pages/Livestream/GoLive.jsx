import React,{useEffect,useState} from "react";
import { MdVerified } from "react-icons/md";
import LiveChat from "./LiveChat";
import LiveFriends from "./LiveFriends";
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useCreateStream,Player} from '@livepeer/react';


const GoLive = ({stream}) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [trigger,setTrigger] =useState(false)
  const [isLoading,setIsLoading] =useState(false)
 
    function openModal() {
        setIsOpen(true);
    }

 
    const toggleModal=()=>{
      setIsOpen(!isOpen)
     }

  

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
        
          <p>{stream?.name}</p>
         
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
      
      
    </div>
  );
};

export default GoLive;
