import { BsEyeFill } from "react-icons/bs";
import { HiSignal } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";
import { BiDotsVertical } from "react-icons/bi";
import { IoWalletOutline, IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineEye, AiOutlineMinusCircle } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import "./livestreamscard.scss";

const LiveStreamsCard = () => {
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
    <div className="live-card">
      <div className="position-card">
        <img src="/assets/images/call-of-duty.jpg" alt="call-of-duty" />
        <div className="view-count">
          <BsEyeFill />
          <p>24.8k</p>
        </div>

        <div className="live-badge">
          <p>Live</p>
          <HiSignal />
        </div>
      </div>

      <div className="live-details">
        <div className="details">
          <img src="/assets/images/joystick-user.png" alt="user" />
          <div>
            <span className="name">
              <p>Scott Devonski</p>
              <MdVerified />
            </span>
            <p>NBA 2K22 Demo Gameplay</p>
          </div>
        </div>
        <div className="options-btn">
          <BiDotsVertical onClick={() => setOptions(true)} />
          <div className={`options ${options ? "show" : ""}`} ref={optionsRef}>
            <div className="flex-opt">
              <IoWalletOutline />
              <p>Tip</p>
            </div>
            <div className="flex-opt">
              <AiOutlineEye />
              <p>View Profile</p>
            </div>
            <div className="flex-opt">
              <AiOutlineMinusCircle />
              <p>Unfollow</p>
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

export default LiveStreamsCard;
