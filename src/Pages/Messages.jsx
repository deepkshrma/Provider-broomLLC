import React from "react";
import Broom_LLC1 from "../assets/images/Broom_LLC1.png";
import arrow from "../assets/images/solar_alt-arrow-down-linear.png";
import Icon from "../assets/images/Icon.png";
import Icon1 from "../assets/images/Icon1.png";
import man from "../assets/images/man-438081_960_720.png";
import rightArrow from "../assets/images/solar_alt-arrow-down-linear1.png";
import { FaSearch } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdChat } from "react-icons/md";
import { RiSuitcase2Fill } from "react-icons/ri";
import { MdSubscriptions } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiFillSound } from "react-icons/ai";
import { MdMan } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { MdEventNote } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdMessage } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function Messages() {
  return (
    <>
      {/* Main Container */}
      <div className=" w-full h-full p-5 box-border">
        <h2 className="flex gap-2 items-center font-bold mb-3 text-[20px]">
          Messages
          <div className="flex justify-center items-center text-blue-500 w-5 h-5 bg-gray-300 rounded text-xs font-medium">
            1
          </div>
        </h2>

        <div className="w-full h-[50%] flex gap-2">
          <div className="w-[20%] bg-white rounded shadow-sm p-5 box-border">
            <form className="flex items-center gap-5">
              <div className="relative">
                <FaSearch
                  className="absolute top-2.5 left-3 text-gray-400"
                  size={15}
                />
                <input
                  type="search"
                  placeholder="Search here"
                  className="w-full pl-8 pr-3 py-2 text-[14px] text-gray-700 bg-blue-50 rounded outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="flex items-center justify-center rounded-full border-grow-animation border border-blue-200">
                <AiOutlineExclamationCircle
                  size={17}
                  className="text-gray-800"
                />
              </div>
            </form>

            <div className="flex items-center w-full h-auto py-3">
              <div className="relative w-[30px] h-[30px] rounded-full bg-black flex-shrink-0">
                <img src={man} alt="" />
                <div className="absolute w-[8px] h-[8px] rounded-full bg-green-700 bottom-0.5 border-[2px] border-white right-0"></div>
              </div>
              <div className="pl-4 pr-3 py-2 text-[14px] font-bold text-gray-800">
                Ellison Cardenas Trading
              </div>
            </div>
            <div className="flex  gap-2 mt-2">
              <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] font-medium text-gray-500 hover:text-[#1a1a1a]  hover:border-b-[2px] cursor-pointer">
                Admin
              </div>
              <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-gray-500 font-medium hover:text-[#1a1a1a]  hover:border-b-[2px] cursor-pointer">
                Customer
              </div>
            </div>
            <p className=" text-[14px] text-gray-500 font-medium px-3 py-3">
              Service Man
            </p>
            <hr className="text-gray-200" />
            <div className="flex items-center w-full h-auto py-3">
              <div className="relative w-[30px] h-[30px] rounded-full bg-black flex-shrink-0">
                <img src={man} alt="" />
                <div className="absolute w-[8px] h-[8px] rounded-full bg-green-700 bottom-0.5 border-[2px] border-white right-0"></div>
              </div>
              <div className="pl-4 pr-3 py-2">
                <div className=" text-[14px] font-bold text-gray-800">John</div>
                <div className="text-[14px] text-gray-500">+8**********</div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col box-border">
            <div className="flex justify-end items-centerh-[10%] bg-white mb-2 rounded shadow-sm p-3">
              <div className="text-center w-[25%] h-auto text-white text-[14px] font-medium px-3 py-1.5 rounded bg-blue-500 cursor-pointer hover:bg-blue-600">
                <span className="text-[14px] mr-1">+</span> START CONVERSATION
              </div>
            </div>
            <div className="flex-1 bg-white rounded shadow-sm flex justify-center items-center">
              <div className="flex items-center gap-2  text-[14px] font-medium px-3 py-1.5 rounded  w-fit  ">
                <MdMessage className="text-blue-500 text-[14px]" />
                START CONVERSATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
