import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  LayoutList,
  Users,
  MessageSquare,
  BarChart2,
  Activity,
  Settings,
  Shield,
} from "lucide-react";

export default function Sidebar() {
  const [user] = useState({
    name: "John Smith",
    role: "Premium"
  });

  return (
    <aside className="w-64 h-screen border-r border-gray-light flex flex-col bg-bg-light">
      {/* Logo */}
      <div className="p-4 border-b border-gray-light">
        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
            <span className="text-xl font-medium text-text-primary">saleskai.pro</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        {/* Main Navigation */}
        <div className="p-4">
          <div className="text-xs font-semibold text-text-secondary mb-2">MAIN</div>
          <nav className="space-y-1">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2 text-sm text-text-primary rounded-md hover:bg-bg-white"
            >
              <Home className="w-5 h-5 text-text-secondary" />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/campaigns"
              className="flex items-center gap-3 px-3 py-2 text-sm text-primary bg-primary/10 rounded-md"
            >
              <LayoutList className="w-5 h-5 text-primary" />
              <span>Campaigns</span>
              <span className="ml-auto bg-primary text-white px-2 py-0.5 rounded-full text-xs">3</span>
            </Link>
            
            <Link
              to="/contacts"
              className="flex items-center gap-3 px-3 py-2 text-sm text-text-primary rounded-md hover:bg-bg-white"
            >
              <Users className="w-5 h-5 text-text-secondary" />
              <span>Contacts</span>
            </Link>
            
            <Link
              to="/conversations"
              className="flex items-center gap-3 px-3 py-2 text-sm text-text-primary rounded-md hover:bg-bg-white"
            >
              <MessageSquare className="w-5 h-5 text-text-secondary" />
              <span>Conversations</span>
              <span className="ml-auto bg-gray-light text-text-secondary px-2 py-0.5 rounded-full text-xs">5</span>
            </Link>
          </nav>
        </div>

        {/* Analytics */}
        <div className="p-4">
          <div className="text-xs font-semibold text-text-secondary mb-2">ANALYTICS</div>
          <nav className="space-y-1">
            <Link
              to="/reports"
              className="flex items-center gap-3 px-3 py-2 text-sm text-text-primary rounded-md hover:bg-bg-white"
            >
              <BarChart2 className="w-5 h-5 text-text-secondary" />
              <span>Reports</span>
            </Link>
            
            <Link
              to="/performance"
              className="flex items-center gap-3 px-3 py-2 text-sm text-text-primary rounded-md hover:bg-bg-white"
            >
              <Activity className="w-5 h-5 text-text-secondary" />
              <span>Performance</span>
            </Link>
          </nav>
        </div>

        {/* Settings */}
        <div className="p-4">
          <div className="text-xs font-semibold text-text-secondary mb-2">SETTINGS</div>
          <nav className="space-y-1">
            <Link
              to="/settings"
              className="flex items-center gap-3 px-3 py-2 text-sm text-text-primary rounded-md hover:bg-bg-white"
            >
              <Settings className="w-5 h-5 text-text-secondary" />
              <span>Settings</span>
            </Link>
            
            <Link
              to="/security"
              className="flex items-center gap-3 px-3 py-2 text-sm text-text-primary rounded-md hover:bg-bg-white"
            >
              <Shield className="w-5 h-5 text-text-secondary" />
              <span>Security</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-light">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">
            <span className="text-sm font-medium">JS</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-text-primary">{user.name}</p>
            <p className="text-xs text-primary">{user.role}</p>
          </div>
          <button className="text-text-secondary hover:text-text-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
