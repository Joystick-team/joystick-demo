import React, { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import DailyIframe from "@daily-co/daily-js";
import styled from "styled-components";
import  { default as api } from '../../config/config.json'
import axios from "axios";

const CALL_OPTIONS = {
  iframeStyle: {
    width: "100%",
    height: "100%",
    border: "1px solid #e6eaef",
    borderRadius: "6px 6px 0 0",
  },
  showLeaveButton: true,
  showFullscreenButton: true,
};

const DEFAULT_HEIGHT = 700;


const WebinarCall = (props) => {
 const videoRef = useRef(null);
 const [height, setHeight] = useState(DEFAULT_HEIGHT);
 const [callFrame, setCallFrame] = useState(null);
 const [error, setError] = useState('');
 const navigate = useNavigate()
 const { state } = useLocation();

 let {url} = useParams()

 const { token} = state || {};
 // handles setting the iframe's height on window resize to maintain aspect ratio
 const updateSize = useCallback(() => {
  let timeout;
  if (!videoRef?.current) return;

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    setHeight((videoRef?.current?.clientHeight || 700) * 0.75);
  }, 100);
}, [videoRef]);

 const leftMeeting = useCallback(() => {
   window.alert(
     "Are you sure you want to leave?"
   );
   navigate('/livestream');
   callFrame.destroy();
}, [callFrame]);

const handleError = useCallback((err) => {
  if (err && err.action === "error" && err.errorMsg) {
    setError(err.errMsg);
  }
  console.error("error", err);
}, []);


const createAndJoinCallFrame = useCallback(async () => {
  console.log({url, token})
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
  window.addEventListener("resize", updateSize);
  return () => window.removeEventListener("resize", updateSize);
  }, [updateSize]);

  useEffect(() => {
    if (callFrame) return;
    createAndJoinCallFrame();
  }, [createAndJoinCallFrame, callFrame]);




 return (
  <>
    <VideoContainer height={height}>
       <Callframe ref={videoRef} />
     </VideoContainer>
  </>
);
};


const ErrorText = styled.div`
margin: 0 1rem;
`;
const VideoContainer = styled.div`
 margin: auto;
 max-width: 1000px;
 height: ${(props) => (props.hidden ? "100" : props.height)}px;
`;
const CallFrame = styled.div`
 width: 100%;
 height: 100%;
`;



export default WebinarCall;