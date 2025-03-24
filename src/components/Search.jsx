import React from "react";
import { IMG_URL } from "../assets/profileimg";
import { FaTimes } from "react-icons/fa"; // Import Font Awesome close icon

const Search = () => {
  const fallbackImage = "https://via.placeholder.com/150"; // Fallback image URL

  return (
    <div className="w-[300px] border-r border-gray-500 fixed ml-16 h-[100vh] z-10">
      <div className="w-[93%] mx-auto">
        <h1 className="text-2xl font-semibold my-2">Search</h1>
        <input
          type="text"
          placeholder="Search"
          autoFocus="true"
          //TODO: on focus the white ring should not appear
          className="w-full mx-auto my-4 bg-gray-500 bg-opacity-40 p-[6px] text-lg rounded-md "
        />
      </div>
      <div>
        <div className="flex justify-between mx-2">
          <p className="text-sm font-semibold">Recent</p>
          <p className="text-sm text-blue-500 cursor-pointer">Clear all</p>
        </div>
        <div className="mx-4">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center my-2 hover:bg-gray-300 hover:bg-opacity-25 cursor-pointer p-2 rounded-md"
            >
              <div className="flex items-center bg-transparent">
                <img
                  src={IMG_URL || fallbackImage} // Use fallback image if IMG_URL is undefined
                  className="w-8 h-8 rounded-full mr-2"
                  alt="search-img"
                />
                <p className="text-sm bg-transparent">Recent {item}</p>
              </div>
              <FaTimes className="text-gray-500 bg-transparent hover:text-red-500 cursor-pointer" /> {/* Cross icon */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
