import React, { useState, useRef, useEffect } from "react";
import Broom_LLC1 from "../images/Broom_LLC1.png";
import arrow from "../images/solar_alt-arrow-down-linear.png";
import Icon from "../images/Icon.png";
import Icon1 from "../images/Icon1.png";
import man from "../images/man-438081_960_720.png";
import rightArrow from "../images/solar_alt-arrow-down-linear1.png";
import { GoBellFill } from "react-icons/go";
import { CiCircleChevDown } from "react-icons/ci";
import { CiCircleChevUp } from "react-icons/ci";
import UserDropdown from "./UserDropdown.jsx";
import { parse } from "postcss";
import guest from "../photos/guest.png";
import { USER_BASE_URL } from "../../Config/Config.js";

function Header({ toggleSidebar, isOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [user, setUser] = useState(null);

  const toggleList = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const broom_auth = localStorage.getItem("broom_auth");
    if (broom_auth) {
      try {
        const parsed = JSON.parse(broom_auth);
        setUser(parsed.user);
      } catch (error) {
        console.error("error parsing broom_auth from localstorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fullName = user ? `${user.first_name} ${user.last_name}` : "Loading...";
  const roleName = user?.role?.name || "Role";
  const storedPath = localStorage.getItem("profile_photo");
  const profilePhoto =
    storedPath &&
    storedPath !== "null" &&
    storedPath !== "undefined" &&
    storedPath.trim() !== ""
      ? `${USER_BASE_URL}/${storedPath}`
      : guest;

  return (
    <>
      {/* Top bar */}
      <div
        className={`flex flex-col sm:flex-row justify-between items-center ${
          isOpen ? "w-5/6 translate-x-[20%]" : "w-full"
        } bg-white border-b border-[#E0E0E0] p-3 space-y-4 sm:space-y-0`}
      >
        <div className="flex-shrink-0">
          <img
            onClick={toggleSidebar}
            src={Icon}
            alt="Logo"
            className="h-6 sm:h-6 w-auto"
          />
        </div>

        {/* Right: Icons and User Info */}
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
          {/* Icon1 (e.g., notification icon) */}
          {/* <img className="w-7 h-7" src={Icon1} alt="Icon1" /> */}
          {/* <div className="relative">
            <div className="flex justify-center items-center w-[15px] h-[14px] bg-red-500 absolute right-0 rounded-xl text-white text-[11px]">
              9
            </div>
            <GoBellFill className="w-7 h-7 text-blue-500" />
          </div> */}
          {/* User Info and Arrow */}
          <div className="flex items-center gap-3" ref={dropdownRef}>
            {/* Profile Image */}
            <img
              className="w-7 h-7 rounded-full"
              src={profilePhoto}
              alt="User"
            />

            {/* User Name and Role */}
            <div className="text-left">
              <div className="font-bold text-sm">{fullName}</div>
              {/* <div className="text-[11px] text-gray-500">Admin</div> */}
            </div>

            {/* Dropdown Arrow */}
            {/* <div className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 ml-2">
              <img
                src={rightArrow}
                alt="Dropdown Arrow"
                className="w-2.5 h-2.5"
              />
            </div> */}
            <div
              onClick={toggleList}
              className="flex items-center justify-between cursor-pointer  rounded "
            >
              {isDropdownOpen ? (
                <CiCircleChevDown className="w-5 h-5" />
              ) : (
                <CiCircleChevUp className="w-5 h-5" />
              )}

              {isDropdownOpen && <UserDropdown />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
