import React, { useState } from 'react';

const ScheduleForm = ({ onSubmit }) => {
  const [scheduleData, setScheduleData] = useState({
    startDate: '',
    endDate: '',
    timeSlots: '',
    frequency: 'daily',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScheduleData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(scheduleData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-medium mb-4">Schedule Campaign</h2>
      <p className="text-gray-600 mb-8">Set timing and delivery options for your campaign</p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={scheduleData.startDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            name="endDate"
            value={scheduleData.endDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time Slots</label>
          <input
            type="text"
            name="timeSlots"
            value={scheduleData.timeSlots}
            onChange={handleChange}
            placeholder="e.g., 9 AM - 5 PM"
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Frequency</label>
          <select
            name="frequency"
            value={scheduleData.frequency}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Save and Continue
      </button>
    </form>
  );
};

export default ScheduleForm;