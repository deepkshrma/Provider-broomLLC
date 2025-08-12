import React from "react";
import Broom_LLC1 from "../assets/images/Broom_LLC1.png";
import arrow from "../assets/images/solar_alt-arrow-down-linear.png";
import Icon from "../assets/images/Icon.png";
import Icon1 from "../assets/images/Icon1.png";
import man from "../assets/images/man-438081_960_720.png";
import rightArrow from "../assets/images/solar_alt-arrow-down-linear1.png";
import { FaSearch } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
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
import Footer from "../assets/components/Footer";

function BookingRequest4() {
  return (
    <>
      {/* Main container */}
      <div className="px-[20px]">
        <h1 className="py-[20px] font-[600] text-[15px]">Booking Request</h1>
        <div className="flex justify-end text-[14px] text-[#979797] font-medium">
          Total Request: <span className="text-[14px] text-[black]">0</span>
        </div>
        <div className="flex  gap-2 mt-2">
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px]   rounded-lg text-[#1a1a1a]">
            All Booking
          </div>
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-[#1a1a1a]   rounded-lg ">
            Regular Booking
          </div>
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-white bg-blue-500  rounded-lg ">
            Repeat Booking
          </div>
        </div>
        {/* table */}
        <div className="relative w-[100%] h-auto p-2 mt-2 bg-white rounded-lg">
          <div className="flex justify-between w-[100%] h-auto">
            <form action="/" className="flex gap-1">
              <div className="relative flex gap-2 px-3 bg-blue-50">
                <FaSearch className="absolute opacity-40 top-3" size={15} />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search here"
                  className="ml-6 text-[11px] outline-none "
                />
              </div>

              <button
                type="submit"
                className="px-[15px] py-[8px] text-[14px]  bg-blue-900 rounded text-[white]"
              >
                Search
              </button>
            </form>
            <div className="flex gap-2">
              <div className="flex gap-1 justify-center items-center rounded px-3 bg-[#E0E0E0]">
                <MdDownload />
                <span className="text-[11px]">Download</span>
                <FaCaretDown />
              </div>
              <div className="flex gap-2 justify-center items-center rounded px-4 border-[1px]">
                <MdFilterList />
                <span className="text-[11px]">Filter</span>
                <span className="text-[11px]">0</span>
              </div>
            </div>
          </div>
          <table className="mt-[10px] w-[100%] overflow-x-scroll">
            <thead className="bg-blue-50">
              <tr className=" text-gray-700">
                <th className="text-[11px] px-4 py-2 text-left">SL</th>
                <th className="text-[11px] px-4 py-2 text-left">Booking ID</th>
                <th className="text-[11px] px-4 py-2 text-left">
                  Where Service will be Provided
                </th>
                <th className="text-[11px] px-4 py-2 text-left">
                  Customer Info
                </th>
                <th className="text-[11px] px-4 py-2 text-left">
                  Total Amount
                </th>
                <th className="text-[11px] px-4 py-2 text-left">
                  Payment Status
                </th>
                <th className="text-[11px] px-4 py-2 text-left">
                  Schedule Date
                </th>
                <th className="text-[11px] px-4 py-2 text-left">
                  Booking Date
                </th>
                <th className="text-[11px] px-4 py-2 text-left">Status</th>
                <th className="text-[11px] px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
          </table>
          <p className="w-full flex items-center pl-[33%] text-[11px] py-4 font-medium text-gray-600">
            No data available
          </p>
        </div>
      </div>
    </>
  );
}

export default BookingRequest4;
