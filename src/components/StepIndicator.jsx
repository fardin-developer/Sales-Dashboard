import React from 'react';
import { Steps } from 'antd';

const StepIndicator = ({ steps, currentStep }) => {
  const items = steps.map(step => ({
    title: step.name,
    description: step.description,
  }));

  return (
    <div className="mb-6">
      <Steps 
        current={currentStep - 1} 
        items={items}
        size="small"
      />
    </div>
  );
};

export default StepIndicator;