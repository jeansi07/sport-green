import React from "react";
import { Route, Routes } from "react-router-dom";
import { History, Home, SingIn } from "../Pages";
import { Logout } from "../Pages/Logout";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/*" element={<SingIn />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default AppRoutes;
