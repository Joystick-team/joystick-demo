import React from "react";
import LiveStreamsCard from "../../component/LiveStreamsCard";
import { FaFilter } from "react-icons/fa";

const LivestreamTab = () => {
  return (
    <>
      <div className="livestream-grid">
        <div className="live-streaming">
          <h3>Streaming Live</h3>
          <div className="view-all">
            <p>View All</p>
            <div className="filter">
              <FaFilter />
              <p>Filter</p>
            </div>
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
    </>
  );
};

export default LivestreamTab;
