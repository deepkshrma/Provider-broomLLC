import React from "react";
import Broom_LLC1 from "../assets/images/Broom_LLC1.png";
import arrow from "../assets/images/solar_alt-arrow-down-linear.png";
import Icon from "../assets/images/Icon.png";
import Icon1 from "../assets/images/Icon1.png";
import man from "../assets/images/man-438081_960_720.png";
import banner2 from "../assets/images/banner2.png";
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
import { IoMdClose } from "react-icons/io";

function AllServices1() {
  return (
    <>
      {/* model box */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/60  flex justify-center items-center z-20">
        <div className="w-[25%] h-auto bg-[#fcfcfc] p-1 relative rounded">
          <div className="w-full flex justify-end ">
            <IoMdClose className="text-[#979797]" />
          </div>
          <div className="w-full flex justify-center p-4">
            <div className="w-[60%]">
              {/* Top Centered Avatar and Label */}
              <div className="flex justify-center mb-4">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={banner2}
                    alt="Avatar"
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                  <p className="font-bold text-[12px] text-center mt-1">
                    ( 2 ) Service
                  </p>
                </div>
              </div>

              {/* Bottom Two Services */}
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <img
                    src={banner2}
                    alt="Service 1"
                    className="w-[50px] h-[50px] object-cover"
                  />
                  <p className="text-[11px] text-center mt-1">
                    Disinfecting Of...
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={banner2}
                    alt="Service 2"
                    className="w-[50px] h-[50px] object-cover"
                  />
                  <p className="text-[11px] text-center mt-1">
                    Disinfecting Ho...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className=" w-full h-full p-5 box-border mb-[200px]">
        <h2 className="flex items-center font-bold mb-3">All Service</h2>
        <div className="w-full h-auto flex gap-2 bg-white rounded">
          <div className="w-[20%]  h-auto p-[15px]">
            <div className="w-full h-auto border-l-[1px] border-[#E0E0E0] ">
              <div className="text-[12px] p-[15px] border-l-[2px] border-blue-500 bg-blue-50">
                All
              </div>
              <div className="text-[12px] p-[15px] ">Shifting</div>
              <div className="text-[12px] p-[15px] ">Plumbing</div>
              <div className="text-[12px] p-[15px] ">Painting & Renovation</div>
              <div className="text-[12px] p-[15px] ">House Cleaning</div>
              <div className="text-[12px] p-[15px] ">Gadget Repair</div>
              <div className="text-[12px] p-[15px] ">Emergency</div>
              <div className="text-[12px] p-[15px] ">Car Service</div>
              <div className="text-[12px] p-[15px] ">Beauty & Salon</div>
              <div className="text-[12px] p-[15px] ">Appliance Repair</div>
              <div className="text-[12px] p-[15px] ">AC Repair</div>
            </div>
          </div>
          <div className="w-[80%]  h-auto p-[15px]">
            <div className="grid grid-cols-3 mb-5 gap-5 h-[200px]">
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">
                  Office Shifting
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <a href="#" className="text-[12px] text-blue-500">
                    <u>
                      <b className="mr-1">1</b>Service
                    </u>
                  </a>
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    UNSUBSCRIBE
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">
                  Bachelor Shifting
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    UNSUBSCRIBE
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">
                  Family Shifting
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    UNSUBSCRIBE
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 mb-5 gap-5 h-[200px]">
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">
                  Interior Design
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <a href="#" className="text-[12px] text-blue-500">
                    <u>
                      <b className="mr-1">1</b>Service
                    </u>
                  </a>
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    UNSUBSCRIBE
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">Renovation</p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <a href="#" className="text-[12px] text-blue-500">
                    <u>
                      <b className="mr-1">1</b>Service
                    </u>
                  </a>
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    UNSUBSCRIBE
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">Painting</p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <a href="#" className="text-[12px] text-blue-500">
                    <u>
                      <b className="mr-1">1</b>Service
                    </u>
                  </a>
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    UNSUBSCRIBE
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 mb-5 gap-5 h-[200px]">
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">Makeup</p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <a href="#" className="text-[12px] text-blue-500">
                    <u>
                      <b className="mr-1">2</b>Service
                    </u>
                  </a>
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    SUBSCRIBE
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">
                  Men's Hair and Bread
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <a href="#" className="text-[12px] text-blue-500">
                    <u>
                      <b className="mr-1">1</b>Service
                    </u>
                  </a>
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    SUBSCRIBE
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">
                  User Facial & Spa
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <a href="#" className="text-[12px] text-blue-500">
                    <u>
                      <b className="mr-1">2</b>Service
                    </u>
                  </a>
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    SUBSCRIBE
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 mb-5 gap-5 h-[200px]">
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">Hair Spa</p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <a href="#" className="text-[12px] text-blue-500">
                    <u>
                      <b className="mr-1">2</b>Service
                    </u>
                  </a>
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    SUBSCRIBE
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">
                  Laptop & Desktop Repair
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <a href="#" className="text-[12px] text-blue-500">
                    <u>
                      <b className="mr-1">2</b>Service
                    </u>
                  </a>
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    UNSUBSCRIBE
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-between  overflow-hidden shadow-sm">
                {/* Image */}
                <div className="w-full h-[60%]">
                  <img
                    src={banner2}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="px-3 text-[12px] font-medium mt-2">
                  Mobile Repair
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                  <div className="w-1/2 text-[12px] text-white bg-blue-500 text-center py-2 rounded">
                    UNSUBSCRIBE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllServices1;
