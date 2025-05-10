import React from 'react';
import { Select, Input, Typography, Row, Col } from 'antd';

const { TextArea } = Input;
const { Title, Text } = Typography;

const AgentConfigForm = ({ data, onChange, errors }) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  return (
    <div>
      <Title level={4}>Prompt & Persona Setup</Title>

      <form>
        <Row gutter={24}>
          <Col span={24}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Agent Tone <span style={{ color: 'red' }}>*</span>
              </label>
              <Select
                placeholder="Select tone"
                value={data.agent_tone}
                onChange={(value) => handleChange('agent_tone', value)}
                style={{ width: '100%' }}
                status={errors.agent_tone ? 'error' : ''}
              >
                <Select.Option value="Friendly">Friendly</Select.Option>
                <Select.Option value="Professional">Professional</Select.Option>
                <Select.Option value="Enthusiastic">Enthusiastic</Select.Option>
              </Select>
              {errors.agent_tone && <Text type="danger">{errors.agent_tone}</Text>}
            </div>
          </Col>
          <Col span={24}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Agent Prompt & Messaging <span style={{ color: 'red' }}>*</span>
              </label>
              <TextArea
                placeholder={`Hi, I have a company XYZ. I want to sell my ABC product. The product is unique and 40% cheaper than competitor ABCD. Always speak to the client in a soft tone and chat like a normal human being. If you know the user's mother tongue, greet them in their mother tongue.`}
                rows={4}
                value={data.agent_prompt}
                onChange={(e) => handleChange('agent_prompt', e.target.value)}
                status={errors.agent_prompt ? 'error' : ''}
              />
              {errors.agent_prompt && <Text type="danger">{errors.agent_prompt}</Text>}
            </div>
          </Col>
          <Col span={24}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Greeting Style <span style={{ color: 'red' }}>*</span>
              </label>
              <Select
                placeholder="Select greeting style"
                value={data.greeting_style}
                onChange={(value) => handleChange('greeting_style', value)}
                style={{ width: '100%' }}
                status={errors.greeting_style ? 'error' : ''}
              >
                <Select.Option value="By Name">By Name</Select.Option>
                <Select.Option value="With Mother Tongue">With Mother Tongue</Select.Option>
                <Select.Option value="Formal">Formal</Select.Option>
                <Select.Option value="Informal">Informal</Select.Option>
              </Select>
              {errors.greeting_style && <Text type="danger">{errors.greeting_style}</Text>}
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AgentConfigForm;