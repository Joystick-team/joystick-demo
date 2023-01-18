import { FaUser, FaCommentAlt, FaShare } from "react-icons/fa";
import { AiFillHeart, AiOutlineTag } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import React from "react";

export const templates = {
  follower: {
    icon: <FaUser color="#005aff" />,
    className: "user-icon",
    follow_btn: true,
  },
  message: {
    icon: <FaCommentAlt color="#00A44E" />,
    className: "comments-icon",
    follow_btn: false,
  },
  tag: {
    icon: <AiOutlineTag color="#005aff" />,
    className: "user-icon",
    follow_btn: false,
  },
  // likes: {
  //   icon: <AiFillHeart color="#DB242D" />,
  //   className: "likes-icon",
  //   follow_btn: false,
  // },
  // photos: {
  //   icon: <IoMdPhotos color="#262323" />,
  //   className: "photos-icon",
  //   follow_btn: false,
  // },
};
