import React from "react";
import { MdVerified } from "react-icons/md";
import LiveChat from "./LiveChat";
import LiveFriends from "./LiveFriends";

const GoLive = () => {
  return (
    <div className="live">
      <div className="live-video">
        <img src="/assets/images/joystick-user.png" alt="live" />
        <p>Call of Duty Modern Warfare Live Stream</p>
      </div>

      <div className="live-profile-info">
        <div className="imgandname">
          <img src="/assets/images/joystick-user.png" alt="live" />
          <div className="name">
            <span>
              <p>Scott Devonski</p>
              <MdVerified />
            </span>
            <p>2 mins ago</p>
          </div>
        </div>
        <button className="follow-btn">Follow</button>
      </div>

      <div className="live-interaction">
        <LiveChat />
        <LiveFriends />
      </div>
    </div>
  );
};

export default GoLive;
