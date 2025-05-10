import React, { useState } from 'react';
import { Card, Button, Row, Col, Upload, message, Typography, Space, Badge, Spin } from 'antd';
import {
  UploadOutlined,
  GoogleOutlined,
  RobotOutlined,
  CheckCircleFilled,
  LoadingOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import axios from 'axios';

const { Title, Paragraph, Text } = Typography;

const ImportMethods = ({ data = { source_type: '', source_file_ids: [] }, onChange, errors = {} }) => {
  const [uploadingFile, setUploadingFile] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  React.useEffect(() => {
    if (data?.source_file_ids?.length > 0 && !uploadedFile) {
      setUploadedFile({
        uid: `existing-${data.source_file_ids[0]}`,
        name: 'Uploaded CSV',
        status: 'done',
        fileId: data.source_file_ids[0]
      });
    }
  }, [data?.source_file_ids]);

  const handleCSVUpload = async (file) => {
    if (!file.name.toLowerCase().endsWith('.csv')) {
      message.error('Please upload a valid CSV file.');
      return false;
    }

    setUploadingFile(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(
        '/file/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      const fileId = response.data?.file_id;
      if (fileId) {
        setUploadedFile({
          uid: `upload-${Date.now()}-${file.name}`,
          name: file.name,
          status: 'done',
          fileId: fileId
        });

        // Update form data with new file ID and source type
        onChange({
          source_type: 'csv',
          source_file_ids: [fileId]
        });

        message.success('CSV file uploaded successfully!');
      } else {
        throw new Error('No file ID received');
      }
    } catch (error) {
      console.error('Upload error:', error);
      message.error(`Upload failed: ${error.message}`);
    } finally {
      setUploadingFile(false);
    }
    return false;
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    onChange({
      source_type: '',
      source_file_ids: []
    });
  };

  const handleSelectImportMethod = (methodId) => {
    let sourceType = '';
    switch (methodId) {
      case 1:
        sourceType = 'csv';
        break;
      case 2:
        sourceType = 'google_workspace';
        break;
      case 3:
        sourceType = 'auto_source';
        break;
      default:
        sourceType = '';
    }

    onChange({
      source_type: sourceType,
      source_file_ids: []
    });
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
            style={{ ...buttonStyle, backgroundColor: data.source_type === 'csv' ? method.color : undefined, color: data.source_type === 'csv' ? '#fff' : undefined }}
            type={data.source_type === 'csv' ? "primary" : "default"}
            loading={uploadingFile}
          >
            {method.buttonText}
          </Button>
        </Upload>
      );
    }

    return (
      <Button
        onClick={() => handleSelectImportMethod(method.id)}
        type={data.source_type === method.sourceType ? "primary" : "default"}
        style={{ ...buttonStyle, backgroundColor: data.source_type === method.sourceType ? method.color : undefined }}
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
      sourceType: 'csv'
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
      sourceType: 'google_workspace'
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
      sourceType: 'auto_source'
    },
  ];

  return (
    <div className="import-methods-container">
      <Title level={4} className="section-title">Choose an Import Method</Title>
      <Paragraph type="secondary" className="section-description">
        Select how you'd like to import your contacts for your campaign
      </Paragraph>

      {errors.source_type && (
        <div className="mb-4">
          <Text type="danger">{errors.source_type}</Text>
        </div>
      )}

      <Row gutter={[24, 24]} className="method-cards">
        {importMethods.map((method) => (
          <Col xs={24} sm={12} md={8} key={method.id}>
            <Badge
              count={data.source_type === method.sourceType ? <CheckCircleFilled style={{ color: '#52c41a' }} /> : 0}
              offset={[-12, 12]}
            >
              <div
                onClick={() => {
                  if (method.id !== 1) {
                    handleSelectImportMethod(method.id);
                  }
                }}
                style={{ cursor: 'pointer', height: '100%' }}
              >
                <Card
                  hoverable
                  className={`import-method-card ${data.source_type === method.sourceType ? 'selected' : ''}`}
                  style={{
                    borderColor: data.source_type === method.sourceType ? method.color : '#f0f0f0',
                    borderWidth: data.source_type === method.sourceType ? '2px' : '1px',
                    boxShadow: data.source_type === method.sourceType ? `0 4px 12px rgba(0, 0, 0, 0.1)` : '0 1px 2px rgba(0, 0, 0, 0.03)',
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

      {/* Show uploaded file for CSV method */}
      {data.source_type === 'csv' && uploadedFile && (
        <div className="mt-4 p-4 border rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircleFilled className="text-green-500 mr-2" />
              <Text>{uploadedFile.name}</Text>
            </div>
            <Button
              type="text"
              icon={<DeleteOutlined className="text-red-500" />}
              onClick={handleRemoveFile}
              size="small"
            />
          </div>
        </div>
      )}

      {data.source_type === 'csv' && errors.source_file_ids && (
        <div className="mt-2">
          <Text type="danger">{errors.source_file_ids}</Text>
        </div>
      )}

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