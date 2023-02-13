import "./livemodal.scss";
import {BiHide} from "react-icons/bi"
import { useState } from "react";
import {AiOutlineEye } from "react-icons/ai"

const LiveModal = ({ modalOpen, setModalOpen, setActiveTab, setGoLive , createLivestream,setStreamName,stream}) => {
  const handleClick = () => {
    createLivestream()
    // setGoLive(true);
    setActiveTab("Live Stream");
    // setModalOpen(false);
  
  };

  const handledone=()=>{
        setGoLive(true);
          setModalOpen(false);
  }

const [hide,setHide]=useState(true)
const [isCopiedKey, setIsCopiedKey] = useState(false);
const [isCopiedUrl, setIsCopiedUrl] = useState(false);

const copyTextToClipboard=async(text) =>{
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}



const handleCopyClickKey = (copyText) => {
  // Asynchronously call copyTextToClipboard
  copyTextToClipboard(copyText)
    .then(() => {
      // If successful, update the isCopied state value
      setIsCopiedKey(true);
      setTimeout(() => {
        setIsCopiedKey(false);
      }, 1500);
    })
    .catch((err) => {
      console.log(err);
    });
}
  
const handleCopyClickUrl= (copyText) => {
  // Asynchronously call copyTextToClipboard
  copyTextToClipboard(copyText)
    .then(() => {
      // If successful, update the isCopied state value
      setIsCopiedUrl(true);
      setTimeout(() => {
        setIsCopiedUrl(false);
      }, 1500);
    })
    .catch((err) => {
      console.log(err);
    });
}
  
  return (
    <div className={`live-modal ${modalOpen ? "show-modal" : ""}`}>
      <div className="int-modal">
        <div className="live-cancel-btn">
          <p onClick={() => setModalOpen(false)}>x</p>
        </div>
        {stream?.name===undefined?
             <>
                <div className="flex-stream-name">
                  <p>Stream name</p>
                  <input type="text" onChange={(e)=>setStreamName(e.target.value)}/>
                </div>

                <div className="stream-period">
                  <div className="flex-stream">
                    <label htmlFor="stream-now">Stream now</label>
                    <input type="radio" name="radio" id="stream-now" />
                  </div>
                  <div className="flex-stream">
                    <label htmlFor="stream-now">Stream later</label>
                    <input type="radio" name="radio" id="stream-later" />
                  </div>
                </div>

                <div className="flex-thumbnail">
                  <p>Upload Thumbnail</p>
                  <div className="btnandaspect">
                    <button className="thumbnail-upload">Upload</button>
                    <div>
                      <i>1280 x 720 pixels</i>
                      <i>16:9 aspect</i>
                    </div>
                  </div>
                </div>

                <div className="stream-btn">
                  <button onClick={handleClick}>Start Stream</button>
                </div>
             </>

             :

             <>
               <div className="stream-details">
                     <h5>Stream details</h5>

                     <div className="stream-details-col">
                        <main className="stream-key">
                            <h5>Stream key</h5>
                            {hide?
                              <input 
                                type="password"
                              
                             
                                value={stream?.streamKey}
                           
                               />
                               :
                               <input 
                                 type="text"
                               
                              
                                 value={stream?.streamKey}
                            
                             />

                              }  
                          {hide===true&&
                            <BiHide 
                              className="hide-icon"
                               onClick={()=>setHide(false)}
                            />}  

                            {hide===false&&   
                            <AiOutlineEye 
                             className="hide-icon"
                             onClick={()=>setHide(true)}
                             />}
                          

                            <button>Reset</button>
                            <button
                              onClick={()=>handleCopyClickKey(stream?.streamKey)} 
                            >
                            {isCopiedKey ? 'Copied!' : 'Copy'}


                            </button>


                        </main>
                        <main className="stream-url">

                            <h5>Stream URL</h5>
                                <input 
                                
                                  value={"rtmp://rtmp.livepeer.com/live"}
                              
                                />
                             
                               
                                <button
                                   onClick={()=>handleCopyClickUrl("rtmp://rtmp.livepeer.com/live")} 
                                >
                                  {isCopiedUrl ? 'Copied!' : 'Copy'}
                                </button>


                        </main>
                       

                     </div>

                     <div className="stream-btn">
                         <button onClick={handledone}>Done</button>
                      </div>

               </div>


             </>
      }
    
      </div>
    </div>
  );
};

export default LiveModal;
