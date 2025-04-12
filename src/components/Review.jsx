import React from 'react';
import { Card, Typography, Divider, Row, Col } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Review = () => {
    return (
        <Card bordered={false} className="review-card">
            <Title level={4}>Review Campaign</Title>
            <Paragraph type="secondary">
                Final check before launching your campaign
            </Paragraph>

            <Divider />

            <Row gutter={[24, 24]}>
                <Col span={24} md={12}>
                    <Card
                        title="Campaign Details"
                        size="small"
                        bordered={false}
                        className="inner-card"
                    >
                        {/* Campaign data summary would be displayed here */}
                        <div className="summary-placeholder">
                            <Text type="secondary">Campaign summary</Text>
                        </div>
                    </Card>
                </Col>
                <Col span={24} md={12}>
                    <Card
                        title="AI Agent Configuration"
                        size="small"
                        bordered={false}
                        className="inner-card"
                    >
                        {/* Agent config summary would be displayed here */}
                        <div className="summary-placeholder">
                            <Text type="secondary">Agent configuration summary</Text>
                        </div>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card
                        title="Schedule Information"
                        size="small"
                        bordered={false}
                        className="inner-card"
                    >
                        {/* Schedule data summary would be displayed here */}
                        <div className="summary-placeholder">
                            <Text type="secondary">Schedule details summary</Text>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default Review