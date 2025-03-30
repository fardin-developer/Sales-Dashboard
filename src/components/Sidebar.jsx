import { useState } from "react";
import {
  Building2,
  ChevronDown,
  ChevronUp,
  CircleHelp,
  Home,
  ListChecks,
  ShieldCheck,
  User2,
} from "lucide-react";

export default function Sidebar() {
  const [expandedMenus, setExpandedMenus] = useState({
    "Idab Profiles": true,
  });

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
   <>
<aside className="w-60 flex-shrink-0 pb-4 1 flex-col mt-20 hidden md:flex">
{/* Dashboard section */}
      <div className="p-4 pt-0">
        <div className="rounded-md bg-[#F6F5F5]">
          <a
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-sm rounded-md"
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
        </div>
      </div>

      {/* Expandable items section - full height */}
      <div className="flex-1 bg-[#F6F5F5] mt-2 mx-4 rounded-md p-2">
        <nav>
          {/* Idab Profiles - expandable */}
          <div className="mb-2">
            <button
              onClick={() => toggleMenu("Idab Profiles")}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md"
            >
              <span>Idab Profiles</span>
              {expandedMenus["Idab Profiles"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {expandedMenus["Idab Profiles"] && (
              <ul className="space-y-1 mt-1">
                <li>
                  <a
                    href="/company"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md bg-[#CDD7E3] text-blue-800"
                  >
                    <Building2 className="w-5 h-5" />
                    <span>Company</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/candidate"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-[#CDD7E3]"
                  >
                    <User2 className="w-5 h-5" />
                    <span>Candidate</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/orders"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-[#CDD7E3]"
                  >
                    <ListChecks className="w-5 h-5" />
                    <span>Orders</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/request"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-[#CDD7E3]"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span>Request</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/user-role"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-[#CDD7E3]"
                  >
                    <CircleHelp className="w-5 h-5" />
                    <span>User role</span>
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Jobs - expandable */}
          <div className="mb-2">
            <button
              onClick={() => toggleMenu("Jobs")}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md"
            >
              <span>Jobs</span>
              {expandedMenus["Jobs"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Attributes - expandable */}
          <div className="mb-2">
            <button
              onClick={() => toggleMenu("Attributes")}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md"
            >
              <span>Attributes</span>
              {expandedMenus["Attributes"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Settings - expandable */}
          <div className="mb-2">
            <button
              onClick={() => toggleMenu("Settings")}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md"
            >
              <span>Settings</span>
              {expandedMenus["Settings"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>
    </aside>
   
   
   {/* <aside className="w-60 h-full border-r border-gray-200  flex-shrink-0">
      <div className="p-4 border-b border-gray-200">
        <a href="/" className="flex items-center">
          <span className="text-3xl font-light text-gray-500 dark:text-gray-300">idab</span>
        </a>
      </div>
      <nav className="p-2 ">
        <ul className="space-y-1 bg-[#F6F5F5]">
          <li>
            <a
              href="/"
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-gray-10 hover:bg-gray-800"
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
          </li>

          <li className="pt-2">
            <button
              onClick={() => toggleMenu("Idab Profiles")}
              className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="font-medium">Idab Profiles</span>
              {expandedMenus["Idab Profiles"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {expandedMenus["Idab Profiles"] && (
              <ul className="mt-1 space-y-1">
                <li>
                  <a
                    href="/company"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-[#CDD7E3]"
                  >
                    <Building2 className="w-5 h-5" />
                    <span>Company</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/candidate"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-[#CDD7E3]"
                  >
                    <User2 className="w-5 h-5" />
                    <span>Candidate</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/orders"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-[#CDD7E3]"
                  >
                    <ListChecks className="w-5 h-5" />
                    <span>Orders</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/request"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-[#CDD7E3]"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span>Request</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/user-role"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-[#CDD7E3]"
                  >
                    <CircleHelp className="w-5 h-5" />
                    <span>User role</span>
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="pt-2">
            <button
              onClick={() => toggleMenu("Jobs")}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-[#CDD7E3]"
            >
              <span className="font-medium">Jobs</span>
              {expandedMenus["Jobs"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </li>

          <li className="pt-2">
            <button
              onClick={() => toggleMenu("Attributes")}
              className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="font-medium">Attributes</span>
              {expandedMenus["Attributes"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </li>

          <li className="pt-2">
            <button
              onClick={() => toggleMenu("Settings")}
              className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="font-medium">Settings</span>
              {expandedMenus["Settings"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </li>
        </ul>
      </nav>
    </aside> */}
   </>
  );
}