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
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Togglebutton from "../assets/components/Togglebutton";

function ServicemanList() {
  return (
    <>
      {/* Main Container */}
      <div className=" w-full h-full p-5 box-border mb-[200px]">
        <h2 className="flex items-center font-bold mb-3 text-[20px]">
          Serviceman List
        </h2>
        <div className="flex justify-between shadow-sm px-2">
          <div className="flex  gap-3 mt-2">
            <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px]  text-[#979797] hover:border-b-[1px] hover:text-black font-semibold">
              All
            </div>
            <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-[#979797] hover:border-b-[1px] hover:text-black  font-semibold">
              Active
            </div>
            <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-[#979797] hover:border-b-[1px] hover:text-black font-semibold">
              Inactive
            </div>
          </div>
          <div className=" text-[14px] text-[#979797] font-medium flex justify-center items-center">
            Total Serviceman:{" "}
            <span className="text-[14px] text-[black]">3</span>
          </div>
        </div>
        <div className="w-[100%] h-auto p-2 mt-2 bg-white rounded-lg overflow-y-auto">
          <div className="flex justify-between w-[100%] h-auto">
            <form action="" className="flex gap-1">
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
            <div className="flex gap-1 justify-center items-center rounded px-3 bg-[#E0E0E0]">
              <MdDownload />
              <span className="text-[14px]">Download</span>
              <FaCaretDown />
            </div>
          </div>
          <table className="mt-[10px] w-[100%] mb-5">
            <thead className="bg-blue-50">
              <tr className=" text-gray-700">
                <th className="text-[14px] px-4 py-2 text-left">SL</th>
                <th className="text-[14px] px-4 py-2 text-left">Name</th>
                <th className="text-[14px] px-4 py-2 text-left">
                  Contact Info
                </th>
                <th className="text-[14px] px-4 py-2 text-left">Status</th>
                <th className="text-[14px] px-4 py-2 text-left">Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[14px] px-4 py-4 text-left">1</td>
                <td className="text-[14px] px-4 py-4 text-left">
                  Kenneth Brian
                </td>
                <td className="text-[14px] px-4 py-4 text-left">
                  <span className="block">K**********@gmail.com</span>{" "}
                  <span>+1**********</span>
                </td>
                <td className="text-[14px] px-4 py-4 text-left">
                  <Togglebutton />
                </td>
                <td className="flex items-center gap-2 text-[14px] px-4 py-4 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded bg-blue-50">
                    <span>
                      <MdEdit className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded bg-blue-50">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded bg-red-50">
                    <span>
                      <RiDeleteBin6Line className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[14px] px-4 py-4 text-left">2</td>
                <td className="text-[14px] px-4 py-4 text-left">
                  Steven Paull
                </td>
                <td className="text-[14px] px-4 py-4 text-left">
                  <span className="block">s**********@gmail.com</span>{" "}
                  <span>+8**********</span>
                </td>
                <td className="text-[14px] px-4 py-4 text-left">
                  <Togglebutton />
                </td>
                <td className="flex items-center gap-2 text-[14px] px-4 py-4 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded bg-blue-50">
                    <span>
                      <MdEdit className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded bg-blue-50">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded bg-red-50">
                    <span>
                      <RiDeleteBin6Line className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[14px] px-4 py-4 text-left">3</td>
                <td className="text-[14px] px-4 py-4 text-left">
                  Matthew Mark
                </td>
                <td className="text-[14px] px-4 py-4 text-left">
                  <span className="block">m**********@gmail.com</span>{" "}
                  <span>+8**********</span>
                </td>
                <td className="text-[14px] px-4 py-4 text-left">
                  <Togglebutton />
                </td>
                <td className="flex items-center gap-2 text-[14px] px-4 py-4 text-left">
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded bg-blue-50">
                    <span>
                      <MdEdit className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-blue-500 rounded bg-blue-50">
                    <span>
                      <IoEyeSharp className="text-blue-500 text-[15px]" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-[25px] h-[25px] border border-red-500 rounded bg-red-50">
                    <span>
                      <RiDeleteBin6Line className="text-red-500 text-[15px]" />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ServicemanList;
