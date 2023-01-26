import "./topstreamer.scss";
import { GiDiamondTrophy } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { BiDotsVertical } from "react-icons/bi";

const TopStreamerCard = () => {
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
        <BiDotsVertical />
      </div>
    </div>
  );
};

export default TopStreamerCard;
