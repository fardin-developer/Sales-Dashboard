import React from 'react';

const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between mb-12 px-12 bg-white p-8 rounded-2xl">
      {steps.map((step) => (
        <div key={step.id} className="flex flex-col items-center">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold mb-2
              ${currentStep === step.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            {step.id}
          </div>
          <div className="text-center">
            <p className="font-medium text-gray-900">{step.name}</p>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;