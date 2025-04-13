import React, { useState } from 'react';
import { Layout, Steps, Button, Card, message, Typography, Row, Col, Divider, Space } from 'antd';
import { 
  LeftOutlined, 
  RightOutlined, 
  SaveOutlined, 
  CheckCircleOutlined,
  RocketOutlined 
} from '@ant-design/icons';
import ImportMethods from '../components/ImportMethods';
import CampaignForm from '../components/CampaignForm';
import AgentConfigForm from '../components/AgentConfigForm';
import ScheduleForm from '../components/ScheduleForm';
import CampaignHeader from '../components/CampaignHeader';
import Review from '../components/Review';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const CreateCampaignPage = () => {
  // Local state management for current step and form data
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedImportMethod, setSelectedImportMethod] = useState(null);
  const [isDraftSaved, setIsDraftSaved] = useState(false);
  const [campaignData, setCampaignData] = useState({});
  const [agentConfig, setAgentConfig] = useState({});
  const [scheduleData, setScheduleData] = useState({});

  // Steps configuration with titles and descriptions
  const steps = [
    { title: 'Connect Data', description: 'Import your contacts' },
    { title: 'Create Message', description: 'Design your campaign' },
    { title: 'AI Agent Configuration', description: 'Prompt & Persona Setup' },
    { title: 'Schedule', description: 'Set timing' },
    { title: 'Review', description: 'Final check' },
  ];

  // Navigation functions for steps
  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Handler to update the selected import method
  const handleSelectImportMethod = (id) => {
    setSelectedImportMethod(id);
  };

  // Handler to simulate saving a draft
  const handleSaveDraft = () => {
    setIsDraftSaved(true);
    message.success({
      content: 'Draft saved successfully!',
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />
    });
    setTimeout(() => setIsDraftSaved(false), 2000);
  };

  // Handlers for form submissions that update data and move to the next step
  const handleCampaignSubmit = (data) => {
    setCampaignData(data);
    next();
  };

  const handleAgentConfigSubmit = (data) => {
    setAgentConfig(data);
    next();
  };

  const handleScheduleSubmit = (data) => {
    setScheduleData(data);
    next();
  };

  const handleLaunch = () => {
    message.success({
      content: 'Campaign launched successfully!',
      icon: <RocketOutlined style={{ color: '#1890ff' }} />
    });
    // Additional launch logic would go here
  };

  // Renders content based on the current step
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ImportMethods
            selectedImportMethod={selectedImportMethod}
            onSelectImportMethod={handleSelectImportMethod}
          />
        );
      case 1:
        return <CampaignForm onSubmit={handleCampaignSubmit} initialData={campaignData} />;
      case 2:
        return <AgentConfigForm onSubmit={handleAgentConfigSubmit} initialData={agentConfig} />;
      case 3:
        return <ScheduleForm onSubmit={handleScheduleSubmit} initialData={scheduleData} />;
      case 4:
        return (  <Review/>      );
      default:
        return null;
    }
  };

  return (
    <Layout className="campaign-layout">
      <div className="campaign-container">
        <CampaignHeader handleSaveDraft={handleSaveDraft} isDraftSaved={isDraftSaved} />
        
        <Content className="main-content">
          <Card bordered={false} className="steps-card">
            <Steps current={currentStep} className="campaign-steps">
              {steps.map((item) => (
                <Steps.Step 
                  key={item.title} 
                  title={item.title} 
                />
              ))}
            </Steps>
          </Card>
          
          <Card bordered={false} className="content-card">
            {renderStepContent(currentStep)}
          </Card>
          
          <div className="actions-container">
            <Space>
              {currentStep > 0 && (
                <Button 
                  onClick={prev}
                  icon={<LeftOutlined />}
                  size="large"
                >
                  Back
                </Button>
              )}
              <Button
                type="primary"
                onClick={currentStep === steps.length - 1 ? handleLaunch : next}
                disabled={currentStep === 0 && !selectedImportMethod}
                icon={currentStep === steps.length - 1 ? <RocketOutlined /> : <RightOutlined />}
                size="large"
              >
                {currentStep === steps.length - 1 ? 'Launch Campaign' : 'Continue'}
              </Button>
            </Space>
          </div>
        </Content>
      </div>
      
      <style jsx>{`
        .campaign-layout {
          min-height: 100vh;
        }
        .campaign-container {
          margin: 0 auto;
          padding: 24px;
          width:100%;
        }
        .main-content {
          margin-top: 24px;
        }
        .campaign-steps {
          margin-bottom: 8px;
        }
        .steps-card {
          margin-bottom: 24px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
        }
        .content-card {
          margin-bottom: 24px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
        }
        .actions-container {
          display: flex;
          justify-content: flex-end;
          margin-top: 24px;
        }
        .inner-card {
          background: #fafafa;
        }
        .summary-placeholder {
          padding: 20px;
          text-align: center;
          background: #f9f9f9;
          border: 1px dashed #d9d9d9;
          border-radius: 4px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .review-card {
          margin-bottom: 0;
        }
      `}</style>
    </Layout>
  );
};

export default CreateCampaignPage;