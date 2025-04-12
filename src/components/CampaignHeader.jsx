import React from 'react';
import { Typography, Button, Space, Tooltip } from 'antd';
import { EditOutlined, PlayCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const CampaignHeader = ({ handleSaveDraft, isDraftSaved }) => {
  return (
    <div className="flex bg-light justify-between items-center mb-4">
      <div>
        <Title level={4} style={{ margin: 0 }}>Create New Campaign</Title>
        <Text type="secondary">Set up your campaign in just a few steps to reach your target audience effectively</Text>
      </div>
      <Space size="small">
        <Tooltip title="Save as draft">
          <Button 
            icon={<EditOutlined />} 
            onClick={handleSaveDraft}
          >
            {isDraftSaved ? 'Saved!' : 'Draft'}
          </Button>
        </Tooltip>
        <Button 
          type="primary" 
          icon={<PlayCircleOutlined />}
        >
          Preview Campaign
        </Button>
      </Space>
    </div>
  );
};

export default CampaignHeader;