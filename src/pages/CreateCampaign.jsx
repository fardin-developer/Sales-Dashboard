import React, { useState } from 'react';
import StepIndicator from '../components/StepIndicator';
import ImportMethods from '../components/ImportMethods';
import CampaignForm from '../components/CampaignForm';
import ScheduleForm from '../components/ScheduleForm';

const CreateCampaignPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedImportMethod, setSelectedImportMethod] = useState(null);
  const [isDraftSaved, setIsDraftSaved] = useState(false);
  const [campaignData, setCampaignData] = useState({});
  const [scheduleData, setScheduleData] = useState({});

  const steps = [
    { id: 1, name: 'Connect Data', description: 'Import your contacts' },
    { id: 2, name: 'Create Message', description: 'Design your campaign' },
    { id: 3, name: 'Schedule', description: 'Set timing' },
    { id: 4, name: 'Review', description: 'Final check' },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelectImportMethod = (id) => {
    setSelectedImportMethod(id);
  };

  const handleSaveDraft = () => {
    setIsDraftSaved(true);
    setTimeout(() => setIsDraftSaved(false), 2000);
  };

  const handleCampaignSubmit = (data) => {
    setCampaignData(data);
    handleNext();
  };

  const handleScheduleSubmit = (data) => {
    setScheduleData(data);
    handleNext();
  };

  return (
    <div className="p-8 w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create New Campaign</h1>
          <p className="text-gray-600">Set up your campaign in just a few steps to reach your target audience effectively</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSaveDraft}
            className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 bg-white text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            {isDraftSaved ? 'Saved!' : 'Draft'}
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Preview Campaign
          </button>
        </div>
      </div>

      <StepIndicator steps={steps} currentStep={currentStep} />

      {currentStep === 1 && (
        <ImportMethods
          selectedImportMethod={selectedImportMethod}
          onSelectImportMethod={handleSelectImportMethod}
        />
      )}

      {currentStep === 2 && (
        <CampaignForm onSubmit={handleCampaignSubmit} />
      )}

      {currentStep === 3 && (
        <ScheduleForm onSubmit={handleScheduleSubmit} />
      )}

      {currentStep === 4 && (
        <div className="bg-white p-12 rounded-lg shadow-sm text-center">
          <h2 className="text-xl font-medium mb-4">Review Campaign</h2>
          <p className="text-gray-600 mb-8">Final check before launching your campaign</p>
          <div className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Campaign review summary would appear here</p>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          className={`px-6 py-2 rounded-lg flex items-center gap-2 ${
            currentStep === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'
          } transition-colors`}
          disabled={currentStep === 1}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === 1 && !selectedImportMethod}
          className={`px-6 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 ${
            currentStep === 1 && !selectedImportMethod ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
          } transition-colors`}
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CreateCampaignPage;