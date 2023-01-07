import React from "react";
import NotificationCard from "../../component/NotificationCard";
import ActiveFriends from "../../component/ActiveFriends";
import "./notifications.scss";

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="notifications-content">
        <div className="left-section">
          <div className="header">
            <p className="header-text">Notifications</p>
          </div>
          <div className="left-body">
            <NotificationCard title="follow" />
            <NotificationCard title="shares" />
            <NotificationCard title="photos" />
          </div>
        </div>

        <div className="right-section">
          <ActiveFriends />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
