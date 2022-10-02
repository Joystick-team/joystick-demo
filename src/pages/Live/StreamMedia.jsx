import React, { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import DailyIframe from "@daily-co/daily-js";
import styled from "styled-components";
import  { default as api } from '../../config/config.json'
import axios from "axios";

const CALL_OPTIONS = {
  iframeStyle: {
    width: "100% !important",
    height: "100%",
    border: "1px solid #e6eaef",
    borderRadius: "6px 6px 0 0",
    boxShadow: `0 1px 2px rgba(0, 0, 0, 0.02), 0 2px 4px rgba(0, 0, 0, 0.02),
    0 4px 8px rgba(0, 0, 0, 0.02), 0 8px 16px rgba(0, 0, 0, 0.02),
    0 16px 32px rgba(0, 0, 0, 0.02)`,
  },
  showLeaveButton: true,
  showFullscreenButton: true,
  // showLocalVideo: true,
  showParticipantsBar: false,
};

const DEFAULT_HEIGHT = 700;
const DEFAULT_WIDTH = 700;

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
    setHeight((videoRef?.current?.clientHeight || 1000) * 0.75);
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
  
    // return () =>
    //     // Remove Daily event handlers
    //     newCallFrame
    //       .off("left-meeting", leftMeeting)
    //       .off("error", handleError)

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
    <FlexContainerColumn>
      <FlexContainer>
        {/* Daily video call iframe */}
        <VideoContainer height={height}>
          <CallFrame ref={videoRef} />
        </VideoContainer>
        {/* Show any error messages we're aware of */}
        {error && <ErrorText>Error: {error}</ErrorText>}
      </FlexContainer>

    </FlexContainerColumn>
  </>
);
};

const FlexContainer = styled.div`
display: flex;
align-items: stretch !important;
justify-content: center
flex-wrap: wrap;
@media (max-width: 1075px) {
flex-direction: column;
}
`;
const FlexContainerColumn = styled.div`
margin-top: 55px;
display: flex;
flex-direction: column;
@media (max-width: 1075px) {
flex-direction: column-reverse;
}
`;
const ErrorText = styled.div`
margin: 0 1rem;
`;
const VideoContainer = styled.div`
flex: 1.2;
margin: 1rem;
flex-basis: 400px;
background-color: white;
height: ${(props) => (props.hidden ? "100" : props.height)}px;
`;
const CallFrame = styled.div`
height: 100%;
width: 100%;
`;


export default WebinarCall;