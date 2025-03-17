import React from "react";
import { ProfileArray } from "../../assets/profileimg";
import Post from "./Post";

const PostsContainer = () => {
  return (
    <div className="flex flex-col w-[85%] mx-auto">
      {ProfileArray.map((profile, index) => (
        <div className="" key={index}>
            <Post image={profile} />
        </div>
      ))}
    </div>
  );
};

export default PostsContainer;
