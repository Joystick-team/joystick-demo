import React, { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import DailyIframe from "@daily-co/daily-js";
import styled from "styled-components";
import  { default as api } from '../../config/config.json'
import axios from "axios";
import PasscodeModal from "./PasscodeModal";

const CALL_OPTIONS = {
  iframeStyle: {
    width: "100%",
    height: "100%",
    border: "1px solid #e6eaef",
    background: "#000000",
    borderRadius: "6px 6px 0 0",
  },
  showLeaveButton: true,
  showFullscreenButton: true,
};

const DEFAULT_HEIGHT = 700;


const WebinarCall = (props) => {
 const videoRef = useRef(null);
 const [height, setHeight] = useState(DEFAULT_HEIGHT);
 const [toggle, setToggle]= useState(false)
 const [state, setState] = useState({privacy: '', pass_code :''});
 const [modal, setModal] = useState(false);
 const [callFrame, setCallFrame] = useState(null);
 const [error, setError] = useState('');
 const navigate = useNavigate()
 

 let {url} = useParams()
 

 const toggleModal=()=>{
  setModal(!modal)
 }
 const token = localStorage.getItem('meeting-token')
 const updateSize = useCallback(() => {
  let timeout;
  if (!videoRef?.current) return;

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    setHeight((videoRef?.current?.clientHeight || 700) * 0.75);
  }, 100);
}, [videoRef]);

 const leftMeeting = useCallback(async() => {
   try {
    var config = {
      method: 'delete',
      url: `${api.url}/room/${url}`,
      headers: { Authorization: `Bearer ${token}` }
    };
    if(token){
      const res = await axios(config)
      localStorage.clear('meeting-token')
      window.alert(
        "Are you sure you want to leave?"
      );
      navigate('/livestream');
    }
    else{
      navigate('/livestream');
    }
   } catch (error) {
      console.log('something went wrong')
   }
   callFrame.destroy();
}, [callFrame]);

const handleError = useCallback((err) => {
  if (err && err.action === "error" && err.errorMsg) {
    setError(err.errMsg);
  }
  console.error("error", err);
}, []);


const createAndJoinCallFrame = useCallback(async () => {
  const base_url = "https://iseru.daily.co"
  if (!videoRef || !videoRef?.current || callFrame) return;
    CALL_OPTIONS.url = token ? `${base_url}/${url}?t=${token}` : `${base_url}/${url}`;
    try {
      const newCallFrame = await DailyIframe.createFrame(
        videoRef.current,
        CALL_OPTIONS
      )
      newCallFrame
      .on("left-meeting", leftMeeting)
      .on("error", handleError)
      await newCallFrame.join()
      updateSize()
    } catch (err) {
      console.error(err);
    }


 }, [ videoRef, callFrame, updateSize, handleError, leftMeeting]);

 useEffect(() => {
  let priv = false
  if(priv) toggleModal()
  else return
  }, []);
 useEffect(() => {
  window.addEventListener("resize", updateSize);
  return () => window.removeEventListener("resize", updateSize);
  }, [updateSize]);

  const getRoom = async()=>{
    const token = localStorage.getItem('userToken')
    var config = {
      method: 'get',
      url: `${api.url}/room/${url}`,
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      const result = await axios(config)
      if(result.data.privacy === 'private'){
        toggleModal()
      }
      else{
        return
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getRoom()
    if (callFrame) return;
    createAndJoinCallFrame();
  }, [createAndJoinCallFrame, callFrame]);




 return (
  <div className='mt-4'>
    <VideoContainer height="500">
       <CallFrame ref={videoRef} />
     </VideoContainer>
     <PasscodeModal toggleModal={toggleModal} modal={modal} url={url}/>
  </div>
);
};


const ErrorText = styled.div`
margin: 0 1rem;
`;
const VideoContainer = styled.div`
 margin: auto;
 width: 100%;
//  margin-top: 50px;
 max-width: 1000px;
 height: 100vh;
`;
const CallFrame = styled.div`
 width: 100%;
 height: 100%;
`;



export default WebinarCall;