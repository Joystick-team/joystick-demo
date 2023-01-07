import React from "react";
import { BiSearch, BiDotsVertical } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import "./activefriends.scss";

const ActiveFriends = () => {
  const ActiveFriendsProfileCarousel = () => {
    return (
      <div className="profile">
        <div className="pics"></div>
        <p className="profile-name">Scott</p>
      </div>
    );
  };

  const FriendsOnline = () => {
    return (
      <div className="flex-online">
        <div className="profile-details">
          <img src="/assets/images/joystick-user.png" alt="Wade Warren" />
          <p>Wade Warren</p>
        </div>
        <GoPrimitiveDot color="#69C40F" />
      </div>
    );
  };
  return (
    <div className="friends">
      <div className="friends-container">
        <div className="search-friends">
          <BiSearch />
          <input type="text" placeholder="Search friends !" />
        </div>
        <div className="friends-profile-pics">
          <ActiveFriendsProfileCarousel />
          <ActiveFriendsProfileCarousel />
          <ActiveFriendsProfileCarousel />
          <ActiveFriendsProfileCarousel />
        </div>
        <div className="friends-online">
          <div className="friends-menu">
            <p>Friends Online</p>
            <BiDotsVertical />
          </div>
          <div className="friend-list">
            <FriendsOnline />
            <FriendsOnline />
            <FriendsOnline />
            <FriendsOnline />
            <FriendsOnline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveFriends;
