import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          {/* <Navbar /> */}
          <div className="p-4 bg-bg-light h-screen">
          <AppRoutes/>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
