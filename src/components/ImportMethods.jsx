import React from 'react';
import { Card, Button, Row, Col, Upload, message, Typography, Space, Badge } from 'antd';
import {
  UploadOutlined,
  GoogleOutlined,
  RobotOutlined,
  CheckCircleFilled
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const ImportMethods = ({ selectedImportMethod, onSelectImportMethod }) => {
  const importMethods = [
    {
      id: 1,
      name: 'Upload CSV File',
      icon: 'upload',
      description:
        'Import your existing contacts from a CSV file. Our system will automatically map and organize your data.',
      buttonText: 'Choose File',
      color: '#1890ff',
      bgColor: '#e6f7ff',
    },
    {
      id: 2,
      name: 'Google Contacts',
      icon: 'google',
      description:
        'Sync your Google contacts directly with saleskai.pro. Your contacts will be automatically imported and updated.',
      buttonText: 'Connect Google',
      color: '#ea4335',
      bgColor: '#fff1f0',
    },
    {
      id: 3,
      name: 'AI Sourcing',
      icon: 'ai',
      description:
        'Let our AI find and qualify potential customers based on your specific criteria and target market.',
      buttonText: 'Start AI Sourcing',
      color: '#52c41a',
      bgColor: '#f6ffed',
    },
  ];

  const handleCSVUpload = (file) => {
    if (!file.name.toLowerCase().endsWith('.csv')) {
      message.error('Please upload a valid CSV file.');
      return false;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      console.log('Uploaded CSV Content:', event.target.result);
      message.success('CSV file uploaded successfully!');
      onSelectImportMethod(1); // Select this method after successful upload
    };
    reader.readAsText(file);
    return false;
  };

  const renderActionButton = (method) => {
    const buttonStyle = {
      borderRadius: '4px',
      boxShadow: '0 2px 0 rgba(0,0,0,0.02)',
    };

    if (method.id === 1) {
      return (
        <Upload
          beforeUpload={handleCSVUpload}
          showUploadList={false}
          accept=".csv"
        >
          <Button
            icon={<UploadOutlined />}
            style={{ ...buttonStyle, backgroundColor: selectedImportMethod === method.id ? method.color : undefined, color: selectedImportMethod === method.id ? '#fff' : undefined }}
            type={selectedImportMethod === method.id ? "primary" : "default"}
          >
            {method.buttonText}
          </Button>
        </Upload>
      );
    }

    return (
      <Button
        onClick={() => onSelectImportMethod(method.id)}
        type={selectedImportMethod === method.id ? "primary" : "default"}
        style={{ ...buttonStyle, backgroundColor: selectedImportMethod === method.id ? method.color : undefined }}
      >
        {method.buttonText}
      </Button>
    );
  };

  const renderIcon = (iconType, color) => {
    const iconStyle = {
      fontSize: '28px',
      color: color,
      padding: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0,0,0,0.04)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '56px',
      height: '56px',
    };

    switch (iconType) {
      case 'upload':
        return <UploadOutlined style={iconStyle} />;
      case 'google':
        return <GoogleOutlined style={iconStyle} />;
      case 'ai':
        return <RobotOutlined style={iconStyle} />;
      default:
        return null;
    }
  };

  return (
    <div className="import-methods-container">
      <Title level={4} className="section-title">Choose an Import Method</Title>
      <Paragraph type="secondary" className="section-description">
        Select how you'd like to import your contacts for your campaign
      </Paragraph>

      <Row gutter={[24, 24]} className="method-cards">
        {importMethods.map((method) => (
          <Col xs={24} sm={12} md={8} key={method.id}>
            <Badge
              count={selectedImportMethod === method.id ? <CheckCircleFilled style={{ color: '#52c41a' }} /> : 0}
              offset={[-12, 12]}
            >
              <div
                onClick={() => {
                  if (method.id !== 1) {
                    onSelectImportMethod(method.id);
                  }
                }}
                style={{ cursor: 'pointer', height: '100%' }}
              >
                <Card
                  hoverable
                  className={`import-method-card ${selectedImportMethod === method.id ? 'selected' : ''}`}
                  style={{
                    borderColor: selectedImportMethod === method.id ? method.color : '#f0f0f0',
                    borderWidth: selectedImportMethod === method.id ? '2px' : '1px',
                    boxShadow: selectedImportMethod === method.id ? `0 4px 12px rgba(0, 0, 0, 0.1)` : '0 1px 2px rgba(0, 0, 0, 0.03)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                  }}
                  bodyStyle={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    {renderIcon(method.icon, method.color)}
                    <Text strong style={{ fontSize: '16px', marginLeft: '12px' }}>
                      {method.name}
                    </Text>
                  </div>

                  <Paragraph style={{ flex: 1, marginBottom: '24px', color: '#595959', minHeight: '72px' }}>
                    {method.description}
                  </Paragraph>

                  <div className="card-footer" onClick={(e) => e.stopPropagation()}>
                    {renderActionButton(method)}
                  </div>
                </Card>
              </div>
            </Badge>
          </Col>

        ))}
      </Row>
      <style jsx>{`
  .import-methods-container {
    padding: 16px 0;
  }
  .section-title {
    margin-bottom: 8px;
  }
  .section-description {
    margin-bottom: 24px;
  }
  .method-cards {
    margin-bottom: 16px;
  }
  .import-method-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 8px;
  }
  .import-method-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }
  .import-method-card.selected {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
  .card-footer {
    margin-top: auto;
  }
`}</style>

    </div>
  );
};

export default ImportMethods;