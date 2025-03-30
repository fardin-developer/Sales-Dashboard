import React from 'react';
import { MapPin } from 'lucide-react';
import ToggleButton from './ToggleButton';

const RecruitmentCard = () => {
  return (
    <div className="w-full bg-light rounded-xl shadow-sm border border-gray-200 py-3 px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-2 mb-4">
      {/* Left Section - Logo and Company Info */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center text-gray-400 text-xs font-semibold p-4">
          <p className="text-white text-xs">LOGO</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-xs text-gray-900">Expert Recruitment- UAE</h3>
          <div className="flex items-center text-gray-600 text-xs mt-0.5">
            <MapPin size={12} className="text-blue-500 mr-1" />
            <span>Location, Country</span>
          </div>
        </div>
      </div>

      {/* Middle Section - Contact Information */}
      <div className="flex items-center w-full md:w-auto">
        <div className="w-8 h-8 flex items-center justify-center mr-2">
        <img src="hand.png" className='w-6' alt="" srcset="" />
        </div>
        <div>
          <div className="text-gray-800 text-xs">info@expertrecruitment.com</div>
          <div className="text-gray-800 text-xs">Mobile: +1-6789034567</div>
        </div>
      </div>

      {/* Right Section - Controls */}
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
        {/* Activate Toggle */}
        <div className="flex items-center gap-1.5 mr-8">
          <ToggleButton/>
          <span className="text-xs font-medium">Activate</span>
        </div>

        {/* Verified Toggle */}
        <div className="flex items-center gap-1.5 mr-8">
          <ToggleButton/>
          <span className="text-xs font-medium">Verified</span>
        </div>

        {/* View Details Button */}
        <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-800 text-xs font-medium hover:bg-gray-50">
          View Details
        </button>

        {/* Edit Button */}
        <button className="p-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>

        {/* Delete Button */}
        <button className="p-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RecruitmentCard;