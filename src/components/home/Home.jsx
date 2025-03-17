import React from "react";
import StoryContainer from "./StoryContainer";
import PostsContainer from "./PostsContainer";

const Home = () => {
  return (
    <div className="w-[35%] mx-auto my-3">
      <StoryContainer />
      <PostsContainer />
    </div>
  );
};

export default Home;
