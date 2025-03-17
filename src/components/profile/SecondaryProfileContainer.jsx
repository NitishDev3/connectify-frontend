import React from "react";
import Post from "../home/Post";
import { IMG_URL } from "../../assets/profileimg";
import ProfilePosts from "./ProfilePosts";

const SecondaryProfileContainer = () => {
  const postsData = new Array(7).fill(IMG_URL);
  return (
    <div className="w-full border-t border-gray-500">
      <div className="flex mx-auto w-[40%] justify-around">
        <p>Posts</p>
        <p>Reels</p>
      </div>
      <div className="flex flex-wrap mt-3">
        {postsData.map((post, index) => (
          <ProfilePosts key={index} image={post} />
        ))}
      </div>
    </div>
  );
};

export default SecondaryProfileContainer;
