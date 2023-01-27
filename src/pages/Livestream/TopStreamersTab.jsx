import React from "react";
import TopStreamerCard from "../../component/TopStreamerCard";

const TopStreamersTab = () => {
  return (
    <div className="top-streamers">
      <h3>Top Streamers</h3>
      <div className="streamer-list">
        <TopStreamerCard />
      </div>
    </div>
  );
};

export default TopStreamersTab;
