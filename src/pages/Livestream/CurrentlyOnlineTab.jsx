import React from "react";

const CurrentlyOnlineTab = () => {
  const Friends = ({ online }) => {
    return (
      <div className="friends-grid-item">
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
    <>
      <div className="friends-online">
        <h3>Friends Online </h3>

        <div className="all-friends">
          <div className="view-all">
            <p>View all</p>
          </div>

          <div className="friends-grid">
            <Friends online={true} />
            <Friends online={false} />
            <Friends online={true} />
            <Friends online={false} />
            <Friends online={true} />
            <Friends online={false} />
            <Friends online={false} />
            <Friends online={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentlyOnlineTab;
