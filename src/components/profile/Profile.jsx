import React from "react";
import MainProfileContainer from "./MainProfileContainer";
import SecondaryProfileContainer from "./SecondaryProfileContainer";

const Profile = () => {
  
  return (
    <div className="-z-10 md:w-[82vw] absolute right-0">
      <div className="w-[65%] mx-auto my-10">
      <MainProfileContainer />
      <SecondaryProfileContainer />
    </div>
    </div>
  );
};

export default Profile;
