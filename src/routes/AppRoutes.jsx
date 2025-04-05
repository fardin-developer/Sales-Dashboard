import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CampaignManagement from '../pages/CampaignManagement';
import CreateCampaign from '../pages/CreateCampaign';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/campaigns" element={<CampaignManagement />} />
      <Route path="/campaigns/create" element={<CreateCampaign />} />
    </Routes>
  );
};

export default AppRoutes;
