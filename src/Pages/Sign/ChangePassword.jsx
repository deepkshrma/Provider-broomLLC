import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { USER_BASE_URL } from "../../Config/Config";
import PageTitle from "../../assets/components/PageTittle";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (
      !formData.old_password ||
      !formData.new_password ||
      !formData.confirm_password
    ) {
      toast.error("All fields are required!");
      return;
    }
    if (formData.new_password !== formData.confirm_password) {
      toast.error("New password and confirm password do not match!");
      return;
    }

    try {
      setLoading(true);
      const authData = JSON.parse(localStorage.getItem("broom_auth"));
      const token = authData?.token;

      if (!token) {
        toast.error("Session expired. Please log in again.");
        navigate("/");
        return;
      }

      // ✅ API call
      const response = await axios.patch(
        `${USER_BASE_URL}/change-password`,
        {
          old_passowrd: formData.old_password, // match API's typo key
          new_password: formData.new_password,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (
        response.data?.status === true ||
        response.data?.message?.toLowerCase().includes("success")
      ) {
        toast.success("Password changed successfully!");
        setFormData({
          old_password: "",
          new_password: "",
          confirm_password: "",
        });
        navigate("/profile");
      } else {
        toast.error(response.data?.message || "Failed to change password!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error changing password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <PageTitle title="Change Password" />
      <form
        onSubmit={handleSubmit}
        className="mt-10 bg-white py-10 px-10 rounded max-w-lg mx-auto shadow"
      >
        {/* Old Password */}
        <InputField
          label="Old Password"
          name="old_password"
          type="password"
          value={formData.old_password}
          onChange={handleChange}
        />

        {/* New Password */}
        <InputField
          label="New Password"
          name="new_password"
          type="password"
          value={formData.new_password}
          onChange={handleChange}
        />

        {/* Confirm Password */}
        <InputField
          label="Confirm Password"
          name="confirm_password"
          type="password"
          value={formData.confirm_password}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 w-full mt-6 rounded px-4 py-2 text-white cursor-pointer hover:bg-blue-600 transition"
        >
          {loading ? "Changing..." : "Change Password"}
        </button>
      </form>
    </div>
  );
};

// ✅ Floating Label InputField (same design as UpdateProfile)
function InputField({ label, name, type = "text", value, onChange }) {
  return (
    <div className="relative w-full mb-6">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 "
      />
      <label
        htmlFor={name}
        className="absolute text-sm font-medium text-gray-700 bg-white px-1 
        transform -translate-y-1/2 top-0 left-2 peer-placeholder-shown:top-1/2 
        peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-sm 
        peer-focus:top-0 peer-focus:text-gray-700 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}

export default ChangePassword;
