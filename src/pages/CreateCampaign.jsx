import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Steps, Button, Card, message, Typography, Space } from 'antd';
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
import axios from 'axios';

const { Content } = Layout;

const CreateCampaignPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [campaignId, setCampaignId] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedImportMethod, setSelectedImportMethod] = useState(null);
  const [isDraftSaved, setIsDraftSaved] = useState(false);
  const [formData, setFormData] = useState({
    message: {
      product_name: '',
      category: '',
      website: '',
      description: '',
      files: [],
      customer_pain_points: '',
      competitors: '',
      usp: '',
      prompt: ''
    },
    agent: {
      agent_tone: '',
      agent_prompt: '',
      greeting_style: ''
    },
    schedule: {
      time_zone: '',
      timeSlot: null
    }
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!location.state?.campaignId) {
      message.error('Invalid campaign creation flow. Redirecting to campaign management.');
      navigate('/campaigns');
      return;
    }
    setCampaignId(location.state.campaignId);
  }, [location, navigate]);

  const steps = [
    { title: 'Connect Data', description: 'Import your contacts' },
    { title: 'Create Message', description: 'Design your campaign' },
    { title: 'AI Agent Configuration', description: 'Prompt & Persona Setup' },
    { title: 'Schedule', description: 'Set timing' },
    { title: 'Review', description: 'Final check' },
  ];

  // Validation logic for each step
  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      const { message } = formData;
      if (!message.product_name) newErrors.product_name = 'Product name is required';
      if (!message.category) newErrors.category = 'Category is required';
      if (!message.website) newErrors.website = 'Website URL is required';
      else if (!/^(https?:\/\/)/.test(message.website)) newErrors.website = 'Invalid URL';
      if (!message.description) newErrors.description = 'Description is required';
      // if (!message.files || message.files.length === 0) newErrors.files = 'At least one file is required';
      if (!message.customer_pain_points) newErrors.customer_pain_points = 'Customer pain points are required';
      if (!message.prompt) newErrors.prompt = 'Prompt is required';
    } else if (step === 2) {
      const { agent } = formData;
      if (!agent.agent_tone) newErrors.agent_tone = 'Agent tone is required';
      if (!agent.agent_prompt) newErrors.agent_prompt = 'Agent prompt is required';
      else if (agent.agent_prompt.length < 50) newErrors.agent_prompt = 'Prompt must be at least 50 characters';
      if (!agent.greeting_style) newErrors.greeting_style = 'Greeting style is required';
    } else if (step === 3) {
      const { schedule } = formData;
      if (!schedule.time_zone) newErrors.time_zone = 'Time zone is required';
      if (!schedule.timeSlot || schedule.timeSlot.length !== 2) newErrors.timeSlot = 'Time slot is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
    setErrors((prev) => {
      const newErrors = { ...prev };
      Object.keys(data).forEach((key) => delete newErrors[key]);
      return newErrors;
    });
  };

  const next = () => {
    console.log("This is the currentStep", currentStep);
    if (currentStep < steps.length - 1) {
      if (currentStep > 0 && !validateStep(currentStep)) {
        console.log("This is the error", errors);
        message.error('Please fill in all required fields correctly');
        return;
      }

      // Save to backend if campaignId exists
      if (campaignId && currentStep > 0) {
        // const stepData = formData[steps[currentStep].title.toLowerCase().split(' ')[0]];
        let stepData;
        if (currentStep === 1) {
          stepData = formData.message; 
        } else if (currentStep === 2) {
          stepData = formData.agent;
        } else if (currentStep === 3) {
          stepData = formData.schedule;
        }
        console.log("This is the stepData", stepData);
        axios.patch(`/campaigns/${campaignId}`, stepData)
          .then(() => {
            setCurrentStep(currentStep + 1);
            window.scrollTo(0, 0);
          })
          .catch((error) => {
            console.error('Error updating step data:', error);
            message.error('Failed to save step data');
          });
      } else {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      }
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSelectImportMethod = (id) => {
    setSelectedImportMethod(id);
  };

  const handleSaveDraft = () => {
    setIsDraftSaved(true);
    message.success({
      content: 'Draft saved successfully!',
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />
    });
    setTimeout(() => setIsDraftSaved(false), 2000);
  };

  const handleLaunch = () => {
    // Validate all steps
    for (let i = 1; i <= 3; i++) {
      if (!validateStep(i)) {
        message.error('Please complete all required fields before launching');
        return;
      }
    }

    if (campaignId) {
      axios.patch(`/campaigns/${campaignId}`, formData)
        .then(() => {
          message.success({
            content: 'Campaign launched successfully!',
            icon: <RocketOutlined style={{ color: '#1890ff' }} />
          });
          navigate('/campaigns');
        })
        .catch((error) => {
          console.error('Error launching campaign:', error);
          message.error('Failed to launch campaign');
        });
    }
  };

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
        return (
          <CampaignForm
            data={formData.message}
            onChange={(data) => handleFormChange('message', data)}
            errors={errors}
          />
        );
      case 2:
        return (
          <AgentConfigForm
            data={formData.agent}
            onChange={(data) => handleFormChange('agent', data)}
            errors={errors}
          />
        );
      case 3:
        return (
          <ScheduleForm
            data={formData.schedule}
            onChange={(data) => handleFormChange('schedule', data)}
            errors={errors}
          />
        );
      case 4:
        return <Review campaignData={formData} />;
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
                <Steps.Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </Card>
          
          <Card bordered={false} className="content-card">
            {renderStepContent(currentStep)}
          </Card>
          
          <div className="actions-container">
            <Space>
              {currentStep > 0 && (
                <Button onClick={prev} icon={<LeftOutlined />} size="large">
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
          width: 100%;
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
      `}</style>
    </Layout>
  );
};

export default CreateCampaignPage;