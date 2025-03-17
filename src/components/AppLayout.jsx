import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const AppLayout = () => {
  const navigate = useNavigate();
  const userDataFromApi = "Nitish";

  const fetchUserData = async () => {
    try {
      const userData = "null";
      if (!userData) {
        navigate("/login");
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="flex">
      {userDataFromApi && <SideBar />}
      <Outlet />
    </div>
  );
};

export default AppLayout;
