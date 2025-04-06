import  Sidebar  from "../components/Sidebar"
import  Navbar  from "../components/Navbar"
export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
      </div>
    </div>
  )
}

