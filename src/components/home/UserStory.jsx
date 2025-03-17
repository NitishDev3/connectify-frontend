import React from "react";

const UserStory = ({image }) => {
  return (
    <div className="m-[4px] inline-block">
      <img
        src={image}
        alt="Story-img"
        className="w-20 h-20 rounded-full p-[3px] border-2 border-blue-500"
      />
    </div>
  );
};

export default UserStory;
