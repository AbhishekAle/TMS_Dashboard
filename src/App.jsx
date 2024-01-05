import React from "react";
import Dashboard from "./pages/Dashboard";
import VehicleRoute from "./pages/VehicleRoute";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Reports from "./pages/Reports";
import Tracking from "./pages/Tracking";
import Settings from "./pages/Settings";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/routes" element={<VehicleRoute />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default App;
