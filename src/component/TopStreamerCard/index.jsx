import "./topstreamer.scss";
import { GiDiamondTrophy } from "react-icons/gi";
import { MdVerified, MdAddCircleOutline } from "react-icons/md";
import { BiDotsVertical } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

import { useState, useEffect, useRef } from "react";

const TopStreamerCard = () => {
  const [options, setOptions] = useState(false);

  const optionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef?.current?.contains(event.target)) {
        setOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsRef]);

  return (
    <div className="top-streamer-card">
      <div className="trophyandname">
        <GiDiamondTrophy />
        <div className="nameandpic">
          <div className="online-image">
            <img src="/assets/images/joystick-user.png" alt="user" />
            <div className="green-dot"></div>
          </div>
          <div className="name">
            <span>
              <p>Scott Devonski</p>
              <MdVerified />
            </span>
            <p>2 mins ago</p>
          </div>
        </div>
      </div>
      <div className="achievements">
        <p>12.5k Followers</p>
        <div className="badge">455 contents streamed </div>
        <div className="stream-card-options">
          <BiDotsVertical onClick={() => setOptions(true)} />
          <div className={`options ${options ? "show" : ""}`} ref={optionsRef}>
            <div className="flex-opt">
              <AiOutlineEye />
              <p>View Profile</p>
            </div>
            <div className="flex-opt">
              <MdAddCircleOutline />
              <p>Follow</p>
            </div>
            <div className="flex-opt">
              <IoNotificationsOutline />
              <p>Turn on notification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStreamerCard;
