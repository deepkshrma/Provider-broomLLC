import React, { useEffect, useState } from "react";
import PageTitle from "../../assets/components/PageTittle";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { USER_BASE_URL } from "../../Config/Config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UpdateProfile() {
  const [previewProfile, setPreviewProfile] = useState(null);
  const [previewFrontId, setPreviewFrontId] = useState(null);
  const [previewBackId, setPreviewBackId] = useState(null);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    ssn_itin: "",
    address: {
      street: "",
      houseNumber: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    },
    profile_picture: null,
    govt_id_front: null,
    govt_id_back: null,
  });

  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("broom_auth"));
  const token = authData?.token;

  // Fetch profile details and prefill
  // Fetch profile details and prefill
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${USER_BASE_URL}/my-profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const user = res.data.data;

        setFormData({
          first_name: user.first_name || "",
          last_name: user.last_name || "",
          email: user.email || "",
          phone: user.phone || "",
          dob: user.dob || "",
          gender: user.gender || "",
          ssn_itin: user.ssn_itin || "",
          address: {
            street: user.address?.street || "",
            houseNumber: user.address?.houseNumber || "",
            city: user.address?.city || "",
            state: user.address?.state || "",
            country: user.address?.country || "",
            zipCode: user.address?.zipCode || "",
          },
          profile_picture: null,
          govt_id_front: null,
          govt_id_back: null,
        });

        if (user.profile_picture)
          setPreviewProfile(`${USER_BASE_URL}/${user.profile_picture}`);
        if (user.govt_id_front)
          setPreviewFrontId(`${USER_BASE_URL}/${user.govt_id_front}`);
        if (user.govt_id_back)
          setPreviewBackId(`${USER_BASE_URL}/${user.govt_id_back}`);
      } catch (err) {
        toast.error("Failed to load profile");
      }
    };
    fetchProfile();
  }, [token]);

  //  Handle text input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle image change
  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [field]: file }));
      if (field === "profile_picture")
        setPreviewProfile(URL.createObjectURL(file));
      if (field === "govt_id_front")
        setPreviewFrontId(URL.createObjectURL(file));
      if (field === "govt_id_back") setPreviewBackId(URL.createObjectURL(file));
    }
  };

  //  Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "address") {
          Object.entries(formData.address).forEach(([addrKey, addrVal]) => {
            payload.append(`address[${addrKey}]`, addrVal);
          });
        } else {
          if (formData[key]) payload.append(key, formData[key]);
        }
      });

      await axios.patch(
        `${USER_BASE_URL}/update-profile/${authData.user.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <div className="">
      <PageTitle title="Update Profile" />
      <form
        onSubmit={handleSubmit}
        className="mt-5 bg-white py-10 px-10 rounded"
      >
        <ProfileImageUpload
          label="Profile Picture"
          preview={previewProfile}
          onChange={(e) => handleFileChange(e, "profile_picture")}
        />
        {/*  Fields for first_name, last_name */}
        <div className="flex gap-5 mb-8 mt-8">
          <InputField
            name="first_name"
            label="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <InputField
            name="last_name"
            label="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>

        {/* Email and Phone */}
        <div className="flex gap-5 mb-8">
          <InputField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
          <InputField
            name="phone"
            label="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/*  DOB and Gender */}
        <div className="flex gap-5 mb-8">
          <InputField
            name="dob"
            label="Date of Birth (dd-MM-yyyy)"
            value={formData.dob}
            onChange={handleChange}
            type="date"
            placeholder="dd-MM-yyyy"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/*  Address Fields */}
        <div className="grid grid-cols-2 gap-5 mb-8">
          {["street", "houseNumber", "city", "state", "country", "zipCode"].map(
            (field) => (
              <InputField
                key={field}
                name={`address.${field}`}
                label={field.replace(/([A-Z])/g, " $1")}
                value={formData.address[field]}
                onChange={handleChange}
              />
            )
          )}
        </div>

        {/*  Image Uploads */}
        <div className="grid grid-cols-2 gap-5 mb-8">
          <ImageUpload
            label="Govt ID Front"
            preview={previewFrontId}
            onChange={(e) => handleFileChange(e, "govt_id_front")}
          />
          <ImageUpload
            label="Govt ID Back"
            preview={previewBackId}
            onChange={(e) => handleFileChange(e, "govt_id_back")}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500  rounded px-4 py-2 text-white cursor-pointer"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

function InputField({ name, label, value, onChange, type = "text" }) {
  return (
    <div className="relative w-1/2">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0"
      />
      <label
        className="absolute text-sm font-small text-gray-700 bg-white px-1 
        transform -translate-y-1/2 top-0 left-2 peer-placeholder-shown:top-1/2 
        peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-sm 
        peer-focus:top-0 peer-focus:text-gray-700 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}

function ImageUpload({ label, preview, onChange }) {
  return (
    <div className="w-full max-w-lg">
      <label className="flex flex-col items-center justify-center w-full h-50 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="object-cover w-full h-full rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <CloudArrowUpIcon className="w-10 h-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500 font-semibold">{label}</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onChange}
        />
      </label>
    </div>
  );
}

function ProfileImageUpload({ label, preview, onChange }) {
  return (
    <div className="w-full max-w-lg">
      <label className="flex flex-col items-center justify-center w-50 h-50 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="object-cover w-full h-full rounded-full"
          />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <CloudArrowUpIcon className="w-10 h-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500 font-semibold">{label}</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default UpdateProfile;
