import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // 1. Import useLocation
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
  const location = useLocation(); // 2. Get current route
  const [user] = useState({
    name: "John Smith",
    role: "Premium",
  });

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `flex items-center gap-3 px-3 py-2 text-sm rounded-md ${
      isActive(path)
        ? "text-primary bg-primary/10"
        : "text-text-primary hover:bg-bg-white"
    }`;

  const iconClass = (path) =>
    `w-5 h-5 ${
      isActive(path) ? "text-primary" : "text-text-secondary"
    }`;

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
        <div className="p-4">
          <div className="text-xs font-semibold text-text-secondary mb-2">MAIN</div>
          <nav className="space-y-1">
            <Link to="/" className={linkClass("/")}>
              <Home className={iconClass("/")} />
              <span>Dashboard</span>
            </Link>

            <Link to="/campaigns" className={linkClass("/campaigns")}>
              <LayoutList className={iconClass("/campaigns")} />
              <span>Campaigns</span>
              <span className="ml-auto bg-primary text-white px-2 py-0.5 rounded-full text-xs">3</span>
            </Link>

            <Link to="/contacts" className={linkClass("/contacts")}>
              <Users className={iconClass("/contacts")} />
              <span>Contacts</span>
            </Link>

            <Link to="/conversations" className={linkClass("/conversations")}>
              <MessageSquare className={iconClass("/conversations")} />
              <span>Conversations</span>
              <span className="ml-auto bg-gray-light text-text-secondary px-2 py-0.5 rounded-full text-xs">5</span>
            </Link>
          </nav>
        </div>

        <div className="p-4">
          <div className="text-xs font-semibold text-text-secondary mb-2">ANALYTICS</div>
          <nav className="space-y-1">
            <Link to="/reports" className={linkClass("/reports")}>
              <BarChart2 className={iconClass("/reports")} />
              <span>Reports</span>
            </Link>

            <Link to="/performance" className={linkClass("/performance")}>
              <Activity className={iconClass("/performance")} />
              <span>Performance</span>
            </Link>
          </nav>
        </div>

        <div className="p-4">
          <div className="text-xs font-semibold text-text-secondary mb-2">SETTINGS</div>
          <nav className="space-y-1">
            <Link to="/settings" className={linkClass("/settings")}>
              <Settings className={iconClass("/settings")} />
              <span>Settings</span>
            </Link>

            <Link to="/security" className={linkClass("/security")}>
              <Shield className={iconClass("/security")} />
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
