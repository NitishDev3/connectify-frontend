import React from "react";
import { IMG_URL } from "../../assets/profileimg";
import UserStory from "../home/UserStory";

const MainProfileContainer = () => {
  return (
    <div className="flex flex-wrap items-center w-[80%] mx-auto">
      <div className="w-[40%]">
        <img src={IMG_URL} alt="profile-img" className="rounded-full w-44" />
      </div>
      <div className="w-[60%]">
        <div className="flex justify-between my-4 items-center">
          <p className="text-lg font-semibold" >User_Name</p>
          <button className="bg-gray-500 py-[6px] px-[8px] rounded-md bg-opacity-50 hover:bg-opacity-30">
            Edit Profile
          </button>
        </div>
        <div className="flex justify-between text-sm">
          <p>19 posts</p>
          <p>902 followers</p>
          <p>1000 following</p>
        </div>
        <div className="my-4">
          <h1 className="my-1 font-semibold">Full Name</h1>
          <p className="text-sm">
            Bio - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            iusto aspernatur magni esse sunt suscipit odio et quidem.
          </p>
        </div>
      </div>
      <div className="w-full my-10 flex space-x-7">
        <UserStory image={IMG_URL} />
        <UserStory image={IMG_URL} />
        <UserStory image={IMG_URL} />
        <div className="h-20 w-20 border border-gray-500 rounded-full flex justify-center items-center text-6xl text-gray-600">
          +
        </div>
      </div>
    </div>
  );
};

export default MainProfileContainer;
