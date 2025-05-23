import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CampaignManagement = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [form] = Form.useForm();
  

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = () => {
    axios.get('/campaigns/my-campaigns')
      .then(response => {
        setCampaigns(response.data);
      })
      .catch(error => {
        console.error('Error fetching campaigns:', error); 
      });
  };

  const handleNewCampaign = () => {
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleModalSubmit = () => {
    form.validateFields().then(values => {
      axios.post('/campaigns/create', values)
        .then(response => {
          console.log('Campaign created:', response.data);
          // Navigate with the campaign ID from response
          navigate('/campaigns/create', { state: { campaignId: response.data.id } });
        })
        .catch(error => {
          console.error('Error creating campaign:', error);
          // Handle error
        });
      setIsModalOpen(false);
      form.resetFields();
    });
  };

  const handleEditCampaign = (campaignId) => {
    // Navigate to the create campaign page with the campaign ID for editing
    navigate('/campaigns/create', { 
      state: { 
        campaignId: campaignId,
        isEditing: true 
      } 
    });
  };

  const handleViewCampaign = (campaignId) => {
    // Navigate to campaign details page
    navigate(`/campaigns/${campaignId}`);
  };

  const handleDeleteCampaign = (campaignId) => {
    // Show confirmation modal before deleting
    Modal.confirm({
      title: 'Are you sure you want to delete this campaign?',
      content: 'This action cannot be undone.',
      okText: 'Yes, Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        axios.delete(`/campaigns/${campaignId}`)
          .then(() => {
            // Refresh the campaigns list
            fetchCampaigns();
          })
          .catch(error => {
            console.error('Error deleting campaign:', error);
          });
      },
    });
  };

  return (
    <div className="p-8 w-full bg-white h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaign Management</h1>
          <p className="text-gray-600">Monitor and manage your active campaigns</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleNewCampaign}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Campaign
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600">Total Leads</p>
              <h2 className="text-3xl font-bold">1,245</h2>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600">Demos Scheduled</p>
              <h2 className="text-3xl font-bold">87</h2>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600">Response Rate</p>
              <h2 className="text-3xl font-bold">32%</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">CAMPAIGN NAME</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">STATUS</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">PROGRESS</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">LEADS CONTACTED</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">DEMOS BOOKED</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(campaign => (
              <tr key={campaign.id} className="border-b border-gray-200">
                <td className="py-4 px-6 text-sm text-gray-800">{campaign.name}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 inline-flex text-sm leading-5 font-medium rounded-full ${
                    campaign.status === 'Running' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-800">{campaign.leadsContacted}</td>
                <td className="py-4 px-6 text-sm text-gray-800">{campaign.demosBooked}</td>
                <td className="py-4 px-6">
                  <div className="flex gap-2">
                    <button 
                      className="p-2 text-gray-500 hover:text-indigo-600"
                      onClick={() => handleViewCampaign(campaign.id)}
                      title="View Campaign"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button 
                      className="p-2 text-gray-500 hover:text-blue-600"
                      onClick={() => handleEditCampaign(campaign.id)}
                      title="Edit Campaign"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button 
                      className="p-2 text-gray-500 hover:text-red-600"
                      onClick={() => handleDeleteCampaign(campaign.id)}
                      title="Delete Campaign"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button className="text-gray-700 font-medium">Export Report</button>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg">View Analytics</button>
      </div>

      {/* New Campaign Modal */}
      <Modal
        title="Create New Campaign"
        open={isModalOpen}
        onCancel={handleModalCancel}
        footer={[
          <Button key="cancel" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleModalSubmit}>
            Create Campaign
          </Button>,
        ]}
        width={500}
        centered
      >
        <Form
          form={form}
          layout="vertical"
          name="newCampaignForm"
        >
          <Form.Item
            name="name"
            label="Campaign Name"
            rules={[
              { required: true, message: 'Please enter a campaign name' },
            ]}
          >
            <Input placeholder="e.g., Summer Launch Promo 2025" />
          </Form.Item>
          
          <Form.Item
            name="objective_type"
            label="Objective Type"
            rules={[
              { required: true, message: 'Please select an objective type' },
            ]}
          >
            <Select placeholder="Select an objective type">
              <Select.Option value="leadGeneration">Lead Generation</Select.Option>
              <Select.Option value="productPromotion">Product Promotion</Select.Option>
              <Select.Option value="retargeting">Retargeting</Select.Option>
              <Select.Option value="brandAwareness">Brand Awareness</Select.Option>
              <Select.Option value="customerRetention">Customer Retention</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CampaignManagement;