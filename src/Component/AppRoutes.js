import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Page/Dashboard";
import Inventory from "../Page/Inventory";
import Oders from "../Page/Oders";
import Customers from "../Page/Customers";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/orders" element={<Oders />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
