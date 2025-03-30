import React from 'react';
import { Plus, Upload, Calendar } from 'lucide-react';

const ComprehensiveCreateForm = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-lg font-medium pb-2 border-b border-red-500 mb-6">Create</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Account Details Section */}
          <div>
            <div className="w-full bg-light rounded p-3 mb-4">
              <h3 className="text-sm font-medium text-gray-600">Account Details</h3>
            </div>
            
            <div className="space-y-4">
              {/* Company Name */}
              <div>
                <label className="block text-sm mb-1">
                  Company Name<span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              
              {/* Email */}
              <div>
                <label className="block text-sm mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>
          </div>
          
          {/* Company Location Section */}
          <div>
            <div className="w-full bg-light rounded p-3 mb-4">
              <h3 className="text-sm font-medium text-gray-600">Company Location<span className="text-red-500">*</span></h3>
            </div>
            
            <div className="space-y-4">
              {/* City */}
              <div>
                <label className="block text-sm mb-1">City</label>
                <input 
                  type="text" 
                  placeholder="Type" 
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              
              {/* Country */}
              <div>
                <label className="block text-sm mb-1">Country</label>
                <div className="relative">
                  <select className="w-full p-2 border border-gray-300 rounded text-sm appearance-none bg-white pr-8">
                    <option value="">Type</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Provider Section */}
          <div>
            <div className="w-full bg-light rounded p-3 mb-4">
              <h3 className="text-sm font-medium text-gray-600">Service Provider<span className="text-red-500">*</span></h3>
            </div>
            
            <div className="space-y-4">
              {/* Service Provider Dropdown */}
              <div>
                <label className="block text-sm mb-1">
                  Service Provider<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full p-2 border border-gray-300 rounded text-sm appearance-none bg-white pr-8">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Details Section */}
          <div>
            <div className="w-full bg-light rounded p-3 mb-4">
              <h3 className="text-sm font-medium text-gray-600">Profile Details</h3>
            </div>
            
            <div className="space-y-4">
              {/* Organization Type */}
              <div>
                <label className="block text-sm mb-1">
                  Organization Type<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full p-2 border border-gray-300 rounded text-sm appearance-none bg-white pr-8">
                    <option value="">Select one</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Team Size */}
              <div>
                <label className="block text-sm mb-1">Team Size</label>
                <div className="relative">
                  <select className="w-full p-2 border border-gray-300 rounded text-sm appearance-none bg-white pr-8">
                    <option value="">Select one</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Website */}
              <div>
                <label className="block text-sm mb-1">Website</label>
                <input 
                  type="url" 
                  placeholder="Website" 
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>
              
              {/* Bio */}
              <div>
                <label className="block text-sm mb-1">Bio</label>
                <textarea 
                  placeholder="Type your text here" 
                  className="w-full p-2 border border-gray-300 rounded text-sm h-32"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Username/Password Section */}
          <div className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input 
                type="text" 
                placeholder="Username" 
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
            </div>
            
            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••••••••••" 
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
          
          {/* Images Section */}
          <div>
            <div className="w-full bg-light rounded p-3 mb-4">
              <h3 className="text-sm font-medium text-gray-600">Images</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Logo */}
              <div>
                <label className="block text-sm mb-1">Logo</label>
                <div className="border border-gray-300 rounded p-2 flex flex-col items-center justify-center h-24">
                  <Upload size={24} className="text-gray-400 mb-1" />
                  <p className="text-xs text-gray-500 text-center">Drag and drop a file here or click to browse</p>
                </div>
              </div>
              
              {/* Banner */}
              <div>
                <label className="block text-sm mb-1">Banner</label>
                <div className="border border-gray-300 rounded p-2 flex flex-col items-center justify-center h-24">
                  <Upload size={24} className="text-gray-400 mb-1" />
                  <p className="text-xs text-gray-500 text-center">Drag and drop a file here or click to browse</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* State/Pin Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* State */}
            <div>
              <label className="block text-sm mb-1">State</label>
              <input 
                type="text" 
                placeholder="Type" 
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
            </div>
            
            {/* Pin code */}
            <div>
              <label className="block text-sm mb-1">Pin code</label>
              <input 
                type="text" 
                placeholder="Type" 
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
          
          {/* Social Details Section */}
          <div>
            <div className="w-full bg-light rounded p-3 mb-4">
              <h3 className="text-sm font-medium text-gray-600">Social Details</h3>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <select className="w-full p-2 border border-gray-300 rounded text-sm appearance-none bg-white pr-8">
                    <option value="instagram">Instagram</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <input 
                  type="text" 
                  placeholder="Paste link here" 
                  className="p-2 border border-gray-300 rounded text-sm flex-grow"
                />
                <button className="p-2 bg-primary text-white rounded">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Plan Details Section */}
          <div>
            <div className="w-full bg-light rounded p-3 mb-4">
              <h3 className="text-sm font-medium text-gray-600">Plan Details</h3>
            </div>
            
            <div className="space-y-4">
              {/* Assign Plan */}
              <div>
                <label className="block text-sm mb-1">Assign Plan</label>
                <div className="relative">
                  <select className="w-full p-2 border border-gray-300 rounded text-sm appearance-none bg-white pr-8">
                    <option value="">Select one</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Industry/Establishment/Vision Section */}
          <div className="space-y-4">
            {/* Industry Type */}
            <div>
              <label className="block text-sm mb-1">
                Industry Type<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full p-2 border border-gray-300 rounded text-sm appearance-none bg-white pr-8">
                  <option value="">Select one</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Establishment date */}
            <div>
              <label className="block text-sm mb-1">Establishment date</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Date" 
                  className="w-full p-2 border border-gray-300 rounded text-sm pr-8"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <Calendar size={16} />
                </div>
              </div>
            </div>
            
            {/* Vision */}
            <div>
              <label className="block text-sm mb-1">Vision</label>
              <textarea 
                placeholder="Type your text here" 
                className="w-full p-2 border border-gray-300 rounded text-sm h-32"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      
      {/* Create Button */}
      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 bg-primary text-white rounded flex items-center gap-2">
          <Plus size={16} />
          Create
        </button>
      </div>
    </div>
  );
};

export default ComprehensiveCreateForm;