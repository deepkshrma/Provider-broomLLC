import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { toast } from "react-toastify";
import PageTitle from "../../assets/components/PageTittle";
import ConfirmActionModal from "./ConfirmActionModel";
import profile_image from "../../assets/photos/guest.png";
import { USER_BASE_URL } from "../../Config/Config";

function Profile() {
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const location = useLocation();
  const fromPage = location.state?.from || "";
  const navigate = useNavigate();

  useEffect(() => {
    fetchProviderDetails();
  }, []);

  const fetchProviderDetails = async () => {
    try {
      const authData = JSON.parse(localStorage.getItem("broom_auth"));
      const token = authData?.token;

      if (!token) {
        toast.error("Session expired, please log in again.");
        navigate("/");
        return;
      }

      const response = await axios.get(`${USER_BASE_URL}/my-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProvider(response.data.data);
    } catch (error) {
      console.log("Profile fetch error:", error.response?.data);

      const errorMessage =
        error?.response?.data?.message || "Error fetching profile details!";
      toast.error(errorMessage);

      if (error.response?.status === 401) {
        navigate("/"); // force logout if unauthorized
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-6">Loading profile...</div>;
  if (!provider) return <div className="p-6">Profile not found.</div>;

  return (
    <div className="p-6 ">
      {/* Header */}
      <div className="flex  sm:flex-row justify-between  sm:items-start gap-3 sm:gap-4 my-3 ">
        <PageTitle title={"My Profile"} />
        <button
          className="bg-blue-500 text-white sm:px-4 sm:py-2 px-2 py-1 rounded hover:bg-blue-600 text-sm font-medium"
          onClick={() => navigate("/UpdateProfile")}
        >
          <span className="font-bold">+ </span>Update Profile
        </button>
      </div>

      {/* Profile Card */}
      <div className="flex flex-col lg:flex-row gap-4 my-3">
        <div className="bg-white w-full lg:w-1/2 rounded-lg shadow-md p-4 lg:pl-10 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-4 box-border">
          {/* Profile Image */}
          <div className="flex flex-col justify-center items-center">
            <img
              src={
                provider.profile_picture
                  ? `${USER_BASE_URL}/${provider.profile_picture}`
                  : profile_image
              }
              alt={provider.first_name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-3"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <h2 className="text-lg sm:text-xl font-semibold">
              {provider.first_name} {provider.last_name}
            </h2>

            {/* Services */}
            <div className="flex flex-wrap gap-1">
              <p className="font-medium">Services:</p>
              <span>
                {provider.service_categories
                  ?.map((cat) => cat.name)
                  .join(", ") || "N/A"}
              </span>
            </div>

            {/* Email */}
            <div className="flex flex-wrap gap-1">
              <p className="font-medium">Email:</p>
              <span>{provider.email}</span>
            </div>

            {/* DOB */}
            <div className="flex flex-wrap gap-1">
              <p className="font-medium">DOB:</p>
              <span>{provider.dob || "N/A"}</span>
            </div>

            {/* Gender */}
            <div className="flex flex-wrap gap-1">
              <p className="font-medium">Gender:</p>
              <span>{provider.gender}</span>
            </div>

            {/* Phone */}
            <div className="flex flex-wrap gap-1">
              <p className="font-medium">Phone:</p>
              <span>{provider.phone}</span>
            </div>
            {/* Ssn. n */}
            <div className="flex flex-wrap gap-1">
              <p className="font-medium">ssn:</p>
              <span>{provider.ssn_itin}</span>
            </div>
          </div>
        </div>

        {/* Address Card */}
        <div className="bg-white w-full lg:w-1/2 rounded-lg shadow-md p-4 lg:pl-10 box-border">
          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <h2 className="text-lg sm:text-xl font-semibold">Address</h2>
            <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-y-1">
              <p className="font-medium">House No.</p>
              <span>{provider.address?.houseNumber || "N/A"}</span>

              <p className="font-medium">Street</p>
              <span>{provider.address?.street || "N/A"}</span>

              <p className="font-medium">City</p>
              <span>{provider.address?.city || "N/A"}</span>

              <p className="font-medium">State</p>
              <span>{provider.address?.state || "N/A"}</span>

              <p className="font-medium">Country</p>
              <span>{provider.address?.country || "N/A"}</span>

              <p className="font-medium">Zipcode</p>
              <span>{provider.address?.zipCode || "N/A"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="mt-6 mb-6">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
          Documents
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 rounded-lg gap-4 p-5 shadow-lg">
          <div>
            <p className="font-medium">Govt ID Front:</p>
            <div className="w-full h-48 sm:h-64 bg-gray-100 rounded shadow flex items-center justify-center overflow-hidden">
              <img
                src={
                  provider.govt_id_front
                    ? `${USER_BASE_URL}/${provider.govt_id_front}`
                    : profile_image
                }
                alt="ID Front"
                className="rounded shadow w-full h-64 object-cover cursor-pointer"
                onClick={() => {
                  setSelectedImage(
                    `${USER_BASE_URL}/${provider.govt_id_front}`
                  );
                  setIsImageModalOpen(true);
                }}
              />
            </div>
          </div>
          <div>
            <p className="font-medium">Govt ID Back:</p>
            <div className="w-full h-48 sm:h-64 bg-gray-100 rounded shadow flex items-center justify-center overflow-hidden">
              <img
                src={
                  provider.govt_id_back
                    ? `${USER_BASE_URL}/${provider.govt_id_back}`
                    : profile_image
                }
                alt="ID Back"
                className="rounded shadow w-full h-64 object-cover cursor-pointer"
                onClick={() => {
                  setSelectedImage(`${USER_BASE_URL}/${provider.govt_id_back}`);
                  setIsImageModalOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-60 flex justify-center items-center z-50 p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="max-w-3xl w-full relative">
            <img
              src={selectedImage}
              alt="Enlarged"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setIsImageModalOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
