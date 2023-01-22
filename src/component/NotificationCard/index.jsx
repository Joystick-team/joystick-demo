import React from "react";
import { templates } from "./templates";
// import moment from "moment/moment";
import "./card.scss";

const NotificationCard = ({ notification }) => {
  return (
    <div className="notification-card">
      <div className="notify-body">
        <div className={templates[notification.type].className}>
          {templates[notification.type].icon}
        </div>
        <div className="notify-contents">
          <div className="profile-pics">
            <img src="/assets/images/joystick-user.png" alt="profile-pic" />
          </div>
          <div className="notify-details">
            <p>{notification.message}</p>
            <p>{moment(notification.created_at).fromNow()}</p>
          </div>
        </div>
      </div>

      {templates[notification.type].follow_btn && (
        <div className="follow-btn">
          <button className="follow">Follow</button>
        </div>
      )}
    </div>
  );
};

export default NotificationCard;
