import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout style={{ 
          marginLeft: 64, 
          transition: "all 0.2s ease"
        }}
        className="sidebar-margin">
          <Content 
            style={{ 
              padding: 20, 
              minHeight: "100vh", 
              backgroundColor: "#f5f8fa" 
            }}
          >
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;