import React from "react";
import EngageIcons from "./EngageIcons";

const Post = ({ image }) => {
  return (
    <div className="flex flex-col my-2 border-b border-gray-500">
      <div className="flex my-2">
        <img src={image} alt="profile-img" className="w-8 rounded-full mx-2" />
        <span>user_Name</span>
      </div>
      <div className="my-2">
        <img src={image} alt="post-img" className="rounded-md" />
      </div>
      <div className="my-2 mx-2">
        <EngageIcons />
      </div>
      <div className="mx-2 mb-4">
        <span className="font-semibold">user_Name</span>
        <span className="inline font-normal mx-2">
          Caption - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <p>Comments</p>
      </div>
    </div>
  );
};

export default Post;
