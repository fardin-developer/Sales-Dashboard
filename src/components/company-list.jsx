import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { MapPin, Edit, Trash2, Plus } from "lucide-react"

// Sample company data
const companies = [
  {
    id: 1,
    name: "Expert Recruitment- UAE",
    location: "Location, Country",
    email: "info@expertrecruitment.com",
    mobile: "+1-6789034567",
    status: "activate",
    verified: true,
  },
  {
    id: 2,
    name: "Expert Recruitment- UAE",
    location: "Location, Country",
    email: "info@expertrecruitment.com",
    mobile: "+1-6789034567",
    status: "activated",
    verified: true,
  },
  {
    id: 3,
    name: "Expert Recruitment- UAE",
    location: "Location, Country",
    email: "info@expertrecruitment.com",
    mobile: "+1-6789034567",
    status: "activated",
    verified: false,
  },
  {
    id: 4,
    name: "Expert Recruitment- UAE",
    location: "Location, Country",
    email: "info@expertrecruitment.com",
    mobile: "+1-6789034567",
    status: "activated",
    verified: false,
  },
  {
    id: 5,
    name: "Expert Recruitment- UAE",
    location: "Location, Country",
    email: "info@expertrecruitment.com",
    mobile: "+1-6789034567",
    status: "activated",
    verified: true,
  },
  {
    id: 6,
    name: "Expert Recruitment- UAE",
    location: "Location, Country",
    email: "info@expertrecruitment.com",
    mobile: "+1-6789034567",
    status: "activated",
    verified: false,
  },
  {
    id: 7,
    name: "Expert Recruitment- UAE",
    location: "Location, Country",
    email: "info@expertrecruitment.com",
    mobile: "+1-6789034567",
    status: "activated",
    verified: true,
  },
]

export function CompanyList() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Company List</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> Create Company
        </Button>
      </div>

      <div className="border-t-2 border-orange-500 pt-4 mb-6"></div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">Search</label>
          <Input placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Organization Type</label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="agency">Agency</SelectItem>
              <SelectItem value="nonprofit">Non-Profit</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Industry Type</label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email Verification</label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="unverified">Unverified</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Sort By</label>
          <Select defaultValue="latest">
            <SelectTrigger>
              <SelectValue placeholder="Latest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 mb-2 px-4 py-2 font-medium text-sm">
        <div>Company</div>
        <div>Contact</div>
        <div>Account Status</div>
        <div>Email Verification</div>
      </div>

      {/* Company List */}
      <div className="space-y-4">
        {companies.map((company) => (
          <div
            key={company.id}
            className="grid grid-cols-4 gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 items-center"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                LOGO
              </div>
              <div>
                <div className="font-medium">{company.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {company.location}
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm">{company.email}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Mobile: {company.mobile}</div>
            </div>

            <div className="flex items-center">
              <Switch checked={company.status === "activated" || company.status === "activate"} />
              <span className="ml-2 text-sm">{company.status === "activated" ? "Activated" : "Activate"}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Switch checked={company.verified} />
                <span className="ml-2 text-sm">{company.verified ? "Verified" : "Verify"}</span>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

