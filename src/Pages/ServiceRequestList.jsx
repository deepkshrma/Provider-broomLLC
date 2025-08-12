import React from "react";
import Broom_LLC1 from "../assets/images/Broom_LLC1.png";
import arrow from "../assets/images/solar_alt-arrow-down-linear.png";
import Icon from "../assets/images/Icon.png";
import Icon1 from "../assets/images/Icon1.png";
import man from "../assets/images/man-438081_960_720.png";
import rightArrow from "../assets/images/solar_alt-arrow-down-linear1.png";
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
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

function ServiceRequestList() {
  return (
    <>
      {/* Main Container */}
      <div className=" w-full h-full p-5 box-border mb-[200px]">
        <div className="flex  justify-between items-center">
          <h2 className=" font-bold mb-3 text-[20px]">All Service</h2>
          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center items-center w-fit h-fit rounded-full border-grow-animation border-blue-200">
              <AiOutlineExclamationCircle
                size={20}
                className=" rounded-full text-gray-800 "
              />
            </div>
            <div className="px-5 text-[12px] text-white bg-blue-500 text-center py-1.5 rounded cursor-pointer">
              <span className="mr-1">+</span>Request
            </div>
          </div>
        </div>
        <div className="flex justify-end  px-2 mt-2">
          <div className=" text-[14px] text-[#979797] font-medium flex justify-center items-center">
            Total Sub Categories:{" "}
            <span className="text-[14px] text-[black] ml-1">2</span>
          </div>
        </div>
        <hr className="mx-2 text-[#E0E0E0]" />
        <div className="w-[100%] h-auto p-2 mt-2 bg-white rounded-lg overflow-y-auto">
          <div className="flex justify-start w-[100%] h-auto">
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
          </div>
          <table className="mt-[10px] w-[100%] mb-6">
            <thead className="bg-blue-50">
              <tr className=" text-gray-700">
                <th className="text-[14px] px-4 py-2 text-left">SL</th>
                <th className="text-[14px] px-4 py-2 text-left">Category</th>
                <th className="text-[14px] px-4 py-2 text-left">
                  Suggested Service Name
                </th>
                <th className="text-[14px] px-4 py-2 text-left">Description</th>
                <th className="text-[14px] px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[14px] px-4 py-4 text-left">1</td>
                <td className="text-[14px] px-4 py-4 text-left">
                  Appliance Repair
                </td>
                <td className="text-[14px] px-4 py-4 text-left">
                  Gas stove/Burner Installation
                </td>
                <td className="text-[14px] px-4 py-4 text-left max-w-[170px] break-words">
                  Gas Stove is very important in our daily life, most
                  importantly it cooks food. So, when a gas sto...
                </td>
                <td className="text-[14px] px-4 py-4 text-left">
                  <div className="w-3/4 text-[14px] text-white bg-blue-500 text-center py-1.5 px-2 rounded">
                    VIEW FEEDBACK
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-[14px] px-4 py-4 text-left">2</td>
                <td className="text-[14px] px-4 py-4 text-left">
                  Painting & Renovation
                </td>
                <td className="text-[14px] px-4 py-4 text-left">
                  Interior & Exterior paint
                </td>
                <td className="text-[14px] px-4 py-4 text-left max-w-[160px] break-words">
                  Professional painting services have been doing their job for
                  so long that they're exports ...
                </td>
                <td className="text-[14px] px-4 py-4 text-left">
                  <div className="w-3/4 text-[14px] text-white bg-green-500 text-center py-1.5 px-2 rounded">
                    VIEW FEEDBACK
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

export default ServiceRequestList;
