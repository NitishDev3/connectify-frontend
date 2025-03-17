import React from "react";
import UserStory from "./UserStory";
import { ProfileArray } from "../../assets/profileimg";

const StoryContainer = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
        {ProfileArray.map((profile, index) => (
          <div key={index} className="flex-shrink-0">
            <UserStory image={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryContainer;
