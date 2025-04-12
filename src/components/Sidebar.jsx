// src/layout/DashboardLayout.jsx
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  UserOutlined,
  TeamOutlined,
  DashboardOutlined,
  SettingOutlined,
  FormOutlined,
  CalendarOutlined,
  FileOutlined
} from '@ant-design/icons';

const { Sider, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Menu items mapping based on your components structure
  const menuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      onClick: () => navigate('/dashboard')
    },
    {
      key: 'campaigns',
      icon: <FileOutlined />,
      label: 'Campaigns',
      onClick: () => navigate('/campaigns')
    },
    {
      key: 'companies',
      icon: <TeamOutlined />,
      label: 'Companies',
      onClick: () => navigate('/companies')
    },
    {
      key: 'agents',
      icon: <UserOutlined />,
      label: 'Agents',
      onClick: () => navigate('/agents')
    },
    {
      key: 'recruitment',
      icon: <TeamOutlined />,
      label: 'Recruitment',
      onClick: () => navigate('/recruitment')
    },
    {
      key: 'schedule',
      icon: <CalendarOutlined />,
      label: 'Schedule',
      onClick: () => navigate('/schedule')
    },
    {
      key: 'forms',
      icon: <FormOutlined />,
      label: 'Forms',
      onClick: () => navigate('/forms')
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      onClick: () => navigate('/settings')
    }
  ];

  // Find current active key based on path
  const getActiveKey = () => {
    const path = location.pathname.split('/')[1] || 'dashboard';
    return path;
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10
        }}
      >
        <div className="logo" style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.3)' }} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[getActiveKey()]}
          items={menuItems}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all 0.2s' }}>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflow: 'initial'
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;