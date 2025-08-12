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
import { IoMdClose } from "react-icons/io";
import Footer from "../assets/components/Footer";

function BookingRequest2() {
  return (
    <>
      {/* model box */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/60  flex justify-center items-center z-20">
        <div className="w-[20%] h-auto bg-[#fcfcfc] p-4 relative rounded">
          <div className="w-full flex justify-between p-2">
            <h2 className="text-blue-500 text-[14px] font-[600]">
              FILTER YOUR BOOKINGS
            </h2>
            <IoMdClose className="text-[#979797]" />
          </div>
          <div>
            <form className="flex flex-col gap-3" action="/">
              <div>
                <p className="text-gray-600 text-[12px] font-medium">
                  Select Date Range
                </p>
                <div class="relative">
                  <input
                    type="date"
                    id="floating_outlined"
                    class="block px-2.5 pb-2 pt-3 w-full text-[12px] text-gray-600 bg-transparent rounded border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer  mt-3"
                  />
                  {/* dark:text-white dark:border-gray-600,          dark:focus:border-blue-500 */}
                  <label
                    for="floating_outlined"
                    class="absolute text-[15px] font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Start Date
                  </label>
                  {/* dark:text-gray-400, dark:bg-gray-900 */}
                </div>
                <div class="relative">
                  {/* <FontAwesomeIcon icon={faEnvelope} size="lg" /> */}

                  <input
                    type="date"
                    id="floating_outlined"
                    class="block px-2.5 pb-2 pt-3 w-full text-[12px] text-gray-600 bg-transparent rounded border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer  mt-5"
                  />
                  {/* dark:text-white dark:border-gray-600,          dark:focus:border-blue-500 */}
                  <label
                    for="floating_outlined"
                    class="absolute text-[15px] font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    End Date
                  </label>
                  {/* dark:text-gray-400, dark:bg-gray-900 */}
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-[12px] font-medium">
                  Select Categories
                </p>
                <input
                  className="w-full mt-3 outline-none border border-gray-300 rounded p-1 text-[12px] text-gray-600 px-2.5 pb-2 pt-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="Select Category"
                />
              </div>
              <div>
                <p className="text-gray-600 text-[12px] font-medium">
                  Select Sub Categories
                </p>
                <input
                  className="w-full mt-3 outline-none border border-gray-300 rounded p-1 text-[12px] text-gray-600 px-2.5 pb-2 pt-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="Select Sub Category"
                />
              </div>
              <div>
                <div className="flex gap-2 justify-center">
                  <div className="flex gap-1 justify-center items-center rounded px-3 py-2 bg-[#E0E0E0]">
                    <span className="text-[12px] text-gray-600 font-medium">
                      Clear All Filter
                    </span>
                  </div>
                  <div className="flex gap-2 justify-center items-center rounded px-4 py-2  bg-blue-500">
                    <span className="text-[12px] text-white font-medium">
                      Filter
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* right container */}

      {/* Main container */}
      <div className="px-[20px] mb-[100px]">
        <h1 className="py-[20px] font-[600] text-[15px]">Booking Request</h1>
        <div className="flex justify-end text-[14px] text-[#979797] font-medium">
          Total Request: <span className="text-[14px] text-[black]">25</span>
        </div>
        <div className="flex  gap-2 mt-2">
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px]  bg-blue-500 rounded-lg text-[white]">
            All Booking
          </div>
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-[#1a1a1a]  rounded-lg ">
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

export default BookingRequest2;
