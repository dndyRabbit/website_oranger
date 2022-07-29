import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";

import PresensiPetugas from "../pages/dashboard/presensiPetugas";
import Report from "../pages/dashboard/report";
import Role from "../pages/dashboard/role";
import Wilayah from "../pages/dashboard/wilayah";
import Submission from "../pages/dashboard/permission/submission";
import History from "../pages/dashboard/permission/history";
import DaftarPetugas from "../pages/daftar_petugas";
import Monitoring from "../pages/monitoring";
import Profile from "../pages/profile";
import NoPageFound from "../components/NoPageFound";

import AdminSettings from "../pages/dashboard/adminSetting.page";

const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monitoring" element={<Monitoring />} />
      <Route path="/daftar_petugas" element={<DaftarPetugas />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard/presensiPetugas" element={<PresensiPetugas />} />
      <Route path="/dashboard/report" element={<Report />} />
      <Route path="/dashboard/permission/submission" element={<Submission />} />
      <Route path="/dashboard/permission/history" element={<History />} />
      <Route path="/dashboard/role" element={<Role />} />
      <Route path="/dashboard/wilayah" element={<Wilayah />} />
      <Route path="/admin_setting" element={<AdminSettings />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  );
};

export default ContentRoutes;
