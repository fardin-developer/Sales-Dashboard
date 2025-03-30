import React from "react";

const FilterBar = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 rounded-sm bg-[#F6F5F5] shadow-sm mb-5">
      <div className="flex flex-col flex-1 min-w-[150px]">
        <label className="text-sm font-medium text-gray-700">Search</label>
        <input
          type="text"
          placeholder="Search"
          className="border border-[#BBBBBB] rounded-md p-1 px-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-[150px]">
        <label className="text-sm font-medium text-gray-700">Search</label>
        <input
          type="text"
          placeholder="Search"
          className="border border-[#BBBBBB] rounded-md p-1 px-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-[150px]">
        <label className="text-sm font-medium text-gray-700">Search</label>
        <input
          type="text"
          placeholder="Search"
          className="border border-[#BBBBBB] rounded-md p-1 px-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-[150px]">
        <label className="text-sm font-medium text-gray-700">Search</label>
        <input
          type="text"
          placeholder="Search"
          className="border border-[#BBBBBB] rounded-md p-1 px-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-[150px]">
        <label className="text-sm font-medium text-gray-700">Search</label>
        <input
          type="text"
          placeholder="Search"
          className="border border-[#BBBBBB] rounded-md p-1 px-1.5 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>
    </div>
  );
};

export default FilterBar;
