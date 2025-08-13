import { useEffect, useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
// import ContextApi from "../../ContextApi";
// import DeleteModel from "DeleteModel.jsx";
// import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import DeleteModel from "./DeleteModel";

const UserDropdown = () => {
  const [fullName, setFullName] = useState("");
  const [userId, setUserId] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { logout } = useAuth(); // logout from context
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("broom_auth");
    if (stored) {
      const parsed = JSON.parse(stored);
      const user = parsed.user;
      if (user) {
        setFullName(`${user.first_name} ${user.last_name}`);
        setUserId(user._id);
      }
    }
  }, []);

  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const confirmDelete = () => {
    logout();
    localStorage.removeItem("broom_auth");
    localStorage.removeItem("profile_photo");
    localStorage.removeItem("sidebar_open_dropdown");
    localStorage.removeItem("sidebar_active_item");
    navigate("/");
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("broom_auth");
    localStorage.removeItem("profile_photo"); // clear token and auth
    navigate("/"); // redirect to login
  };

  return (
    <>
      <div className={`relative `}>
        <div className="absolute right-0 top-6  flex flex-col rounded-xl border border-gray-200 bg-white shadow-lg px-0.5  min-w-[220px] ">
          <ul className="flex flex-col">
            <li>
              <Link
                to="/Profile"
                className="flex items-center gap-3 py-2 px-5 text-gray-700 group text-[14px] hover:bg-gray-100"
              >
                <FaUser size={13} />
                <span className="whitespace-nowrap">My profile</span>
              </Link>
            </li>

            <hr className="text-[#E0E0E0]" />

            <li>
              <Link
                to="ChangePassword"
                className="flex items-center gap-3 py-2 px-5 text-gray-700 group text-[14px] hover:bg-gray-100"
              >
                <FaUser size={13} />
                <span className="whitespace-nowrap">Change Password</span>
              </Link>
            </li>

            <hr className="text-[#E0E0E0]" />

            {/* 
    <li onClick={handleuserDropdown}>
      <Link
        to="/ProfileUpdate"
        className="flex items-center gap-3 py-2 px-5 text-gray-700 group text-[14px] hover:bg-gray-100"
      >
        <FaUserEdit size={17} />
        <span className="whitespace-nowrap">Edit profile</span>
      </Link>
    </li>

    <hr className="text-[#E0E0E0]" />
    */}

            <li>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // stop dropdown close
                  openDeleteModal();
                }}
                className="flex w-full items-center gap-3 py-2 px-5 text-red-700 rounded-b-xl group text-[14px] hover:bg-gray-100 cursor-pointer"
              >
                <FiLogOut className="w-4" />
                <span className="whitespace-nowrap">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {/* <DeleteModel
        isOpen={showDeleteModal}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        redbutton="Confirm"
        para="Do you really want to logout? This action cannot be
            undone."
      /> */}

      {/*  Modal outside the dropdown */}
      {showDeleteModal && (
        <DeleteModel
          isOpen={showDeleteModal}
          onClose={closeDeleteModal}
          onConfirm={confirmDelete}
          redbutton="Confirm"
          para="Do you really want to logout? This action cannot be undone."
        />
      )}
    </>
  );
};

export default UserDropdown;
