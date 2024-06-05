import React from "react";
import { Route, Routes } from "react-router-dom";
import { History, Home } from "../Pages";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default AppRoutes;
