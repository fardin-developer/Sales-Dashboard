import React, { useState } from 'react';
import { Form, Select, Input, Button, Card, Typography } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

const AgentConfigForm = ({ initialValues = {}, onSubmit }) => {
  const [form] = Form.useForm();

  // Set initial values
  form.setFieldsValue({
    tone: initialValues.tone || '',
    template: initialValues.template || '',
    greetingStyle: initialValues.greetingStyle || ''
  });

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Card className="shadow-sm">
      <Title level={4}>Prompt & Persona Setup</Title>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="mt-4"
      >
        <Form.Item
          name="tone"
          label="Agent Tone"
          rules={[{ required: true, message: 'Please select a tone' }]}
        >
          <Select placeholder="Select tone">
            <Select.Option value="Friendly">Friendly</Select.Option>
            <Select.Option value="Professional">Professional</Select.Option>
            <Select.Option value="Enthusiastic">Enthusiastic</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="template"
          label="Prompt Template"
          rules={[{ required: true, message: 'Please enter a prompt template' }]}
        >
          <TextArea
            placeholder="e.g. 'You are a helpful AI assistant…'"
            rows={4}
          />
        </Form.Item>

        <Form.Item
          name="greetingStyle"
          label="Greeting Style"
          rules={[{ required: true, message: 'Please select a greeting style' }]}
        >
          <Select placeholder="Select greeting style">
            <Select.Option value="By Name">By Name</Select.Option>
            <Select.Option value="With Mother Tongue">With Mother Tongue</Select.Option>
            <Select.Option value="Formal">Formal</Select.Option>
            <Select.Option value="Informal">Informal</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item className="flex justify-end">
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AgentConfigForm;