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
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

function MySubscription() {
  const tableData = [
    {
      id: 1,
      subCategory: "Furniture Cleaning Service",
      category: "House Cleaning",
      service: 2,
      status: "UNSUBSCRIBE",
    },
    {
      id: 2,
      subCategory: "Microwave Repair Service",
      category: "Appliance Repair",
      service: 3,
      status: "UNSUBSCRIBE",
    },
    {
      id: 3,
      subCategory: "Hair Spa",
      category: "Beauty Salon",
      service: 2,
      status: "SUBSCRIBE",
    },
    {
      id: 4,
      subCategory: "LCD/LED/Smart TV Repair",
      category: "Appliance Repair",
      service: 3,
      status: "UNSUBSCRIBE",
    },
    {
      id: 5,
      subCategory: "Plumbing Checkup Service",
      category: "Plumbing",
      service: 3,
      status: "UNSUBSCRIBE",
    },
    {
      id: 6,
      subCategory: "Home Cleaning Service",
      category: "House Cleaning",
      service: 3,
      status: "UNSUBSCRIBE",
    },
    {
      id: 7,
      subCategory: "Mobile Repair",
      category: "Gadget Repair",
      service: 0,
      status: "UNSUBSCRIBE",
    },
    {
      id: 8,
      subCategory: "AC Installation",
      category: "AC Repair",
      service: 2,
      status: "UNSUBSCRIBE",
    },
    {
      id: 9,
      subCategory: "Men's Hair and Bread",
      category: "Beauty & Salon",
      service: 1,
      status: "SUBSCRIBE",
    },
    {
      id: 10,
      subCategory: "Laptop & Desktop Repair",
      category: "Gadget Repair",
      service: 2,
      status: "UNSUBSCRIBE",
    },
  ];

  return (
    <>
      {/* Main Container */}
      <div className=" w-full h-full p-5 box-border mb-[200px]">
        <h2 className="flex items-center font-bold mb-3 text-[20px]">
          All Service
        </h2>
        <div className="flex justify-between shadow-sm px-2">
          <div className="flex  gap-3 mt-2">
            <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-[#979797] hover:border-b-[1px] hover:text-black font-semibold">
              All
            </div>
            <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-[#979797] hover:border-b-[1px] hover:text-black font-semibold">
              Subscribed Sub Categories
            </div>
            <div className="flex justify-center items-center px-[10px] py-[5px] text-[14px] text-[#979797] hover:border-b-[1px] hover:text-black font-semibold">
              Unsubscribed Sub Categories
            </div>
          </div>
          <div className=" text-[14px] text-[#979797] font-medium flex justify-center items-center">
            Total Sub Categories:{" "}
            <span className="text-[14px] text-[black]">29</span>
          </div>
        </div>

        <div className="w-[100%] h-auto p-2 mt-2 bg-white rounded-lg overflow-y-auto">
          <table className="mt-[10px] w-[100%] ">
            <thead className="bg-blue-50">
              <tr className=" text-gray-700">
                <th className="text-[14px] px-4 py-2 text-left">SL</th>
                <th className="text-[14px] px-4 py-2 text-left">
                  Sub Category Name
                </th>
                <th className="text-[14px] px-4 py-2 text-left">Category</th>
                <th className="text-[14px] px-4 py-2 text-left">Service</th>
                <th className="text-[14px] px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={item.id}>
                  <td className="text-[14px] px-4 py-4 text-left">
                    {index + 1}
                  </td>
                  <td className="text-[14px] px-4 py-4 text-left">
                    {item.subCategory}
                  </td>
                  <td className="text-[14px] px-4 py-4 text-left">
                    {item.category}
                  </td>
                  <td className="text-[14px] px-4 py-4 text-left">
                    {item.service}
                  </td>
                  <td className="flex justify-center text-[14px] px-4 py-4 text-left">
                    <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center px-3 py-2 rounded">
                      {item.status}
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

export default MySubscription;
