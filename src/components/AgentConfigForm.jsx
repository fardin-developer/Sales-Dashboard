import React from 'react';
import { Form, Select, Input, Button, Card, Typography } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

const AgentConfigForm = ({ initialValues = {}, onSubmit }) => {
  const [form] = Form.useForm();

  // Set initial values
  form.setFieldsValue({
    tone: initialValues.tone || '',
    prompt: initialValues.prompt || '',
    greetingStyle: initialValues.greetingStyle || ''
  });

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <div>
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
          name="prompt"
          label="Agent Prompt & Messaging"
          rules={[{ required: true, message: 'Please write your agent prompt and messaging guidelines' }]}
        >
          <TextArea
            placeholder={`Hi, I have a company XYZ. I want to sell my ABC product. The product is unique and 40% cheaper than competitor ABCD. Always speak to the client in a soft tone and chat like a normal human being. If you know the user's mother tongue, greet them in their mother tongue.`}
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Configuration
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AgentConfigForm;
