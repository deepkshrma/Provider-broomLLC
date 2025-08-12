import React, { useState } from "react";
import Frame from "../../assets/images/Frame.png";
import arrow from "../../assets/images/solar_alt-arrow-down-linear.png";
import Broom_LLC1 from "../../assets/images/Broom_LLC1.png";
// import pieChart from "../../assets/images/solar_pie-chart-2-linear.png";
import rightArrow from "../../assets/images/solar_alt-arrow-down-linear1.png";
import Icon from "../../assets/images/Icon.png";
import Icon1 from "../../assets/images/Icon1.png";
import man from "../../assets/images/man-438081_960_720.png";
import Icon2 from "../../assets/images/Icon2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { IoIosPeople } from "react-icons/io";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";
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
import Header from "../../assets/components/Header";
import Footer from "../../assets/components/Footer";
import Sidebar from "../../assets/components/Sidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import TotalVendorsChart from "./TotalVendorsChart";
import PageTittle from "../../assets/components/PageTittle";

function Dashboard() {
  // logic for year
  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const years = [];
  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }

  // Step 1: Year state
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());

  // Step 2: Earnings data for each year
  const earningsData = {
    2025: [
      { name: "Jan", pv: 3000 },
      { name: "Feb", pv: 0 },
      { name: "Mar", pv: 0 },
      { name: "Apr", pv: 7000 },
      { name: "May", pv: 0 },
      { name: "Jun", pv: 0 },
      { name: "Jul", pv: 0 },
      { name: "Aug", pv: 0 },
      { name: "Sep", pv: 0 },
      { name: "Oct", pv: 0 },
      { name: "Nov", pv: 0 },
      { name: "Dec", pv: 0 },
    ],
    2024: [
      { name: "Jan", pv: 1000 },
      { name: "Feb", pv: 2000 },
      { name: "Mar", pv: 3000 },
      { name: "Apr", pv: 4000 },
      { name: "May", pv: 5000 },
      { name: "Jun", pv: 6000 },
      { name: "Jul", pv: 7000 },
      { name: "Aug", pv: 8000 },
      { name: "Sep", pv: 9000 },
      { name: "Oct", pv: 10000 },
      { name: "Nov", pv: 11000 },
      { name: "Dec", pv: 12000 },
    ],
  };
  const data = earningsData[selectedYear] || [];

  return (
    <>
      <div className=" ">
        {/* <h1 className="py-[20px] font-[600] text-[20px]">Business Analytics</h1> */}
        <PageTittle title={"Business Analytics"} />

        <div className="my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3 bg-green-500 rounded-xl flex space-x-3 h-[100px]   justify-between">
              <div className="flex flex-col gap-2">
                <span className="block w-[100%] font-[600] text-white">
                  76,626.15$
                </span>
                <span className="block w-[100%] text-[14px] font-[500] text-white">
                  Total earning
                </span>
              </div>
              <div className="flex justify-center items-center box-border">
                {/* <img
                    className=" w-[35px] h-[35px]  box-border"
                    src={Icon2}
                    alt=""
                  /> */}
                <AiOutlineRise size={50} color="white" className="opacity-50" />
              </div>
            </div>
            <div className="p-3 bg-blue-400 rounded-xl flex space-x-3 h-[100px]   justify-between">
              <div className="flex flex-col gap-2">
                <span className="block w-[100%] font-[600] text-white">25</span>
                <span className="block w-[100%] text-[14px] font-[500] text-white">
                  Total subscription
                </span>
              </div>
              <div className="flex justify-center items-center box-border">
                {/* <img
                    className=" w-[35px] h-[35px]  box-border"
                    src={Icon3}
                    alt=""
                  /> */}
                <IoIosPeople size={50} color="white" className="opacity-50" />
              </div>
            </div>
            <div className="p-3 bg-orange-400 rounded-xl flex space-x-3 h-[100px]   justify-between">
              <div className="flex flex-col gap-2">
                <span className="block w-[100%] font-[600] text-white">3</span>
                <span className="block w-[100%] text-[14px] font-[500] text-white">
                  Total service man
                </span>
              </div>
              <div className="flex justify-center items-center box-border">
                {/* <img
                    className=" w-[35px] h-[35px]  box-border"
                    src={Icon4}
                    alt=""
                  /> */}
                <IoPeople color="white" size={50} className="opacity-50" />
              </div>
            </div>
            <div className="p-3 bg-blue-600 rounded-xl flex space-x-3 h-[100px]   justify-between">
              <div className="flex flex-col gap-2">
                <span className="block w-[100%] font-[600] text-white">
                  2040
                </span>
                <span className="block w-[100%] text-[14px] font-[500] text-white">
                  Total booking served
                </span>
              </div>
              <div className=" flex justify-center items-center box-border">
                {/* <img
                    className="w-[35px] h-[35px]  box-border opacity-50"
                    src={Frame}
                    alt=""
                  /> */}
                <AiTwotoneSetting
                  color="white"
                  size={50}
                  className="opacity-50"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[100%] h-auto   mb-[20px] gap-2">
          <div className=" w-[75%] bg-white rounded-lg">
            <div className="flex justify-between">
              <h2 className="p-[14px] font-bold text-blue-500">
                Earning Statistics
              </h2>
              <div className="flex gap-3 px-2">
                <div
                  className="font-[600] h-auto text-center border-[1px] border-white py-[5px] px-[20px] m-[10px] text-blue-500 "
                  style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.2)" }}
                >
                  Yearly
                </div>

                <div className="relative inline-block w-40 m-[10px]">
                  <select
                    className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[14px] h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={earningsData[selectedYear] || []}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-[25%] bg-white rounded-lg">
            <h2 className="p-[14px] font-bold text-blue-500 ">
              Recent Transactions
            </h2>
            <div className="flex w-[100%] gap-4 py-2 px-[14px]">
              <FontAwesomeIcon icon={faArrowUp} style={{ color: "#00b700" }} />

              <div className="w-[100%] flex justify-between">
                <span className="text-[#979797] font-medium text-[12px]">
                  0 Transaction this month
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-auto m-[20px 20px] bg-white rounded-lg">
          <div className="flex justify-between p-[20px]">
            <h2 className=" font-bold text-blue-500">
              Recent Booking Activity
            </h2>
            <a className="text-blue-500 text-[14px] font-medium" href="">
              View all
            </a>
          </div>
          <div className="flex px-[20px] gap-5 border-b border-[#E0E0E0]">
            <div className="relative pr-[10px] pb-[10px] text-[#979797] hover:text-black cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
              Normal Booking
            </div>
            <div className="relative pb-[10px] text-[#979797] hover:text-black cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
              Customize Booking
            </div>
          </div>

          <div className="w-full h-auto flex">
            {/* Left Side */}
            <div className="w-1/2 h-auto border-r border-[#E0E0E0]">
              <div className="flex items-center gap-2 py-2 px-4">
                <img className="w-9 h-9 object-cover" src={Icon2} alt="" />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="font-semibold text-[#979797]">
                      Booking #100115
                    </div>
                    <div className="text-sm text-gray-500">
                      26-Aug-24 15:47 PM
                    </div>
                  </div>
                  <button className="bg-blue-100 text-blue-500 font-medium rounded px-3 py-1">
                    Pending
                  </button>
                </div>
              </div>
              <hr className="w-[70%] ml-[20px] text-[#E0E0E0]" />
              <div className="flex items-center gap-2 py-2 px-4">
                <img className="w-9 h-9 object-cover" src={Icon2} alt="" />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="font-semibold text-[#979797]">
                      Booking #100115
                    </div>
                    <div className="text-sm text-gray-500">
                      26-Aug-24 15:47 PM
                    </div>
                  </div>
                  <button className="bg-blue-100 text-blue-500 font-medium rounded px-3 py-1">
                    Pending
                  </button>
                </div>
              </div>
              <hr className="w-[70%] ml-[20px] text-[#E0E0E0]" />
              <div className="flex items-center gap-2 py-2 px-4">
                <img className="w-9 h-9 object-cover" src={Icon2} alt="" />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="font-semibold text-[#979797]">
                      Booking #100115
                    </div>
                    <div className="text-sm text-gray-500">
                      26-Aug-24 15:47 PM
                    </div>
                  </div>
                  <button className="bg-blue-100 text-blue-500 font-medium rounded px-3 py-1">
                    Pending
                  </button>
                </div>
              </div>
              <hr className="w-[70%] ml-[20px] text-[#E0E0E0]" />
              <div className="flex items-center gap-2 py-2 px-4">
                <img className="w-9 h-9 object-cover" src={Icon2} alt="" />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="font-semibold text-[#979797]">
                      Booking #100115
                    </div>
                    <div className="text-sm text-gray-500">
                      26-Aug-24 15:47 PM
                    </div>
                  </div>
                  <button className="bg-blue-100 text-blue-500 font-medium rounded px-3 py-1">
                    Pending
                  </button>
                </div>
              </div>
              <hr className="w-[70%] ml-[20px] text-[#E0E0E0]" />
            </div>

            {/* Right Side */}
            <div className="w-1/2 h-auto flex justify-between items-start px-4 py-5">
              {/* Content here if needed */}
              {/* //pieChart */}
              <TotalVendorsChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
