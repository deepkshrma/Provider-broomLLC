import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Config/Config";
import { USER_BASE_URL } from "../../Config/Config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AllServices() {
  const [parentCategories, setParentCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [activeParent, setActiveParent] = useState("all");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Fetch all categories (parent + subcategories together)
  const fetchFrontendCategories = async () => {
    try {
      setLoading(true);
      const authData = JSON.parse(localStorage.getItem("broom_auth"));
      const token = authData?.token;

      if (!token) {
        toast.error("Session expired, please log in again.");
        navigate("/");
        return;
      }

      // ✅ Get user profile first
      const profileRes = await axios.get(`${USER_BASE_URL}/my-profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const subscribedIds = (profileRes.data.data.service_categories || []).map(
        (cat) => cat.id
      );

      // ✅ Get categories
      const res = await axios.get(`${BASE_URL}/admin/get-frontend-categories`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.status) {
        const parents = res.data.data.map((parent) => ({
          ...parent,
          subcategories: parent.subcategories.map((sub) => ({
            ...sub,
            isSubscribed: subscribedIds.includes(sub._id),
          })),
        }));

        setParentCategories(parents);
        setSubCategories(parents.flatMap((p) => p.subcategories));
      }
    } catch (err) {
      console.error("Error fetching frontend categories:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle Parent Category Click
  const handleParentClick = (parentId) => {
    setActiveParent(parentId);
    if (parentId === "all") {
      setSubCategories(parentCategories.flatMap((p) => p.subcategories));
    } else {
      const parent = parentCategories.find((p) => p._id === parentId);
      setSubCategories(parent ? parent.subcategories : []);
    }
  };

  const handleSubscriptionToggle = async (subId, subName) => {
    try {
      // ✅ Immediately update UI
      setSubCategories((prev) =>
        prev.map((sub) =>
          sub._id === subId ? { ...sub, isSubscribed: !sub.isSubscribed } : sub
        )
      );

      const authData = JSON.parse(localStorage.getItem("broom_auth"));
      const token = authData?.token;

      if (!token) {
        toast.error("Session expired, please log in again.");
        navigate("/");
        return;
      }

      // Get current user profile
      const profileRes = await axios.get(`${USER_BASE_URL}/my-profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      let currentCategories = profileRes.data.data.service_categories || [];

      const alreadySubscribed = currentCategories.some(
        (cat) => cat.id === subId
      );

      if (alreadySubscribed) {
        currentCategories = currentCategories.filter((cat) => cat.id !== subId);
      } else {
        currentCategories.push({ id: subId, name: subName });
      }

      // Update profile
      await axios.patch(
        `${USER_BASE_URL}/update-profile/${profileRes.data.data._id}`,
        { service_categories: currentCategories },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(alreadySubscribed ? "Unsubscribed" : "Subscribed");
    } catch (err) {
      console.error("Error updating subscription:", err);
      toast.error("Failed to update subscription");
    }
  };

  // ✅ On mount
  useEffect(() => {
    fetchFrontendCategories();
  }, []);

  return (
    <>
      {/* <div className="relative w-full h-auto border-l border-[#E0E0E0] bg-blue-50 "> */}
      {/* Main Container */}
      <div className="w-full h-full p-5 box-border mb-[200px]">
        <h2 className="flex items-center font-bold mb-3">All Service</h2>
        <div className="w-full h-auto flex gap-2 bg-white rounded">
          {/* LEFT MENU */}
          <div className="w-[20%] h-auto p-[15px]">
            <div className="w-full h-auto border-l border-[#E0E0E0]">
              <div
                className={`text-[12px] p-[15px] cursor-pointer ${
                  activeParent === "all"
                    ? "border-l-[2px] border-blue-500 bg-blue-50"
                    : ""
                }`}
                onClick={() => handleParentClick("all")}
              >
                All
              </div>

              {parentCategories.map((cat) => (
                <div
                  key={cat._id}
                  className={`text-[12px] p-[15px] cursor-pointer ${
                    activeParent === cat._id
                      ? "border-l-[2px] border-blue-500 bg-blue-50"
                      : ""
                  }`}
                  onClick={() => handleParentClick(cat._id)}
                >
                  {cat.name}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="w-[80%] h-auto p-[15px]">
            {loading ? (
              <div className="grid grid-cols-3 mb-5 gap-5 h-[200px]">
                {Array(6)
                  .fill("")
                  .map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between overflow-hidden shadow-sm animate-pulse"
                    >
                      <div className="w-full h-[60%] bg-gray-200" />
                      <div className="px-3 mt-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                      </div>
                      <div className="flex justify-between items-center px-3 bg-gray-100 py-2 mt-auto">
                        <div className="h-4 bg-gray-200 rounded w-1/3" />
                        <div className="h-8 bg-gray-300 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 mb-5 gap-5">
                {subCategories.map((sub) => (
                  <div
                    key={sub._id}
                    className="flex flex-col justify-between overflow-hidden shadow-sm"
                  >
                    {/* Image */}
                    <div className="w-full h-[180px] bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={`${BASE_URL}/${sub.icon}`}
                        alt={sub.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/placeholder.jpg";
                        }}
                      />
                    </div>

                    {/* Title */}
                    <p className="px-3 text-[12px] font-medium mt-2">
                      {sub.name}
                    </p>

                    {/* Footer */}
                    <div className="flex justify-between items-center px-3 bg-blue-50 py-2 mt-auto">
                      <a href="#" className="text-[12px] text-blue-500">
                        <u>
                          <b className="mr-1">{}</b>Service
                        </u>
                      </a>
                      <div
                        className={`w-1/2 text-[12px] text-white text-center py-2 rounded cursor-pointer
    ${sub.isSubscribed ? "bg-yellow-500" : "bg-green-500"}`}
                        onClick={() =>
                          handleSubscriptionToggle(sub._id, sub.name)
                        }
                      >
                        {sub.isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
