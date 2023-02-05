import "./livemodal.scss";

const LiveModal = ({ modalOpen, setModalOpen, setActiveTab, setGoLive , createLivestream,setStreamName}) => {
  const handleClick = () => {
    createLivestream()
    setGoLive(true);
    setActiveTab("Live Stream");
    setModalOpen(false);
  };

  return (
    <div className={`live-modal ${modalOpen ? "show-modal" : ""}`}>
      <div className="int-modal">
        <div className="live-cancel-btn">
          <p onClick={() => setModalOpen(false)}>x</p>
        </div>
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
      </div>
    </div>
  );
};

export default LiveModal;
