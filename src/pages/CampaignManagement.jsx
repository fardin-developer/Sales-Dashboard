import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const CampaignManagement = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  
  const campaigns = [
    {
      id: 1,
      name: 'Q1 Sales Outreach',
      status: 'Running',
      progress: 75,
      leadsContacted: 850,
      demosBooked: 62
    },
    {
      id: 2,
      name: 'Tech Startup Campaign',
      status: 'Paused',
      progress: 45,
      leadsContacted: 395,
      demosBooked: 25
    }
  ];

  const handleNewCampaign = () => {
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleModalSubmit = () => {
    form.validateFields().then(values => {
      console.log('New campaign values:', values);
      // Here you would handle the creation of the new campaign
      setIsModalOpen(false);
      form.resetFields();
      
      // Navigate to another page or refresh the current view
      navigate('/campaigns/create', { state: values });
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
          <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 bg-white text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Edit Campaign
          </button>
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
                    <button className="p-2 text-gray-500 hover:text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-indigo-600">
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
            name="campaignName"
            label="Campaign Name"
            rules={[
              { required: true, message: 'Please enter a campaign name' },
            ]}
          >
            <Input placeholder="e.g., Summer Launch Promo 2025" />
          </Form.Item>
          
          <Form.Item
            name="objectiveType"
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