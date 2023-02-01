import { BiDotsVertical } from "react-icons/bi";

const LiveFriends = () => {
  const FriendsCard = ({ online }) => {
    return (
      <div className="friends-list-item">
        <div className="picsandname">
          <img src="/assets/images/joystick-user.png" alt="friend" />
          <div>
            <p>Annette Black</p>
            <p>{online ? "Online" : "Offline"}</p>
          </div>
        </div>
        <div className={online ? "online" : "offline"}></div>
      </div>
    );
  };

  return (
    <div className="live-friends">
      <div className="friend-menu">
        <p>Friends</p>
        <BiDotsVertical />
      </div>

      <div className="friend-list">
        <FriendsCard online />
        <FriendsCard />
        <FriendsCard />
      </div>
    </div>
  );
};

export default LiveFriends;
