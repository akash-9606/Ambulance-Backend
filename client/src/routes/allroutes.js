import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/Landing";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import TrackAmbulancePage from "../pages/TrackAmbulancePage";
import RequestAmbulance from "../pages/RequestAmbulance";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/request-ambulance" element={<RequestAmbulance />} />
      <Route path="/track-ambulance" element={<TrackAmbulancePage />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
    </Routes>
  );
};

export default AllRoutes;
