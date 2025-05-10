import React, { useState, useRef } from 'react';
import { Input, Button, Typography, Row, Col, List, message, Spin } from 'antd';
import { UploadOutlined, LoadingOutlined, CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const CampaignForm = ({ data, onChange, errors }) => {
  const [uploadingFiles, setUploadingFiles] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  // Initialize uploaded files from data
  React.useEffect(() => {
    if (data.files && Array.isArray(data.files) && data.files.length > 0 && uploadedFiles.length === 0) {
      // Convert fileIds to file objects for display
      const files = data.files.map((fileId, index) => ({
        uid: `existing-${fileId}`,
        name: `File ${index + 1}`,
        status: 'done',
        fileId: fileId
      }));
      setUploadedFiles(files);
    }
  }, [data.files]);

  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = '.pdf,.docx';
    
    input.onchange = async (e) => {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const selectedFiles = Array.from(e.target.files);
      console.log("Selected files:", selectedFiles);
      
      if (uploadedFiles.length + selectedFiles.length > 4) {
        message.error('Maximum 4 files allowed');
        return;
      }

      // Create temporary file objects for UI
      const newFiles = selectedFiles.map(file => ({
        uid: `upload-${Date.now()}-${file.name}`,
        name: file.name,
        status: 'uploading',
        file: file
      }));

      // Add new files to the list
      const updatedFileList = [...uploadedFiles, ...newFiles];
      setUploadedFiles(updatedFileList);

      // Track uploading state
      const newUploadingFiles = { ...uploadingFiles };
      newFiles.forEach(fileObj => {
        newUploadingFiles[fileObj.uid] = true;
      });
      setUploadingFiles(newUploadingFiles);

      // Upload each file
      for (const fileObj of newFiles) {
        try {
          console.log(`Starting upload for ${fileObj.name}`);
          
          let formData = new FormData();
          console.log("This is the fileObj", fileObj.file);
          formData.append('file', fileObj.file);
          console.log("This is the formData", formData);
          
          const response = await axios.post(
            '/file/upload', 
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          );
          console.log(`Upload response for ${fileObj.name}:`, response);
          
          const fileId = response.data?.file_id;
          
          if (fileId) {
            // Update uploaded files state
            setUploadedFiles(prev => 
              prev.map(f => 
                f.uid === fileObj.uid 
                  ? { ...f, status: 'done', fileId } 
                  : f
              )
            );
            
            // Update form data with new file ID
            console.log(`Adding file ID ${fileId} to form data`);
            onChange({ 
              files: [...(data.files || []), fileId] 
            });
            
            message.success(`${fileObj.name} uploaded successfully`);
          } else {
            throw new Error('No file ID received');
          }
        } catch (error) {
          console.error(`Upload error for ${fileObj.name}:`, error);
          message.error(`${fileObj.name} upload failed: ${error.message}`);
          
          setUploadedFiles(prev => 
            prev.map(f => 
              f.uid === fileObj.uid 
                ? { ...f, status: 'error' } 
                : f
            )
          );
        } finally {
          // Remove from uploading state
          setUploadingFiles(prev => {
            const updated = { ...prev };
            delete updated[fileObj.uid];
            return updated;
          });
        }
      }
    };

    // Trigger file selection
    input.click();
  };

  const handleRemoveFile = (fileObj) => {
    // Remove from UI
    setUploadedFiles(prev => prev.filter(f => f.uid !== fileObj.uid));
    
    // Remove from form data if it was successfully uploaded
    if (fileObj.fileId && data.files) {
      console.log(`Removing file ID ${fileObj.fileId} from form data`);
      onChange({
        files: data.files.filter(id => id !== fileObj.fileId)
      });
    }
  };

  const getFileStatusIcon = (status) => {
    switch (status) {
      case 'uploading':
        return <LoadingOutlined className="text-blue-500" />;
      case 'done':
        return <CheckCircleOutlined className="text-green-500" />;
      case 'error':
        return <DeleteOutlined className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Title level={4} style={{ marginBottom: 8 }}>Create Message</Title>
      <Paragraph type="secondary" style={{ marginBottom: 24 }}>
        Design your campaign message and content here
      </Paragraph>

      <form>
        <Row gutter={24}>
          <Col span={12}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Product Name <span style={{ color: 'red' }}>*</span>
              </label>
              <Input
                value={data.product_name}
                onChange={(e) => handleChange('product_name', e.target.value)}
                status={errors.product_name ? 'error' : ''}
              />
              {errors.product_name && <Text type="danger">{errors.product_name}</Text>}
            </div>
          </Col>
          <Col span={12}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Category <span style={{ color: 'red' }}>*</span>
              </label>
              <Input
                value={data.category}
                onChange={(e) => handleChange('category', e.target.value)}
                status={errors.category ? 'error' : ''}
              />
              {errors.category && <Text type="danger">{errors.category}</Text>}
            </div>
          </Col>
          <Col span={12}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Website <span style={{ color: 'red' }}>*</span>
              </label>
              <Input
                value={data.website}
                onChange={(e) => handleChange('website', e.target.value)}
                status={errors.website ? 'error' : ''}
              />
              {errors.website && <Text type="danger">{errors.website}</Text>}
            </div>
          </Col>
          <Col span={12}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Description <span style={{ color: 'red' }}>*</span>
              </label>
              <TextArea
                rows={4}
                value={data.description}
                onChange={(e) => handleChange('description', e.target.value)}
                status={errors.description ? 'error' : ''}
              />
              {errors.description && <Text type="danger">{errors.description}</Text>}
            </div>
          </Col>
          <Col span={12}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Files (max 4: PDF, DOCX) <span style={{ color: 'red' }}>*</span>
              </label>
              
              {/* Custom upload button */}
              <Button 
                icon={<UploadOutlined />}
                onClick={handleFileSelect}
                disabled={uploadedFiles.length >= 4}
                className="mb-4"
              >
                Select Files
              </Button>
              
              {/* File list */}
              {uploadedFiles.length > 0 && (
                <div className="border rounded-md mt-2">
                  <List
                    size="small"
                    dataSource={uploadedFiles}
                    renderItem={item => (
                      <List.Item
                        className="flex items-center py-2 px-4 border-b last:border-b-0"
                        actions={[
                          <Button
                            type="text"
                            icon={<DeleteOutlined className="text-red-500" />}
                            onClick={() => handleRemoveFile(item)}
                            size="small"
                          />
                        ]}
                      >
                        <div className="flex items-center">
                          <span className="mr-2">{getFileStatusIcon(item.status)}</span>
                          <Text>{item.name}</Text>
                        </div>
                      </List.Item>
                    )}
                  />
                </div>
              )}
              
              {/* Global uploading indicator */}
              {Object.keys(uploadingFiles).length > 0 && (
                <div className="mt-2 flex items-center text-blue-500">
                  <Spin size="small" className="mr-2" />
                  <span>Uploading files...</span>
                </div>
              )}
              
              {errors.files && <Text type="danger" className="mt-2">{errors.files}</Text>}
            </div>
          </Col>
          <Col span={12}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Customer Pain Points Addressed <span style={{ color: 'red' }}>*</span>
              </label>
              <TextArea
                rows={4}
                value={data.customer_pain_points}
                onChange={(e) => handleChange('customer_pain_points', e.target.value)}
                status={errors.customer_pain_points ? 'error' : ''}
              />
              {errors.customer_pain_points && <Text type="danger">{errors.customer_pain_points}</Text>}
            </div>
          </Col>
          <Col span={12}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>Competitors (optional)</label>
              <Input
                value={data.competitors}
                onChange={(e) => handleChange('competitors', e.target.value)}
              />
            </div>
          </Col>
          <Col span={12}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>USP (optional)</label>
              <Input
                value={data.usp}
                onChange={(e) => handleChange('usp', e.target.value)}
              />
            </div>
          </Col>
          <Col span={24}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Prompt <span style={{ color: 'red' }}>*</span>
              </label>
              <TextArea
                rows={4}
                value={data.prompt}
                onChange={(e) => handleChange('prompt', e.target.value)}
                status={errors.prompt ? 'error' : ''}
              />
              {errors.prompt && <Text type="danger">{errors.prompt}</Text>}
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default CampaignForm;