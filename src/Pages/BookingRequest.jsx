import React, { useState } from "react";
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

function BookingRequest() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const bookingData = [
    {
      id: 1,
      bookingId: "100114",
      location: "Customer Location",
      customerName: "Anika",
      customerPhone: "+8**********",
      amount: "2,997.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "26-Aug-2024",
      scheduleTime: "03:45am",
      bookingDate: "26-Aug-2024",
      bookingTime: "03:46pm",
      status: "Pending",
    },
    {
      id: 2,
      bookingId: "100107",
      location: "Customer Location",
      customerName: "Glory",
      customerPhone: "+8**********",
      amount: "2,980.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "16-Jul-2024",
      scheduleTime: "11:48am",
      bookingDate: "16-Jul-2024",
      bookingTime: "11:48am",
      status: "Pending",
    },
    {
      id: 3,
      bookingId: "100106",
      location: "Customer Location",
      customerName: "Glory",
      customerPhone: "+8**********",
      amount: "2,997.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "16-Jul-2024",
      scheduleTime: "11:47am",
      bookingDate: "16-Jul-2024",
      bookingTime: "11:48am",
      status: "Pending",
    },
    {
      id: 4,
      bookingId: "100102",
      location: "Customer Location",
      customerName: "Anika",
      customerPhone: "+8**********",
      amount: "2,980.00$",
      paymentStatus: "Paid",
      scheduleDate: "18-Apr-2024",
      scheduleTime: "04:00pm",
      bookingDate: "17-Apr-2024",
      bookingTime: "04:01pm",
      status: "Pending",
    },
    {
      id: 5,
      bookingId: "100100",
      location: "Customer Location",
      customerName: "Anika",
      customerPhone: "+8**********",
      amount: "8,290.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "17-Apr-2024",
      scheduleTime: "03:58am",
      bookingDate: "17-Apr-2024",
      bookingTime: "03:58pm",
      status: "Pending",
    },
    {
      id: 6,
      bookingId: "100099",
      location: "Customer Location",
      customerName: "Jemmi",
      customerPhone: "+8**********",
      amount: "7,600.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "17-Apr-2024",
      scheduleTime: "03:56am",
      bookingDate: "17-Apr-2024",
      bookingTime: "03:56pm",
      status: "Pending",
    },
    {
      id: 7,
      bookingId: "100098",
      location: "Customer Location",
      customerName: "Jemmi",
      customerPhone: "+8**********",
      amount: "11,134.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "22-Apr-2024",
      scheduleTime: "03:52pm",
      bookingDate: "17-Apr-2024",
      bookingTime: "03:54pm",
      status: "Pending",
    },
    {
      id: 8,
      bookingId: "100097",
      location: "Customer Location",
      customerName: "Jemmi",
      customerPhone: "+8**********",
      amount: "11,890.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "17-Apr-2024",
      scheduleTime: "03:27am",
      bookingDate: "17-Apr-2024",
      bookingTime: "03:27pm",
      status: "Pending",
    },
    {
      id: 9,
      bookingId: "100090",
      location: "Customer Location",
      customerName: "Anika",
      customerPhone: "+8**********",
      amount: "8,290.00$",
      paymentStatus: "Unpaid",
      scheduleDate: "14-Mar-2024",
      scheduleTime: "03:15pm",
      bookingDate: "14-Mar-2024",
      bookingTime: "12:15pm",
      status: "Pending",
    },
    {
      id: 10,
      bookingId: "100088",
      location: "Customer Location",
      customerName: "Anika",
      customerPhone: "+8**********",
      amount: "2,240.60$",
      paymentStatus: "Unpaid",
      scheduleDate: "14-Mar-2024",
      scheduleTime: "03:14pm",
      bookingDate: "14-Mar-2024",
      bookingTime: "12:15pm",
      status: "Pending",
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookingData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(bookingData.length / itemsPerPage);

  const getPaginationRange = (currentPage, totalPages) => {
    if (totalPages <= 3) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    if (currentPage === 1) {
      return [1, 2, 3];
    }

    if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const pageNumbers = getPaginationRange(currentPage, totalPages);

  const handlePageChange = (pageNumber) => {
    // Ensure page number stays in valid range
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Main container */}
      <div className="px-[20px] mb-[100px]">
        <h1 className="py-[20px] font-[600] text-[20px]">Booking Request</h1>
        <div className="flex justify-end text-[14px] text-[#979797] font-medium">
          Total Request: <span className="text-[14px] text-[black]">29</span>
        </div>
        <div className="flex  gap-2 mt-2">
          <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px]  hover:bg-blue-500 rounded-lg cursor-pointer hover:text-[white]">
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
              {currentItems.map((item, index) => (
                <tr key={item.id}>
                  <td className="text-[14px] px-4 py-2 text-left">
                    {index + 1 + (currentPage - 1) * itemsPerPage}
                  </td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    {item.bookingId}
                  </td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    {item.location}
                  </td>
                  <td className="text-[14px] px-4 py-2 text-left">
                    <span className="block">{item.customerName}</span>
                    <span>{item.customerPhone}</span>
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
                      } `}
                    >
                      <span
                        className={`text-[14px] ${
                          item.paymentStatus === "Paid"
                            ? "text-green-500"
                            : "text-red-500"
                        } `}
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
            <div
              className="flex justify-center items-center w-[25px] h-[25px]  bg-[#979797] rounded"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <span>
                <FaCaretLeft className="text-white" />
              </span>
            </div>
            {pageNumbers.map((page) => (
              <div
                key={page}
                onClick={() => handlePageChange(page)}
                className={`flex justify-center items-center w-[25px] h-[25px]   rounded text-white ${
                  currentPage === page ? "bg-blue-500 text-white" : "bg-black"
                }`}
              >
                {page}
              </div>
            ))}
            {/* <div className="flex justify-center items-center w-[25px] h-[25px]  bg-[#1a1a1a] rounded text-white">
              2
            </div>
            <div className="flex justify-center items-center w-[25px] h-[25px]  bg-[#1a1a1a] rounded text-white">
              3
            </div> */}
            <div
              className="flex justify-center items-center w-[25px] h-[25px]  bg-[#979797] rounded text-white"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaCaretRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingRequest;
