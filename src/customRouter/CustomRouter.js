import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Home from "../pages/home";

import AuthRoutes from "./AuthRoutes";

import ContentRoutes from "./ContentRoutes";

const Routers = () => {
  const { auth } = useSelector((state) => state);

  console.log(auth);

  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen">
      {auth.token ? <ContentRoutes /> : <AuthRoutes />}
    </div>
  );
};

export default Routers;
