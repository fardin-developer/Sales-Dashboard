import React, { useState } from 'react';
import { Form, Input, Button, Upload, Typography, Card, Row, Col, Divider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Title, Text, Paragraph } = Typography;

const CampaignForm = ({ onSubmit, initialData = {} }) => {
  const [form] = Form.useForm();
  
  // Initialize with provided data or default values
  const [formData, setFormData] = useState({
    campaign: {
      productName: initialData.campaign?.productName || '',
      category: initialData.campaign?.category || '',
      website: initialData.campaign?.website || '',
      description: initialData.campaign?.description || '',
      files: initialData.campaign?.files || [],
      customerPainPoints: initialData.campaign?.customerPainPoints || '',
      competitors: initialData.campaign?.competitors || '',
      usp: initialData.campaign?.usp || '',
      prompt: initialData.campaign?.prompt || ''
    }
  });

  const handleChange = (changedValues) => {
    const updatedValues = {};
    
    // Process the changed values to match our data structure
    Object.keys(changedValues).forEach(key => {
      const [section, field] = key.split('.');
      if (!updatedValues[section]) {
        updatedValues[section] = {};
      }
      updatedValues[section][field] = changedValues[key];
    });
    
    // Update the form data state
    setFormData(prevData => {
      const newData = { ...prevData };
      Object.keys(updatedValues).forEach(section => {
        newData[section] = { ...newData[section], ...updatedValues[section] };
      });
      return newData;
    });
  };

  const handleFileChange = (info) => {
    const fileList = info.fileList.slice(0, 4);
    setFormData(prevData => ({
      ...prevData,
      campaign: { ...prevData.campaign, files: fileList }
    }));
  };

  const handleSubmit = () => {
    form.validateFields().then(values => {
      // Transform values to match our data structure
      const processedValues = {
        campaign: {}
      };
      
      Object.keys(values).forEach(key => {
        const [section, field] = key.split('.');
        if (!processedValues[section]) {
          processedValues[section] = {};
        }
        processedValues[section][field] = values[key];
      });
      
      // Add files to the processed values
      processedValues.campaign.files = formData.campaign.files;
      
      onSubmit(processedValues);
    });
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <Title level={4} style={{ marginBottom: 8 }}>Create Message</Title>
      <Paragraph type="secondary" style={{ marginBottom: 24 }}>Design your campaign message and content here</Paragraph>

      <Form
        form={form}
        layout="vertical"
        onValuesChange={handleChange}
        onFinish={handleSubmit}
        initialValues={{
          'campaign.productName': formData.campaign.productName,
          'campaign.category': formData.campaign.category,
          'campaign.website': formData.campaign.website,
          'campaign.description': formData.campaign.description,
          'campaign.customerPainPoints': formData.campaign.customerPainPoints,
          'campaign.competitors': formData.campaign.competitors,
          'campaign.usp': formData.campaign.usp,
          'campaign.prompt': formData.campaign.prompt
        }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="Product Name"
              name="campaign.productName"
              rules={[{ required: true, message: 'Please enter product name' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Category"
              name="campaign.category"
              rules={[{ required: true, message: 'Please enter category' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Website"
              name="campaign.website"
              rules={[
                { required: true, message: 'Please enter website URL' },
                { type: 'url', message: 'Please enter a valid URL' }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Description"
              name="campaign.description"
              rules={[{ required: true, message: 'Please enter description' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Files (max 4: PDF, DOCX)"
              name="campaign.files"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload
                accept=".pdf,.docx"
                multiple
                maxCount={4}
                fileList={formData.campaign.files}
                onChange={handleFileChange}
                beforeUpload={() => false} // Prevent auto upload
              >
                <Button icon={<UploadOutlined />}>
                  Select Files
                </Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Customer Pain Points Addressed"
              name="campaign.customerPainPoints"
              rules={[{ required: true, message: 'Please enter customer pain points' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Competitors (optional)"
              name="campaign.competitors"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="USP (optional)"
              name="campaign.usp"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>



 
      </Form>
    </div>
  );
};

export default CampaignForm;