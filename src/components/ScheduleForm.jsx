import React from 'react';
import { Select, TimePicker, Typography, Row, Col } from 'antd';
import dayjs from 'dayjs';

const { Title, Text } = Typography;
const { RangePicker } = TimePicker;

const ScheduleForm = ({ data, onChange, errors }) => {
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

  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
      <div style={{ maxWidth: 700, width: '100%' }}>
        <Title level={4} style={{ textAlign: 'center' }}>Schedule Campaign</Title>
        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
          Set timing and delivery options for your campaign
        </Text>

        <form>
          <Row gutter={16}>
            <Col span={12}>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', marginBottom: 8 }}>
                  Time Zone <span style={{ color: 'red' }}>*</span>
                </label>
                <Select
                  placeholder="Select time zone"
                  value={data.time_zone}
                  onChange={(value) => handleChange('time_zone', value)}
                  style={{ width: '100%' }}
                  status={errors.time_zone ? 'error' : ''}
                >
                  {timeZones.map(tz => (
                    <Select.Option key={tz.value} value={tz.value}>{tz.label}</Select.Option>
                  ))}
                </Select>
                {errors.time_zone && <Text type="danger">{errors.time_zone}</Text>}
              </div>
            </Col>
            {/* <Col span={12}>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', marginBottom: 8 }}>
                  Active Hours <span style={{ color: 'red' }}>*</span>
                </label>
                <RangePicker
                  format="HH:mm"
                  minuteStep={15}
                  value={data.timeSlot ? [dayjs(data.timeSlot[0], 'HH:mm'), dayjs(data.timeSlot[1], 'HH:mm')] : null}
                  onChange={(dates) => handleChange('timeSlot', dates ? [dates[0].format('HH:mm'), dates[1].format('HH:mm')] : null)}
                  placeholder={['Start Time', 'End Time']}
                  style={{ width: '100%' }}
                  status={errors.timeSlot ? 'error' : ''}
                />
                {errors.timeSlot && <Text type="danger">{errors.timeSlot}</Text>}
              </div>
            </Col> */}
          </Row>
        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;