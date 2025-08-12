import React, { useState } from "react";
import Broom_LLC1 from "../images/Broom_LLC1.png";
import arrow from "../images/solar_alt-arrow-down-linear.png";
import rightArrow from "../images/solar_alt-arrow-down-linear1.png";
import { FaSearch } from "react-icons/fa";
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
import { RxPerson } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { LuFileText } from "react-icons/lu";
import { TbFileAnalytics } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { HiMenu, HiX, HiBell } from "react-icons/hi";

function Sidebar({ toggleSidebar, isOpen }) {
  const [dropdowns, setDropdowns] = useState({
    booking: false,
    user: false,
    promotion: false,
    report: false,
  });

  const location = useLocation();

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const bookingSubItems = [
    // { label: "Customized Requests", to: "/Dashboard" },
    { label: "Booking Requests", to: "/BookingRequest" },
    { label: "Accepted", to: "/BookingRequest1" },
    // { label: "Ongoing", to: "/Dashboard" },
    // { label: "Completed", to: "/Dashboard" },
    // { label: "Canceled", to: "/Dashboard" },
  ];

  const promotionItems = [
    // { label: "Ads List", to: "/Dashboard" },
    // { label: "Create New Advertisement", to: "/Dashboard" },
  ];

  const userItems = [
    // { label: "Service Man", to: "/ServicemanList" },
    // { label: "Add new serviceman", to: "/Dashboard" },
  ];

  const reportItems = [
    // { label: "Transaction Report", to: "/Dashboard" },
    // { label: "Business Report", to: "/Dashboard" },
    // { label: "Booking Report", to: "/Dashboard" },
  ];
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 
        ${isOpen ? "w-1/6 visible" : "hidden"} 
        overflow-hidden z-50`}
      >
        <div className="w-full h-auto px-2 pt-5">
          <div className="flex justify-between mb-5 pl-4">
            <img className="w-[137px] h-[24px]" src={Broom_LLC1} alt="Logo" />
            {isOpen && (
              <HiX
                size={18}
                onClick={toggleSidebar}
                className="text-gray-500 cursor-pointer hover:scale-110"
              />
            )}
          </div>

          <Section>
            <MenuItem
              icon={<MdDashboard />}
              label="Dashboard"
              active
              to="/Dashboard"
              isActive={location.pathname === "/Dashboard"}
            />
          </Section>

          <hr className="text-[#E0E0E0] mt-5 mb-5" />

          <Section title="BOOKING MANAGEMENT">
            <DropdownItem
              icon={<FaCartShopping />}
              label="Bookings"
              isOpen={dropdowns.booking}
              onToggle={() => toggleDropdown("booking")}
            />

            {dropdowns.booking &&
              bookingSubItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <SubItem
                    to={item.to}
                    label={item.label}
                    count={item.count}
                    isActive={isActive}
                  />
                );
              })}
          </Section>

          <hr className="text-[#E0E0E0] mt-5 mb-5" />

          <Section title="HELP & SUPPORT">
            <MenuItem
              icon={<MdChat />}
              label="Chatting"
              to="/Messages"
              isActive={location.pathname === "/Messages"}
            />
          </Section>
          <hr className="text-[#E0E0E0] mt-5 mb-5" />

          <Section title="SERVICE MANAGEMENT">
            <MenuItem
              icon={<RiSuitcase2Fill />}
              label="Available services"
              to="/AllServices"
              isActive={location.pathname === "/AllServices"}
            />
            <MenuItem
              icon={<RiSuitcase2Fill />}
              label="My services"
              to="/MyServices"
              isActive={location.pathname === "/MyServices"}
            />
            {/* <MenuItem
              icon={<MdSubscriptions />}
              label="My subscriptions"
              to="/MySubscription"
              isActive={location.pathname === "/MySubscription"}
            />
            <MenuItem
              icon={<TfiMenuAlt />}
              label="Service Requests"
              to="/ServiceRequestList"
              isActive={location.pathname === "/ServiceRequestList"}
            /> */}
          </Section>

          {/* <Section title="PROMOTION MANAGEMENT">
              <DropdownItem
                icon={<AiFillSound />}
                label="Advertisements"
                isOpen={dropdowns.promotion}
                onToggle={() => toggleDropdown("promotion")}
              />
              {dropdowns.promotion &&
                promotionItems.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <SubItem
                      to={item.to}
                      key={item.label}
                      label={item.label}
                      count={item.count}
                      isActive={isActive}
                    />
                  );
                })}
            </Section> */}

          {/* <Section title="USER MANAGEMENT">
            <DropdownItem
              icon={<MdMan />}
              label="Service Man"
              isOpen={dropdowns.user}
              onToggle={() => toggleDropdown("user")}
            />
            {dropdowns.user &&
              userItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <SubItem
                    key={item.label}
                    label={item.label}
                    to={item.to}
                    isActive={isActive}
                  />
                );
              })}
          </Section> */}

          {/* <Section title="REPORTS & ANALYTICS">
              <DropdownItem
                icon={<MdEventNote />}
                label="Reports"
                isOpen={dropdowns.report}
                onToggle={() => toggleDropdown("report")}
              />
              {dropdowns.report &&
                reportItems.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <SubItem
                      key={item.label}
                      label={item.label}
                      to={item.to}
                      isActive={isActive}
                    />
                  );
                })}
            </Section> */}

          {/* <Section title="ACCOUNT MANAGEMENT">
              <MenuItem
                icon={<MdAccountCircle />}
                label="Account Information"
                to="/Dashboard"
              />
              <MenuItem
                icon={<AiFillBank />}
                label="Bank Information"
                to="/Dashboard"
              />
            </Section> */}

          {/* <Section title="SYSTEM MANAGEMENT">
              <MenuItem
                icon={<MdBusinessCenter />}
                label="Business settings"
                to="/Dashboard"
              />
              <MenuItem
                icon={<GiSettingsKnobs />}
                label="Business plan"
                to="/Dashboard"
              />
              <MenuItem
                icon={<AiFillSound />}
                label="Notification Channel"
                to="/Dashboard"
              />
            </Section> */}
        </div>
      </div>
    </>
  );
}

const Section = ({ title, children }) => (
  <>
    <p className="text-[12px] mx-4 text-[#929292] my-2">{title}</p>
    <div className="px-4 mt-4">
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  </>
);

const MenuItem = ({ icon, label, isActive, to }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 py-2 pl-2 cursor-pointer hover:bg-blue-50 hover:text-blue-500 font-medium ${
      isActive ? "text-blue-500 bg-blue-50 " : "text-[#202224]"
    } text-[14px]`}
  >
    {icon}
    <span className="hover:text-blue-500">{label}</span>
  </Link>
);

