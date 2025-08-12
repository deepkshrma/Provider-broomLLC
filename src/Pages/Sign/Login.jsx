import React, { useState, useEffect } from "react";
import Group2561 from "../../assets/images/Group2561.png";
import pngwing2 from "../../assets/images/pngwing2.png";
import Broom_LLC1 from "../../assets/images/Broom_LLC1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import passwordIcon from "../../assets/images/password_svgrepo.com.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { USER_BASE_URL } from "../../Config/Config";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show_password, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${USER_BASE_URL}/login`, {
        email,
        password,
      });
      const user = response?.data?.user;
      const token = response?.data?.token;
      const profilePhoto =
        user?.profile_picture &&
        user.profile_picture !== "null" &&
        user.profile_picture !== "undefined" &&
        user.profile_picture.trim() !== ""
          ? user.profile_picture
          : null;

      const broom_auth = { token, user };

      
      localStorage.setItem("broom_auth", JSON.stringify(broom_auth));
      localStorage.setItem("profile_photo", profilePhoto);
      setIsAuthenticated(true);

      console.log("Login successful");
      navigate("/Dashboard");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!show_password);
  };

  return (
    <div className="flex w-[100%] h-[100vh]">
      {/* Left Side (Login Form) */}
      <div className="w-[35%] h-[100%] bg-white">
        <div className="flex justify-center items-center w-[100%] h-[65%] pt-[40px] px-[60px]">
          <div className="flex flex-col justify-evenly w-[100%] h-[100%]">
            <img src={Broom_LLC1} alt="" />
            <div className="gap-4">
              <h1 className="welcomeBack text-[#000000] font-bold">
                Welcome Back
              </h1>
            </div>

            {/* ✅ Correct form structure */}
            <form className="flex flex-col gap-3" onSubmit={handlelogin}>
              {/* Email Field */}
              <div className="relative">
                <FontAwesomeIcon
                  className="absolute text-[#303841] top-4 left-4"
                  icon={faEnvelope}
                  size="lg"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 peer pl-12"
                  required
                />
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:text-blue-600">
                  Username/ Email ID
                </label>
              </div>

              {/* Password Field */}
              <div className="relative">
                <img
                  className="absolute top-3 left-4"
                  src={passwordIcon}
                  alt=""
                />
                <input
                  type={show_password ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 peer pl-12"
                  required
                />
                {show_password ? (
                  <FaEye
                    className="absolute top-3 right-4 text-gray-600 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEyeSlash
                    className="absolute top-3 right-4 text-gray-600 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:text-blue-600">
                  Password
                </label>
              </div>

              {/* ✅ Login Button */}
              <button
                type="submit"
                className="w-[100%] bg-[#0A83E6] text-white mt-4 py-[10px] rounded cursor-pointer"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="w-[100%] h-[35%]">
          <img src={pngwing2} alt="" />
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-[65%] h-[100%] box-border">
        <div className="flex justify-center items-center w-[100%] h-[100%] box-border px-[20px] py-[40px] bg-blue-50">
          <img
            className="w-[90%] h-[90%] object-contain"
            src={Group2561}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
