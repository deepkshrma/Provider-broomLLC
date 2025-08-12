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

function BookingRequest1() {
  const bookingData = [
    {
      sl: 1,
      bookingId: "100120",
      location: "Customer Location",
      customer: { name: "Anika", phone: "+8**********" },
      amount: "2,997.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "23-Jan-2025",
      scheduleTime: "06:12pm",
      bookingDate: "23-Jan-2025",
      bookingTime: "06:10pm",
      status: "Accepted",
    },
    {
      sl: 2,
      bookingId: "100118",
      location: "Customer Location",
      customer: { name: "Anika", phone: "+8**********" },
      amount: "5,410.00$",
      paymentStatus: "Paid",
      scheduleDate: "23-Jan-2025",
      scheduleTime: "06:09pm",
      bookingDate: "23-Jan-2025",
      bookingTime: "06:08pm",
      status: "Accepted",
    },
    {
      sl: 3,
      bookingId: "100117",
      location: "Customer Location",
      customer: { name: "Anika", phone: "+8**********" },
      amount: "1,440.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "23-Jan-2025",
      scheduleTime: "06:09pm",
      bookingDate: "23-Jan-2025",
      bookingTime: "06:07pm",
      status: "Accepted",
    },
    {
      sl: 4,
      bookingId: "100108",
      location: "Customer Location",
      customer: { name: "Anika", phone: "+8**********" },
      amount: "3,189.00$",
      paymentStatus: "Paid",
      scheduleDate: "16-Jul-2024",
      scheduleTime: "11:49am",
      bookingDate: "16-Jul-2024",
      bookingTime: "11:50am",
      status: "Accepted",
    },
    {
      sl: 5,
      bookingId: "100096",
      location: "Customer Location",
      customer: { name: "Anika", phone: "+8**********" },
      amount: "3,200.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "14-Mar-2024",
      scheduleTime: "03:26pm",
      bookingDate: "14-Mar-2024",
      bookingTime: "12:26pm",
      status: "Accepted",
    },
    {
      sl: 6,
      bookingId: "100095",
      location: "Customer Location",
      customer: { name: "Anika", phone: "+8**********" },
      amount: "2,980.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "14-Mar-2024",
      scheduleTime: "03:26pm",
      bookingDate: "14-Mar-2024",
      bookingTime: "12:26pm",
      status: "Accepted",
    },
    {
      sl: 7,
      bookingId: "100093",
      location: "Customer Location",
      customer: { name: "Anika", phone: "+8**********" },
      amount: "2,980.00$",
      paymentStatus: "Paid",
      scheduleDate: "14-Mar-2024",
      scheduleTime: "03:18pm",
      bookingDate: "14-Mar-2024",
      bookingTime: "12:18pm",
      status: "Accepted",
    },
    {
      sl: 8,
      bookingId: "100091",
      location: "Customer Location",
      customer: { name: "Anika", phone: "+8**********" },
      amount: "4,262.50$",
      paymentStatus: "Paid",
      scheduleDate: "14-Mar-2024",
      scheduleTime: "03:16pm",
      bookingDate: "14-Mar-2024",
      bookingTime: "12:16pm",
      status: "Accepted",
    },
    {
      sl: 9,
      bookingId: "100079",
      location: "Customer Location",
      customer: { name: "Anika", phone: "+8**********" },
      amount: "1,440.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "30-Dec-2023",
      scheduleTime: "09:49pm",
      bookingDate: "30-Dec-2023",
      bookingTime: "06:49pm",
      status: "Accepted",
    },
    {
      sl: 10,
      bookingId: "100077",
      location: "Customer Location",
      customer: { name: "Anika", phone: "+8**********" },
      amount: "4,262.50$",
      paymentStatus: "Unpaid",
      scheduleDate: "30-Dec-2023",
      scheduleTime: "09:47pm",
      bookingDate: "30-Dec-2023",
      bookingTime: "06:47pm",
      status: "Accepted",
    },
  ];

  return (
    <>
      {/* Main container */}
      <div className=" px-[20px] mb-[100px]">
        <h1 className="py-[20px] font-[600] text-[20px]">Booking Request</h1>
        <div className="flex justify-end text-[14px] text-[#979797] font-medium">
          Total Request: <span className="text-[14px] text-[black]">25</span>
        </div>
        <div className="flex  gap-2 mt-2">
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] rounded-lg hover:text-[white] hover:bg-blue-500 cursor-pointer">
            All Booking
          </div>
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] hover:text-[white] hover:bg-blue-500 cursor-pointer  rounded-lg ">
            Regular Booking
          </div>
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] hover:text-[white] hover:bg-blue-500 cursor-pointer  rounded-lg ">
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
                  className="ml-6 text-[14px] outline-none "
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
                <span className="text-[14px]">Download</span>
                <FaCaretDown />
              </div>
              <div className="flex gap-2 justify-center items-center rounded px-4 border-[1px]">
                <MdFilterList />
                <span className="text-[14px]">Filter</span>
                <span className="text-[14px]">0</span>
              </div>
            </div>
          </div>
          <table className="mt-[10px] w-[100%] overflow-x-scroll">
            <thead className="bg-blue-50">
              <tr className=" text-gray-700">
                <th className="text-[14px] px-4 py-2 text-left">SL</th>
                <th className="text-[14px] px-4 py-2 text-left">Booking ID</th>
                <th className="text-[14px] px-4 py-2 text-left">
                  Where Service will be Provided
                </th>
                <th className="text-[14px] px-4 py-2 text-left">
                  Customer Info
                </th>
                <th className="text-[14px] px-4 py-2 text-left">
                  Total Amount
                </th>
                <th className="text-[14px] px-4 py-2 text-left">
                  Payment Status
                </th>
                <th className="text-[14px] px-4 py-2 text-left">
                  Schedule Date
                </th>
                <th className="text-[14px] px-4 py-2 text-left">
                  Booking Date
                </th>
                <th className="text-[14px] px-4 py-2 text-left">Status</th>
                <th className="text-[14px] px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((item, index) => (
                <tr key={index} className="mb-10">
                  <td className="text-[14px] px-4 py-2 text-left">{item.sl}</td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    {item.bookingId}
                  </td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    {item.location}
                  </td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    <span className="block">{item.customer.name}</span>
                    <span>{item.customer.phone}</span>
                  </td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    {item.amount}
                  </td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    <div
                      className={`flex gap-1 justify-center items-center rounded px-1 py-1 ${
                        item.paymentStatus === "Paid"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      <span
                        className={`text-[14px] ${
                          item.paymentStatus === "Paid"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {item.paymentStatus}
                      </span>
                    </div>
                  </td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    <span className="block">{item.scheduleDate}</span>
                    <span>{item.scheduleTime}</span>
                  </td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    <span className="block">{item.bookingDate}</span>
                    <span>{item.bookingTime}</span>
                  </td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    <div className="flex gap-1 justify-center items-center rounded px-1 py-1 bg-green-100">
                      <span className="text-[14px] text-green-500">
                        {item.status}
                      </span>
                    </div>
                  </td>
                  <td className="flex items-center gap-2 text-[14px] px-4 py-2 text-left">
                    <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </div>
                    <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded">
                      <MdDownload className="text-blue-500 text-[15px]" />
                    </div>
                    <div className="flex justify-center items-center w-[25px] h-[25px] border border-green-500 rounded">
                      <TiTick className="text-green-500 text-[15px]" />
                    </div>
                    <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded">
                      <RxCross2 className="text-red-500 text-[15px]" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end gap-2 text-[14px] px-4 py-2 text-left">
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

export default BookingRequest1;
