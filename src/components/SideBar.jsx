import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ConnectifySVG,
  HomeSVG,
  LogoutSVG,
  MessageSVG,
  NotificationsSVG,
  ProfileSVG,
  ReelsSVG,
  SearchSVG,
} from "../assets/svgcomponents";
import Search from "./Search";
import Notifications from "./Notifications"; // Assuming you have a Notifications component

const SideBar = () => {
  const [isSpanVisible, setIsSpanVisible] = useState(true);
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [isNotificationOn, setIsNotificationOn] = useState(false);

  const toggleVisibility = useCallback(() => {
    // If Search is already open, close it and toggle sidebar visibility
    if (isSearchOn) {
      setIsSearchOn(false);
      setIsSpanVisible((prev) => !prev);
    } else {
      // If switching from Notifications to Search, keep the sidebar collapsed
      if (isNotificationOn) {
        setIsNotificationOn(false);
        setIsSearchOn(true);
      } else {
        // Otherwise, toggle Search and sidebar visibility
        setIsSearchOn((prev) => !prev);
        setIsSpanVisible((prev) => !prev);
      }
    }
  }, [isSearchOn, isNotificationOn]);

  const toggleNotifications = useCallback(() => {
    // If Notifications is already open, close it and toggle sidebar visibility
    if (isNotificationOn) {
      setIsNotificationOn(false);
      setIsSpanVisible((prev) => !prev);
    } else {
      // If switching from Search to Notifications, keep the sidebar collapsed
      if (isSearchOn) {
        setIsSearchOn(false);
        setIsNotificationOn(true);
      } else {
        // Otherwise, toggle Notifications and sidebar visibility
        setIsNotificationOn((prev) => !prev);
        setIsSpanVisible((prev) => !prev);
      }
    }
  }, [isNotificationOn, isSearchOn]);

  const closeSearchNotification = () => {
    if (isNotificationOn) setIsNotificationOn(false);
    if (isSearchOn) setIsSearchOn(false);
    setIsSpanVisible(true);
  };

  const navItems = [
    {
      to: "/",
      icon: <HomeSVG />,
      label: "Home",
      onClick: closeSearchNotification,
    },
    {
      to: "#",
      icon: <SearchSVG />,
      label: "Search",
      onClick: toggleVisibility,
    },
    {
      to: "/reels",
      icon: <ReelsSVG />,
      label: "Reels",
      onClick: closeSearchNotification,
    },
    {
      to: "/message",
      icon: <MessageSVG />,
      label: "Message",
      onClick: closeSearchNotification,
    },
    {
      to: "#",
      icon: <NotificationsSVG />,
      label: "Notifications",
      onClick: toggleNotifications,
    },
    {
      to: "/profile",
      icon: <ProfileSVG />,
      label: "Profile",
      onClick: closeSearchNotification,
    },
    {
      to: "/login",
      icon: <LogoutSVG />,
      label: "Log Out",
      className: "absolute bottom-8",
    },
  ];

  return (
    <div className="flex z-20">
      <div className="fixed border-r border-gray-500 h-[100vh] min-w-16 flex">
        <div className="mx-auto">
          <div className="flex justify-center">
            <div className="my-10">
              {!isSpanVisible && <ConnectifySVG />}
              <h1
                className={`text-5xl mx-6 font-semibold font-cursive ${
                  isSpanVisible ? "block" : "hidden"
                }`}
              >
                Connectify
              </h1>
            </div>
          </div>
          <div className="mx-3">
            <ul className="text-xl">
              {navItems.map((item, index) => (
                <li key={index} className={`my-8 ${item.className || ""}`}>
                  <Link
                    to={item.to}
                    className="flex items-center"
                    onClick={item.onClick}
                  >
                    {item.icon}
                    <span className={isSpanVisible ? "block" : "hidden"}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isSearchOn && <Search />}
      {isNotificationOn && <Notifications />}
    </div>
  );
};

export default SideBar;
