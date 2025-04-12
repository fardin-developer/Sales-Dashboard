// App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <div className="static h-screen z-10">
          <Sidebar />
        </div>
        
        <div className="flex-1 transition-all duration-300 overflow-auto h-screen">
          <div className=" min-h-screen">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;