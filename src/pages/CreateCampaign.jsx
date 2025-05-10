import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Steps, Button, Card, message, Typography, Space } from 'antd';
import { 
  LeftOutlined, 
  RightOutlined, 
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
const { Title } = Typography;

const CreateCampaignPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [campaignId, setCampaignId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isDraftSaved, setIsDraftSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSavingStep, setIsSavingStep] = useState(false);
  const [formData, setFormData] = useState({
    import_method: {
      source_type: '',
      source_file_ids: [],
    },
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
    
    // Check if we're in edit mode
    if (location.state?.isEditing) {
      setIsEditing(true);
      setIsLoading(true);
      
      // Fetch campaign data for editing
      axios.get(`/campaigns/${location.state.campaignId}`)
        .then(response => {
          const campaignData = response.data;
          
          // Map API data to form structure
          setFormData({
            import_method: {
              source_type: campaignData.source_type || '',
              source_file_ids: campaignData.source_file_ids || []
            },
            message: {
              product_name: campaignData.product_name || '',
              category: campaignData.category || '',
              website: campaignData.website || '',
              description: campaignData.description || '',
              files: campaignData.files || [],
              customer_pain_points: campaignData.customer_pain_points || '',
              competitors: campaignData.competitors || '',
              usp: campaignData.usp || '',
              prompt: campaignData.prompt || ''
            },
            agent: {
              agent_tone: campaignData.agent_tone || '',
              agent_prompt: campaignData.agent_prompt || '',
              greeting_style: campaignData.greeting_style || ''
            },
            schedule: {
              time_zone: campaignData.time_zone || '',
              timeSlot: campaignData.timeSlot || null
            }
          });
          
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching campaign data:', error);
          message.error('Failed to load campaign data for editing');
          setIsLoading(false);
          navigate('/campaigns');
        });
    }
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
    if (step === 0) {
      const { import_method } = formData;
      if (!import_method.source_type) {
        newErrors.source_type = 'Please select an import method';
      } else if (import_method.source_type === 'csv' && (!import_method.source_file_ids || import_method.source_file_ids.length === 0)) {
        newErrors.source_file_ids = 'Please upload a CSV file';
      }
    } else if (step === 1) {
      const { message } = formData;
      if (!message.product_name) newErrors.product_name = 'Product name is required';
      if (!message.category) newErrors.category = 'Category is required';
      if (!message.website) newErrors.website = 'Website URL is required';
      else if (!/^(https?:\/\/)/.test(message.website)) newErrors.website = 'Invalid URL';
      if (!message.description) newErrors.description = 'Description is required';
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
      // if (!schedule.timeSlot || schedule.timeSlot.length !== 2) newErrors.timeSlot = 'Time slot is required';
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
      if (!validateStep(currentStep)) {
        console.log("This is the error", errors);
        message.error('Please fill in all required fields correctly');
        return;
      }

      // Save to backend if campaignId exists
      if (campaignId) {
        setIsSavingStep(true);
        let stepData;
        if (currentStep === 0) {
          stepData = formData.import_method;
        } else if (currentStep === 1) {
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
          })
          .finally(() => {
            setIsSavingStep(false);
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

  const handleSaveDraft = () => {
    setIsDraftSaved(true);
    
    axios.patch(`/campaigns/${campaignId}`, {...formData.import_method, ...formData.message, ...formData.agent, ...formData.schedule})
      .then(() => {
        message.success({
          content: 'Draft saved successfully!',
          icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />
        });
      })
      .catch(error => {
        console.error('Error saving draft:', error);
        message.error('Failed to save draft');
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
      // Add status field for campaign launch
      const launchData = {
        ...formData.import_method,
        ...formData.message,
        ...formData.agent,
        ...formData.schedule,
      };
      
      axios.patch(`/campaigns/${campaignId}`, launchData)
        .then(() => {
          message.success({
            content: isEditing ? 'Campaign updated and launched successfully!' : 'Campaign launched successfully!',
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
            data={formData.import_method}
            onChange={(data) => handleFormChange('import_method', data)}
            errors={errors}
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

  if (isLoading) {
    return (
      <Layout className="campaign-layout">
        <div className="campaign-container flex justify-center items-center h-screen">
          <div className="text-center">
            <p>Loading campaign data...</p>
            {/* You could add a spinner here */}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout className="campaign-layout">
      <div className="campaign-container">
        <CampaignHeader 
          handleSaveDraft={handleSaveDraft} 
          isDraftSaved={isDraftSaved} 
          isEditing={isEditing}
        />
        
        <Content className="main-content">
          <Card bordered={false} className="steps-card">
            <Title level={3} style={{ marginBottom: 16 }}>
              {isEditing ? 'Edit Campaign' : 'Create New Campaign'}
            </Title>
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

                icon={currentStep === steps.length - 1 ? <RocketOutlined /> : <RightOutlined />}
                size="large"
                loading={isSavingStep}
              >
                {currentStep === steps.length - 1 ? (isEditing ? 'Update Campaign' : 'Launch Campaign') : 'Continue'}
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