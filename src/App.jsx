import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import CampaignManagement from "./pages/CampaignManagement";
import CreateCampaignPage from "./pages/CreateCampaign";
import AppRoutes from "./routes/AppRoutes";
// import Candidate from "./pages/Candidate";
// import Orders from "./pages/Orders";
// import Request from "./pages/Request";
// import UserRole from "./pages/UserRole";
// import Jobs from "./pages/Jobs";
// import Attributes from "./pages/Attributes";
// import Settings from "./pages/Settings";

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
