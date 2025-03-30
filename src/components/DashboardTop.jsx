import React from 'react';
import { Plus } from 'lucide-react';

const DashboardTop = () => {
  return (
    <div className='w-full flex flex-col mb-4'>
      <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-medium'>Company List</div>
        <button className='bg-primary text-white rounded px-3 py-2 text-sm flex items-center gap-1.5'>
          <Plus size={16} />
          Create Company
        </button>
      </div>
      <div className='w-1/5 border-b border-red-500 mt-1'></div>
    </div>
  )
}

export default DashboardTop;