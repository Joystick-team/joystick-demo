import React, { useState } from "react";
import { BsCameraReelsFill } from "react-icons/bs";
import TrendingCard from "../../component/TrendingCard";
import LiveStreamsCard from "../../component/LiveStreamsCard";
import { FaFilter } from "react-icons/fa";
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
              className={activeTab === tab ? "active" : ""}
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

      <div className="livestream-grid">
        <div className="view-all">
          <p>View All</p>
          <div className="filter">
            <FaFilter />
            <p>Filter</p>
          </div>
        </div>
        <div className="live-grid-items">
          <LiveStreamsCard />
          <LiveStreamsCard />
          <LiveStreamsCard />
          <LiveStreamsCard />
          <LiveStreamsCard />
          <LiveStreamsCard />
          <LiveStreamsCard />
        </div>
      </div>
    </div>
  );
};

export default Livestream;
