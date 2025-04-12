import React from 'react';
import { Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

const CreateCampaignModal = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      title="Create New Campaign"
      okText="Create"
      cancelText="Cancel"
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validation Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="create_campaign_form">
        <Form.Item
          name="campaignName"
          label="Campaign Name"
          rules={[{ required: true, message: 'Please input your campaign name!' }]}
        >
          <Input placeholder="e.g., Summer Launch Promo 2025" />
        </Form.Item>
        <Form.Item
          name="objectiveType"
          label="Objective Type"
          rules={[{ required: true, message: 'Please select the objective type!' }]}
        >
          <Select placeholder="Select objective type">
            <Option value="lead-generation">Lead Generation</Option>
            <Option value="product-promotion">Product Promotion</Option>
            <Option value="retargeting">Retargeting</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateCampaignModal;
