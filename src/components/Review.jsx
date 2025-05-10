import React from 'react';
import { Card, Typography, Divider, Row, Col, Descriptions, Tag } from 'antd';
import { UploadOutlined, GoogleOutlined, RobotOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Review = ({ campaignData }) => {
    const { import_method, message, agent, schedule } = campaignData;

    const getImportMethodIcon = (type) => {
        switch (type) {
            case 'csv':
                return <UploadOutlined />;
            case 'google_workspace':
                return <GoogleOutlined />;
            case 'auto_source':
                return <RobotOutlined />;
            default:
                return null;
        }
    };

    const getImportMethodName = (type) => {
        switch (type) {
            case 'csv':
                return 'CSV Upload';
            case 'google_workspace':
                return 'Google Contacts';
            case 'auto_source':
                return 'AI Sourcing';
            default:
                return 'Not Selected';
        }
    };

    return (
        <Card bordered={false} className="review-card">
            <Title level={4}>Review Campaign</Title>
            <Paragraph type="secondary">
                Final check before launching your campaign
            </Paragraph>

            <Divider />

            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <Card
                        title="Import Method"
                        size="small"
                        bordered={false}
                        className="inner-card"
                    >
                        <Descriptions column={1} size="small">
                            <Descriptions.Item label="Method">
                                <Tag icon={getImportMethodIcon(import_method.source_type)} color={
                                    import_method.source_type === 'csv' ? 'blue' :
                                    import_method.source_type === 'google_workspace' ? 'red' :
                                    import_method.source_type === 'auto_source' ? 'green' : 'default'
                                }>
                                    {getImportMethodName(import_method.source_type)}
                                </Tag>
                            </Descriptions.Item>
                            {import_method.source_type === 'csv' && import_method.source_file_ids?.length > 0 && (
                                <Descriptions.Item label="Uploaded File">
                                    <Tag color="blue">CSV File Uploaded</Tag>
                                </Descriptions.Item>
                            )}
                        </Descriptions>
                    </Card>
                </Col>
                <Col span={24} md={12}>
                    <Card
                        title="Campaign Details"
                        size="small"
                        bordered={false}
                        className="inner-card"
                    >
                        <Descriptions column={1} size="small">
                            <Descriptions.Item label="Product Name">
                                {message.product_name}
                            </Descriptions.Item>
                            <Descriptions.Item label="Category">
                                {message.category}
                            </Descriptions.Item>
                            <Descriptions.Item label="Website">
                                <a href={message.website} target="_blank" rel="noopener noreferrer">
                                    {message.website}
                                </a>
                            </Descriptions.Item>
                            <Descriptions.Item label="Description">
                                {message.description}
                            </Descriptions.Item>
                            <Descriptions.Item label="Customer Pain Points">
                                {message.customer_pain_points}
                            </Descriptions.Item>
                            <Descriptions.Item label="Competitors">
                                {message.competitors}
                            </Descriptions.Item>
                            <Descriptions.Item label="Unique Selling Points">
                                {message.usp}
                            </Descriptions.Item>
                            <Descriptions.Item label="Campaign Prompt">
                                {message.prompt}
                            </Descriptions.Item>
                            {message.files && message.files.length > 0 && (
                                <Descriptions.Item label="Attached Files">
                                    {message.files.map((file, index) => (
                                        <Tag key={index}>{file.name}</Tag>
                                    ))}
                                </Descriptions.Item>
                            )}
                        </Descriptions>
                    </Card>
                </Col>
                <Col span={24} md={12}>
                    <Card
                        title="AI Agent Configuration"
                        size="small"
                        bordered={false}
                        className="inner-card"
                    >
                        <Descriptions column={1} size="small">
                            <Descriptions.Item label="Agent Tone">
                                <Tag color="blue">{agent.agent_tone}</Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label="Greeting Style">
                                {agent.greeting_style}
                            </Descriptions.Item>
                            <Descriptions.Item label="Agent Prompt">
                                <Paragraph type="secondary" style={{ whiteSpace: 'pre-wrap' }}>
                                    {agent.agent_prompt}
                                </Paragraph>
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card
                        title="Schedule Information"
                        size="small"
                        bordered={false}
                        className="inner-card"
                    >
                        <Descriptions column={1} size="small">
                            <Descriptions.Item label="Time Zone">
                                {schedule.time_zone}
                            </Descriptions.Item>
                            <Descriptions.Item label="Time Slot">
                                {schedule.timeSlot ? (
                                    <>
                                        {schedule.timeSlot[0]} - {schedule.timeSlot[1]}
                                    </>
                                ) : (
                                    <Text type="secondary">No time slot selected</Text>
                                )}
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Col>
            </Row>

            <style jsx>{`
                .review-card {
                    margin-bottom: 24px;
                }
                .inner-card {
                    background: #fafafa;
                }
                .ant-descriptions-item-label {
                    font-weight: 500;
                }
            `}</style>
        </Card>
    );
};

export default Review;