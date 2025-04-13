import React, { useEffect } from 'react';
import { Form, Select, TimePicker, Card, Typography, Button, Row, Col } from 'antd';
import dayjs from 'dayjs';

const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = TimePicker;

const ScheduleForm = ({ onSubmit, initialValues = {} }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues.timeZone || initialValues.timeSlot) {
      const timeSlot = initialValues.timeSlot 
        ? [dayjs(initialValues.timeSlot[0]), dayjs(initialValues.timeSlot[1])]
        : undefined;

      form.setFieldsValue({
        timeZone: initialValues.timeZone || undefined,
        timeSlot
      });
    }
  }, [initialValues, form]);

  const handleSubmit = (values) => {
    const formattedValues = {
      ...values,
      timeSlot: values.timeSlot 
        ? [values.timeSlot[0].format('HH:mm'), values.timeSlot[1].format('HH:mm')]
        : undefined
    };
    onSubmit(formattedValues);
  };

  const timeZones = [
    { label: '(GMT-08:00) Pacific Time', value: 'America/Los_Angeles' },
    { label: '(GMT-07:00) Mountain Time', value: 'America/Denver' },
    { label: '(GMT-06:00) Central Time', value: 'America/Chicago' },
    { label: '(GMT-05:00) Eastern Time', value: 'America/New_York' },
    { label: '(GMT+00:00) UTC', value: 'UTC' },
    { label: '(GMT+01:00) Central European Time', value: 'Europe/Paris' },
    { label: '(GMT+02:00) Eastern European Time', value: 'Europe/Helsinki' },
    { label: '(GMT+03:00) Moscow Time', value: 'Europe/Moscow' },
    { label: '(GMT+05:30) India Standard Time', value: 'Asia/Kolkata' },
    { label: '(GMT+08:00) China Standard Time', value: 'Asia/Shanghai' },
    { label: '(GMT+09:00) Japan Standard Time', value: 'Asia/Tokyo' },
    { label: '(GMT+10:00) Australian Eastern Time', value: 'Australia/Sydney' }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
      <Card style={{ maxWidth: 700, width: '100%', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)' }}>
        <Title level={4} style={{ textAlign: 'center' }}>Schedule Campaign</Title>
        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
          Set timing and delivery options for your campaign
        </Text>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="timeZone"
                label="Time Zone"
                rules={[{ required: true, message: 'Please select a time zone' }]}
              >
                <Select placeholder="Select time zone">
                  {timeZones.map(tz => (
                    <Option key={tz.value} value={tz.value}>{tz.label}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="timeSlot"
                label="Active Hours"
                rules={[{ required: true, message: 'Please select time slot' }]}
              >
                <RangePicker 
                  format="HH:mm"
                  minuteStep={15}
                  placeholder={['Start Time', 'End Time']}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          </Row>

        </Form>
      </Card>
    </div>
  );
};

export default ScheduleForm;