const DropdownItem = ({ icon, label, isOpen, onToggle }) => (
  <div
    className={`flex items-center gap-3 py-2 px-2 cursor-pointer hover:text-blue-500 ${
      isOpen ? "text-blue-500 bg-blue-50 " : "text-[#202224]"
    }`}
    onClick={onToggle}
  >
    <div
      className={
        isOpen ? "text-blue-500" : "text-[#1a1a1a] hover:text-blue-500"
      }
    >
      {icon}
    </div>
    <span
      className={`text-[14px] font-medium  ${
        isOpen ? "text-blue-500" : "text-[#1a1a1a]"
      }`}
    >
      {label}
    </span>
    <img
      src={isOpen ? rightArrow : arrow}
      alt="arrow"
      className="ml-auto w-3 h-3"
    />
  </div>
);

const SubItem = ({ label, count, to, isActive }) => (
  <Link
    to={to}
    className="pl-9 py-2 w-full flex justify-between items-center mb-2 "
  >
    {/* <BsDot /> */}
    <span className="flex items-center gap-2">
      <BsDot
        className={`text-lg ${isActive ? "text-blue-500" : "text-gray-500"}`}
      />
      <span
        className={`text-[14px] font-medium  ${
          isActive ? "text-blue-500" : "text-gray-700"
        }`}
      >
        {label}
      </span>
    </span>
  </Link>
);

export default Sidebar;
