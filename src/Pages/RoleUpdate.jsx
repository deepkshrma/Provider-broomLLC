import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // for regular style
import Togglebutton from "../assets/components/Togglebutton";

function RoleUpdate() {
  return (
    <>
      {/* Main Container */}
      <div className=" w-full h-full p-5 box-border mb-[100px]">
        <div className="flex  justify-between items-center">
          <h2 className=" font-bold mb-3 text-[20px]">All Service</h2>
        </div>

        <div className="w-[100%] h-auto p-5 mt-2 bg-white rounded-lg overflow-y-auto">
          {/* Role Name * */}
          <div className="w-1/2 mb-[40px]">
            <div class="relative">
              <FontAwesomeIcon
                className="absolute text-gray-400 top-4 left-4"
                icon={faEnvelope}
                size="sm"
              />
              <input
                type="text"
                id="floating_outlined"
                class="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-600 peer pl-12"
              />
              {/* dark:text-white dark:border-gray-600,          dark:focus:border-blue-500 */}
              <label
                for="floating_outlined"
                class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Role Name *
              </label>
              {/* dark:text-gray-400, dark:bg-gray-900 */}
            </div>
          </div>
          {/* Set Permission */}
          <div>
            <h2 className="text-[14px] font-[600] ">Set Permission</h2>
            <p className="text-[14px] text-[#979797] font-medium ">
              Modify what individuals on this role can do
            </p>
            <hr className="text-[#E0E0E0] my-5" />
          </div>
          {/* Dashboard */}
          <div className="h-auto border border-[#E0E0E0] rounded p-5 my-5">
            <h2 className="text-[14px] font-[600] ">Dashboard</h2>
            <hr className="text-[#E0E0E0] my-5" />
            <h2 className="text-[14px] font-[600] ">Manage Access</h2>
            <table className="mt-[10px] w-[100%] mb-6">
              <thead className="bg-blue-50">
                <tr className=" text-gray-700">
                  <th className="text-[14px] px-4 py-5 text-left">Add</th>
                  <th className="text-[14px] px-4 py-5 text-left">Update</th>
                  <th className="text-[14px] px-4 py-5 text-left">Delete</th>
                  <th className="text-[14px] px-4 py-5 text-left">Export</th>
                  <th className="text-[14px] px-4 py-5 text-left">Status</th>
                  <th className="text-[14px] px-4 py-5 text-left">Deny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="text-[#E0E0E0] my-5" />
          </div>
          {/* Booking Management */}
          <div className="h-auto border border-[#E0E0E0] rounded p-5 my-5">
            <h2 className="text-[14px] font-[600] ">Booking Management</h2>
            <hr className="text-[#E0E0E0] my-5" />
            <h2 className="text-[14px] font-[600] ">Manage Access</h2>
            <table className="mt-[10px] w-[100%] mb-6">
              <thead className="bg-blue-50">
                <tr className=" text-gray-700">
                  <th className="text-[14px] px-4 py-5 text-left">Add</th>
                  <th className="text-[14px] px-4 py-5 text-left">Update</th>
                  <th className="text-[14px] px-4 py-5 text-left">Delete</th>
                  <th className="text-[14px] px-4 py-5 text-left">Export</th>
                  <th className="text-[14px] px-4 py-5 text-left">Status</th>
                  <th className="text-[14px] px-4 py-5 text-left">Deny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="text-[#E0E0E0] my-5" />
          </div>
          {/* Promotion Management */}
          <div className="h-auto border border-[#E0E0E0] rounded p-5 my-5">
            <h2 className="text-[14px] font-[600] ">Promotion Management</h2>
            <hr className="text-[#E0E0E0] my-5" />
            <div className="mb-5 flex gap-11">
              <label htmlFor="" className="text-[14px] text-gray-500 ">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Discounts
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" /> Coupons
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" /> Wallet
                Bonus
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Campaigns
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Advertisements
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Promotional Banners
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500 ">
                <input type="checkbox" name="" id="" className="mr-1" /> Send
                Notifications
              </label>
            </div>
            <h2 className="text-[14px] font-[600] ">Manage Access</h2>
            <table className="mt-[10px] w-[100%] mb-6">
              <thead className="bg-blue-50">
                <tr className=" text-gray-700">
                  <th className="text-[14px] px-4 py-5 text-left">Add</th>
                  <th className="text-[14px] px-4 py-5 text-left">Update</th>
                  <th className="text-[14px] px-4 py-5 text-left">Delete</th>
                  <th className="text-[14px] px-4 py-5 text-left">Export</th>
                  <th className="text-[14px] px-4 py-5 text-left">Status</th>
                  <th className="text-[14px] px-4 py-5 text-left">Deny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="text-[#E0E0E0] my-5" />
          </div>
          {/* Provider Management */}
          <div className="h-auto border border-[#E0E0E0] rounded p-5 my-5">
            <h2 className="text-[14px] font-[600] ">Promotion Management</h2>
            <hr className="text-[#E0E0E0] my-5" />
            <div className="mb-5 flex gap-15">
              <label htmlFor="" className="text-[14px] text-gray-500 ">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Onboarding Request
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Provider
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />
                Withdraws
              </label>
            </div>
            <h2 className="text-[14px] font-[600] ">Manage Access</h2>
            <table className="mt-[10px] w-[100%] mb-6">
              <thead className="bg-blue-50">
                <tr className=" text-gray-700">
                  <th className="text-[14px] px-4 py-5 text-left">Add</th>
                  <th className="text-[14px] px-4 py-5 text-left">Update</th>
                  <th className="text-[14px] px-4 py-5 text-left">Delete</th>
                  <th className="text-[14px] px-4 py-5 text-left">Export</th>
                  <th className="text-[14px] px-4 py-5 text-left">Status</th>
                  <th className="text-[14px] px-4 py-5 text-left">Deny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="text-[#E0E0E0] my-5" />
          </div>
          {/* Service Management */}
          <div className="h-auto border border-[#E0E0E0] rounded p-5 my-5">
            <h2 className="text-[14px] font-[600] ">Service Management</h2>
            <hr className="text-[#E0E0E0] my-5" />
            <div className="mb-5 flex gap-15">
              <label htmlFor="" className="text-[14px] text-gray-500 ">
                <input type="checkbox" name="" id="" className="mr-1" /> Service
                Zones Setup
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Categories
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />
                Services
              </label>
            </div>
            <h2 className="text-[14px] font-[600] ">Manage Access</h2>
            <table className="mt-[10px] w-[100%] mb-6">
              <thead className="bg-blue-50">
                <tr className=" text-gray-700">
                  <th className="text-[14px] px-4 py-5 text-left">Add</th>
                  <th className="text-[14px] px-4 py-5 text-left">Update</th>
                  <th className="text-[14px] px-4 py-5 text-left">Delete</th>
                  <th className="text-[14px] px-4 py-5 text-left">Export</th>
                  <th className="text-[14px] px-4 py-5 text-left">Status</th>
                  <th className="text-[14px] px-4 py-5 text-left">Deny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="text-[#E0E0E0] my-5" />
          </div>
          {/* Customer Management */}
          <div className="h-auto border border-[#E0E0E0] rounded p-5 my-5">
            <h2 className="text-[14px] font-[600] ">Customer Management</h2>
            <hr className="text-[#E0E0E0] my-5" />
            <div className="mb-5 flex gap-15">
              <label htmlFor="" className="text-[14px] text-gray-500 ">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Customers
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Customer Wallet
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />
                Loyalty Point
              </label>
            </div>
            <h2 className="text-[14px] font-[600] ">Manage Access</h2>
            <table className="mt-[10px] w-[100%] mb-6">
              <thead className="bg-blue-50">
                <tr className=" text-gray-700">
                  <th className="text-[14px] px-4 py-5 text-left">Add</th>
                  <th className="text-[14px] px-4 py-5 text-left">Update</th>
                  <th className="text-[14px] px-4 py-5 text-left">Delete</th>
                  <th className="text-[14px] px-4 py-5 text-left">Export</th>
                  <th className="text-[14px] px-4 py-5 text-left">Status</th>
                  <th className="text-[14px] px-4 py-5 text-left">Deny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="text-[#E0E0E0] my-5" />
          </div>
          {/* Employee Management */}
          <div className="h-auto border border-[#E0E0E0] rounded p-5 my-5">
            <h2 className="text-[14px] font-[600] ">Employee Management</h2>
            <hr className="text-[#E0E0E0] my-5" />
            <div className="mb-5 flex gap-15">
              <label htmlFor="" className="text-[14px] text-gray-500 ">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Employee Role Setup
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Employee List
              </label>
            </div>
            <h2 className="text-[14px] font-[600] ">Manage Access</h2>
            <table className="mt-[10px] w-[100%] mb-6">
              <thead className="bg-blue-50">
                <tr className=" text-gray-700">
                  <th className="text-[14px] px-4 py-5 text-left">Add</th>
                  <th className="text-[14px] px-4 py-5 text-left">Update</th>
                  <th className="text-[14px] px-4 py-5 text-left">Delete</th>
                  <th className="text-[14px] px-4 py-5 text-left">Export</th>
                  <th className="text-[14px] px-4 py-5 text-left">Status</th>
                  <th className="text-[14px] px-4 py-5 text-left">Deny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="text-[#E0E0E0] my-5" />
          </div>
          {/* Transaction Management */}
          <div className="h-auto border border-[#E0E0E0] rounded p-5 my-5">
            <h2 className="text-[14px] font-[600] ">Transaction Management</h2>
            <hr className="text-[#E0E0E0] my-5" />
            <h2 className="text-[14px] font-[600] ">Manage Access</h2>
            <table className="mt-[10px] w-[100%] mb-6">
              <thead className="bg-blue-50">
                <tr className=" text-gray-700">
                  <th className="text-[14px] px-4 py-5 text-left">Add</th>
                  <th className="text-[14px] px-4 py-5 text-left">Update</th>
                  <th className="text-[14px] px-4 py-5 text-left">Delete</th>
                  <th className="text-[14px] px-4 py-5 text-left">Export</th>
                  <th className="text-[14px] px-4 py-5 text-left">Status</th>
                  <th className="text-[14px] px-4 py-5 text-left">Deny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="text-[#E0E0E0] my-5" />
          </div>
          {/* System Management */}
          <div className="h-auto border border-[#E0E0E0] rounded p-5 my-5">
            <h2 className="text-[14px] font-[600] ">System Management</h2>
            <hr className="text-[#E0E0E0] my-5" />
            <div className="mb-5 flex gap-15">
              <label htmlFor="" className="text-[14px] text-gray-500 ">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Business Settings
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" /> Landing
                Page Settings
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />{" "}
                Configurations
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" />
                Page Settings
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" /> Gallery
              </label>
              <label htmlFor="" className="text-[14px] text-gray-500">
                <input type="checkbox" name="" id="" className="mr-1" /> Backup
                Database
              </label>
            </div>
            <h2 className="text-[14px] font-[600] ">Manage Access</h2>
            <table className="mt-[10px] w-[100%] mb-6">
              <thead className="bg-blue-50">
                <tr className=" text-gray-700">
                  <th className="text-[14px] px-4 py-5 text-left">Add</th>
                  <th className="text-[14px] px-4 py-5 text-left">Update</th>
                  <th className="text-[14px] px-4 py-5 text-left">Delete</th>
                  <th className="text-[14px] px-4 py-5 text-left">Export</th>
                  <th className="text-[14px] px-4 py-5 text-left">Status</th>
                  <th className="text-[14px] px-4 py-5 text-left">Deny</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                  <td className="text-[14px] px-4 py-5 text-left">
                    <Togglebutton />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="text-[#E0E0E0] my-5" />
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <div className="text-white bg-blue-500 text-[14px] rounded px-4 py-1.5">
              PREVIOUS
            </div>
            <div className="text-white bg-blue-500 text-[14px] rounded px-4 py-1.5">
              FINISH
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoleUpdate;
