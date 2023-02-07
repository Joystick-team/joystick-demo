import React, { useState } from "react";
import { BsCameraReelsFill } from "react-icons/bs";
import TrendingCard from "../../component/TrendingCard";
import LivestreamTab from "./LivestreamTab";
import CurrentlyOnlineTab from "./CurrentlyOnlineTab";
import TopStreamersTab from "./TopStreamersTab";
import GoLive from "./GoLive";
import LiveModal from "../../component/LiveModal";
import "./livestream.scss";
import { useCreateStream} from '@livepeer/react';

const Livestream = () => {
  const TabItems = ["Live Stream", "Currently Online", "Top Streamers"];
  const [activeTab, setActiveTab] = useState("Live Stream");
  const [goLive, setGoLive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [streamName, setStreamName] = useState('');
  const {
      mutate: createStream,
      data: stream,
      status,
    } = useCreateStream({ name: streamName });
   
 

    const createLivestream=async()=>{
     
      createStream?.();
     
     }

      console.log(stream)

  return (
    <div className="livestream">
      <LiveModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setActiveTab={setActiveTab}
        setGoLive={setGoLive}
        createLivestream={createLivestream}
        setStreamName={setStreamName}
        stream={stream}
      />
      <div className="tabsandlive">
        <div className="tabs">
          {TabItems.map((tab, i) => (
            <button
              key={i}
              className={activeTab === tab ? "activeTab" : ""}
              onClick={() => {
                setActiveTab(tab);
                setGoLive(false);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="go-live" onClick={() => setModalOpen(true)}>
          <div className="live-icon">
            <BsCameraReelsFill />
          </div>
          <p>Go live</p>
        </div>
      </div>

      {!goLive && (
        <div className="trending">
          <h3>Trending</h3>
          <div className="trending-slide">
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
          </div>
        </div>
      )}

      {activeTab === "Live Stream" ? (
        goLive ? (
          <GoLive stream={stream}/>
        ) : (
          <LivestreamTab />
        )
      ) : activeTab === "Currently Online" ? (
        <CurrentlyOnlineTab />
      ) : (
        <TopStreamersTab />
      )}
    </div>
  );
};

export default Livestream;
