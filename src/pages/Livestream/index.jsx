import React, { useState } from "react";
import { BsCameraReelsFill } from "react-icons/bs";
import TrendingCard from "../../component/TrendingCard";
import LivestreamTab from "./LivestreamTab";
import CurrentlyOnlineTab from "./CurrentlyOnlineTab";
import TopStreamersTab from "./TopStreamersTab";
import "./livestream.scss";

const Livestream = () => {
  const TabItems = ["Live Stream", "Currently Online", "Top Streamers"];
  const [activeTab, setActiveTab] = useState("Live Stream");

  return (
    <div className="livestream">
      <div className="tabsandlive">
        <div className="tabs">
          {TabItems.map((tab, i) => (
            <button
              key={i}
              className={activeTab === tab ? "activeTab" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="go-live">
          <div className="live-icon">
            <BsCameraReelsFill />
          </div>
          <p>Go live</p>
        </div>
      </div>

      <div className="trending">
        <h3>Trending</h3>
        <div className="trending-slide">
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </div>
      </div>

      {activeTab === "Live Stream" ? (
        <LivestreamTab />
      ) : activeTab === "Currently Online" ? (
        <CurrentlyOnlineTab />
      ) : (
        <TopStreamersTab />
      )}
    </div>
  );
};

export default Livestream;