import React from "react";
import { templates } from "./templates";
import "./card.scss";

const NotificationCard = ({ title }) => {
  const message =
    title === "follow"
      ? "Brooklyn Simmons followed you"
      : title === "comments"
      ? "James commented on your photo"
      : title === "shares"
      ? "Emmanuel shared your post"
      : title === "likes"
      ? "Ronald Richards liked your photo"
      : title === "photos"
      ? "Devon Lane added a new photo"
      : "You have new notifications";

  return (
    <div className="notification-card">
      <div className="notify-body">
        <div className={templates[title].className}>
          {templates[title].icon}
        </div>
        <div className="notify-contents">
          <div className="profile-pics">
            <img src="/assets/images/joystick-user.png" alt="profile-pic" />
          </div>
          <div className="notify-details">
            <p>{message}</p>
            <p>5 mins ago</p>
          </div>
        </div>
      </div>

      {templates[title].follow_btn && (
        <div className="follow-btn">
          <button className="follow">Follow</button>
        </div>
      )}
    </div>
  );
};

export default NotificationCard;
