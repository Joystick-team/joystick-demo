import { HiSignal } from "react-icons/hi2";
import "./trendingcard.scss";

const TrendingCard = () => {
  return (
    <div
      className="trending-card"
      style={{
        backgroundImage: "url(/assets/images/fortnite.jpg)",
      }}
    >
      <div className="card-details">
        <div className="img-name">
          <img src="/assets/images/joystick-user.png" alt="your-name" />
          <div>
            <p>Wade Fox</p>
            <p>12.5k Followers</p>
          </div>
        </div>
        <div className="live-badge">
          <p>Live</p>
          <HiSignal />
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
