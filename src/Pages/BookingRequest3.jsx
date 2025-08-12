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

function BookingRequest3() {
  return (
    <>
      {/* Main container */}
      <div className="px-[20px] mb-[100px]">
        <h1 className="py-[20px] font-[600] text-[15px]">Booking Request</h1>
        <div className="flex justify-end text-[14px] text-[#979797] font-medium">
          Total Request: <span className="text-[14px] text-[black]">25</span>
        </div>
        <div className="flex  gap-2 mt-2">
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px]   rounded-lg text-[#1a1a1a]">
            All Booking
          </div>
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-white bg-blue-500  rounded-lg ">
            Regular Booking
          </div>
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-[#1a1a1a]  rounded-lg ">
            Repeat Booking
          </div>
        </div>
        {/* table */}
        <div className="w-[100%] h-auto p-2 mt-2 bg-white rounded-lg">
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
                className="px-[15px] py-[8px] text-[14px]  bg-blue-500 rounded text-[white]"
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
            <tbody>
              <tr>
                <td className="text-[11px] px-4 py-2 text-left">1</td>
                <td className="text-[11px] px-4 py-2 text-left">100120</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  Customer Location
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">Anika</span> <span>+8**********</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">2,997.00$</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-red-100">
                    <span className="text-[11px] text-red-500">Unpaid</span>
                  </div>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">23-Jan-2025</span>
                  <span>06:12pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">23-Jan-2025</span>
                  <span>06:10pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Accepted</span>
                  </div>
                </td>
                <td className="flex items-center gap-2 text-[11px] px-4 py-2 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                    <span>
                      <TiTick className="text-green-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                    <span>
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[11px] px-4 py-2 text-left">2</td>
                <td className="text-[11px] px-4 py-2 text-left">100118</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  Customer Location
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">Anika</span> <span>+8**********</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">5,410.00$</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Paid</span>
                  </div>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">23-Jan-2025</span>
                  <span>06:09pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">23-Jan-2025</span>
                  <span>06:08pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Accepted</span>
                  </div>
                </td>
                <td className="flex items-center gap-2 text-[11px] px-4 py-2 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                    <span>
                      <TiTick className="text-green-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                    <span>
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[11px] px-4 py-2 text-left">3</td>
                <td className="text-[11px] px-4 py-2 text-left">100117</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  Customer Location
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">Anika</span> <span>+8**********</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">1,440.00$</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-red-100">
                    <span className="text-[11px] text-red-500">Unpaid</span>
                  </div>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">23-Jan-2025</span>
                  <span>06:09pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">23-Jan-2025</span>
                  <span>06:07pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Accepted</span>
                  </div>
                </td>
                <td className="flex items-center gap-2 text-[11px] px-4 py-2 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                    <span>
                      <TiTick className="text-green-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                    <span>
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[11px] px-4 py-2 text-left">4</td>
                <td className="text-[11px] px-4 py-2 text-left">100108</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  Customer Location
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">Anika</span> <span>+8**********</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">3,189.00$</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Paid</span>
                  </div>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">16-Jul-2024</span>
                  <span>11:49am</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">16-Jul-2024</span>
                  <span>11:50am</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Accepted</span>
                  </div>
                </td>
                <td className="flex items-center gap-2 text-[11px] px-4 py-2 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                    <span>
                      <TiTick className="text-green-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                    <span>
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[11px] px-4 py-2 text-left">5</td>
                <td className="text-[11px] px-4 py-2 text-left">100096</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  Customer Location
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">Anika</span> <span>+8**********</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">3,200.00$</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-red-100">
                    <span className="text-[11px] text-red-500">Unpaid</span>
                  </div>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">14-Mar-2024</span>
                  <span>03:26pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">14-Mar-2024</span>
                  <span>12:26pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Accepted</span>
                  </div>
                </td>
                <td className="flex items-center gap-2 text-[11px] px-4 py-2 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                    <span>
                      <TiTick className="text-green-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                    <span>
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[11px] px-4 py-2 text-left">6</td>
                <td className="text-[11px] px-4 py-2 text-left">100095</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  Customer Location
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">Anika</span> <span>+8**********</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">2,980.00$</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-red-100">
                    <span className="text-[11px] text-red-500">Unpaid</span>
                  </div>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">14-Mar-2024</span>
                  <span>03:26pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">14-Mar-2024</span>
                  <span>12:26pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Accepted</span>
                  </div>
                </td>
                <td className="flex items-center gap-2 text-[11px] px-4 py-2 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                    <span>
                      <TiTick className="text-green-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                    <span>
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[11px] px-4 py-2 text-left">7</td>
                <td className="text-[11px] px-4 py-2 text-left">100093</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  Customer Location
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">Anika</span> <span>+8**********</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">2,980.00$</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Paid</span>
                  </div>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">14-MAr-2024</span>
                  <span>03:18pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">14-Mar-2024</span>
                  <span>12:18pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Accepted</span>
                  </div>
                </td>
                <td className="flex items-center gap-2 text-[11px] px-4 py-2 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                    <span>
                      <TiTick className="text-green-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                    <span>
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[11px] px-4 py-2 text-left">8</td>
                <td className="text-[11px] px-4 py-2 text-left">100091</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  Customer Location
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">Anika</span> <span>+8**********</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">4,262.50$</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Paid</span>
                  </div>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">14-Mar-2024</span>
                  <span>03:16pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">14-Mar-2024</span>
                  <span>12:16pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Accepted</span>
                  </div>
                </td>
                <td className="flex items-center gap-2 text-[11px] px-4 py-2 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                    <span>
                      <TiTick className="text-green-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                    <span>
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[11px] px-4 py-2 text-left">9</td>
                <td className="text-[11px] px-4 py-2 text-left">100079</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  Customer Location
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">Anika</span> <span>+8**********</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">1,440.00$</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-red-100">
                    <span className="text-[11px] text-red-500">Unpaid</span>
                  </div>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">30-Dec-2023</span>
                  <span>09:49pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">30-Dec-2023</span>
                  <span>06:49pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Accepted</span>
                  </div>
                </td>
                <td className="flex items-center gap-2 text-[11px] px-4 py-2 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                    <span>
                      <TiTick className="text-green-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                    <span>
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[11px] px-4 py-2 text-left">10</td>
                <td className="text-[11px] px-4 py-2 text-left">100077</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  Customer Location
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">Anika</span> <span>+8**********</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">4,262.50$</td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-red-100">
                    <span className="text-[11px] text-red-500">Unpaid</span>
                  </div>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">30-Dec-2023</span>
                  <span>09:47pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <span className="block">30-Dec-2023</span>
                  <span>06:47pm</span>
                </td>
                <td className="text-[11px] px-4 py-2 text-left">
                  <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                    <span className="text-[11px] text-green-500">Accepted</span>
                  </div>
                </td>
                <td className="flex items-center gap-2 text-[11px] px-4 py-2 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                    <span>
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                    <span>
                      <TiTick className="text-green-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                    <span>
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end gap-2 text-[11px] px-4 py-2 text-left">
            <div className="flex justify-center items-center w-[25px] h-[25px]  bg-[#979797] rounded">
              <span>
                <FaCaretLeft className="text-white" />
              </span>
            </div>
            <div className="flex justify-center items-center w-[25px] h-[25px]  bg-blue-500 rounded text-white">
              1
            </div>
            <div className="flex justify-center items-center w-[25px] h-[25px]  bg-[#1a1a1a] rounded text-white">
              2
            </div>
            <div className="flex justify-center items-center w-[25px] h-[25px]  bg-[#1a1a1a] rounded text-white">
              3
            </div>
            <div className="flex justify-center items-center w-[25px] h-[25px]  bg-[#1a1a1a] rounded text-white">
              <FaCaretRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingRequest3;
