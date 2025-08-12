import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Pages
import Login from "./Pages/Sign/Login";
import ChangePassword from "./Pages/Sign/ChangePassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import BookingRequest from "./Pages/BookingRequest";
import BookingRequest1 from "./Pages/BookingRequest1";
import BookingRequest2 from "./Pages/BookingRequest2";
import BookingRequest3 from "./Pages/BookingRequest3";
import BookingRequest4 from "./Pages/BookingRequest4";
import Messages from "./Pages/Messages";
import AllServices from "./Pages/ServiceManagement/AllServices";
import AllServices1 from "./Pages/AllServices1";
import MyServices from "./Pages/ServiceManagement/MyServices";
import MySubscription from "./Pages/MySubscription";
import ServiceRequestList from "./Pages/ServiceRequestList";
import ServiceRequestList1 from "./Pages/ServiceRequestList1";
import ServicemanList from "./Pages/ServicemanList";
import RoleUpdate from "./Pages/RoleUpdate";
import AddNewServiceman from "./Pages/AddNewServiceman";
import Profile from "./Pages/Profile/Profile";
import UpdateProfile from "./Pages/Profile/UpdateProfile";

// Layout & Routes
import Layout from "./Layout";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/Login" element={<Login />} />

        {/* Redirect root to dashboard if token exists */}
        <Route path="/" element={<Navigate to="/Dashboard" replace />} />

        {/* Protected routes within Layout */}
        <Route path="/" element={<Layout />}>
          <Route
            path="Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="Profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="UpdateProfile"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="ChangePassword"
            element={
              <ProtectedRoute>
                <ChangePassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="BookingRequest"
            element={
              <ProtectedRoute>
                <BookingRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="BookingRequest1"
            element={
              <ProtectedRoute>
                <BookingRequest1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="BookingRequest2"
            element={
              <ProtectedRoute>
                <BookingRequest2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="BookingRequest3"
            element={
              <ProtectedRoute>
                <BookingRequest3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="BookingRequest4"
            element={
              <ProtectedRoute>
                <BookingRequest4 />
              </ProtectedRoute>
            }
          />
          <Route
            path="Messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="AllServices"
            element={
              <ProtectedRoute>
                <AllServices />
              </ProtectedRoute>
            }
          />
          <Route
            path="AllServices1"
            element={
              <ProtectedRoute>
                <AllServices1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="MyServices"
            element={
              <ProtectedRoute>
                <MyServices />
              </ProtectedRoute>
            }
          />
          <Route
            path="MySubscription"
            element={
              <ProtectedRoute>
                <MySubscription />
              </ProtectedRoute>
            }
          />
          <Route
            path="ServiceRequestList"
            element={
              <ProtectedRoute>
                <ServiceRequestList />
              </ProtectedRoute>
            }
          />
          <Route
            path="ServiceRequestList1"
            element={
              <ProtectedRoute>
                <ServiceRequestList1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="ServicemanList"
            element={
              <ProtectedRoute>
                <ServicemanList />
              </ProtectedRoute>
            }
          />
          <Route
            path="RoleUpdate"
            element={
              <ProtectedRoute>
                <RoleUpdate />
              </ProtectedRoute>
            }
          />
          <Route
            path="AddNewServiceman"
            element={
              <ProtectedRoute>
                <AddNewServiceman />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
