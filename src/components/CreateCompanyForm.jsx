import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const CreateCompanyForm = () => {
  const [serviceProvider, setServiceProvider] = useState(false);
  
  return (
    <div className="w-full p-2 mx-auto">
      <h2 className="text-lg font-medium pb-2 border-b border-red-500 mb-4">Create Company</h2>
      
      {/* Account Details Section */}
      <div className="bg-light rounded p-4 mb-4">
        <h3 className="text-sm font-medium text-gray-600 mb-3">Account Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          
          {/* Service Provider */}
          <div>
            <label className="block text-sm mb-1">
              Service Provider<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={serviceProvider === true}
                  onChange={() => setServiceProvider(true)}
                  className="mr-1"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={serviceProvider === false}
                  onChange={() => setServiceProvider(false)}
                  className="mr-1"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>
          
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
          
          {/* Secondary Email */}
          <div>
            <label className="block text-sm mb-1">Secondary Email</label>
            <input 
              type="email" 
              placeholder="Secondary Email" 
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
          
          {/* Mobile */}
          <div>
            <label className="block text-sm mb-1">Mobile</label>
            <input 
              type="tel" 
              placeholder="Type valid number" 
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
          
          {/* Secondary Mobile */}
          <div>
            <label className="block text-sm mb-1">Secondary Mobile</label>
            <input 
              type="tel" 
              placeholder="Type valid number" 
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
          
          {/* Organization Type */}
          <div>
            <label className="block text-sm mb-1">
              Organization Type<span className="text-red-500">*</span>
            </label>
            <select className="w-full p-2 border border-gray-300 rounded text-sm appearance-none bg-white">
              <option value="">Select one</option>
            </select>
          </div>
          
          {/* Industry Type */}
          <div>
            <label className="block text-sm mb-1">
              Industry Type<span className="text-red-500">*</span>
            </label>
            <select className="w-full p-2 border border-gray-300 rounded text-sm appearance-none bg-white">
              <option value="">Select one</option>
            </select>
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
          
          {/* Country */}
          <div>
            <label className="block text-sm mb-1">Country</label>
            <select className="w-full p-2 border border-gray-300 rounded text-sm appearance-none bg-white">
              <option value="">Select one</option>
            </select>
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
        </div>
      </div>
      
      {/* Social Details Section */}
      <div className="bg-light rounded p-4 mb-6">
        <h3 className="text-sm font-medium text-gray-600 mb-3">Social Details</h3>
        
        <div className="flex flex-col md:flex-row gap-2">
          <select className="p-2 border border-gray-300 rounded text-sm md:w-1/3">
            <option value="instagram">Instagram</option>
          </select>
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
      
      {/* Quick Create Button */}
      <div className="flex justify-center">
        <button className="px-4 py-2 bg-primary text-white rounded flex items-center gap-2">
          <Plus size={16} />
          Quick Create
        </button>
      </div>
    </div>
  );
};

export default CreateCompanyForm;