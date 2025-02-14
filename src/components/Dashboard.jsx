import React, { useState } from "react";
import {
  FiHome,
  FiCheckCircle,
  FiBriefcase,
  FiPenTool,
  FiCreditCard,
  FiSettings,
  FiFileText,
} from "react-icons/fi";
import { Bell,Scale } from "lucide-react";
import "./Dashboard.css";
import logo from "../assets/Frame.png";
import profile from "../assets/profile-image.png";
import LegalDashboard from "./LegalDashboard";
import ComplianceTracking from "./ComplianceTracking";
import BusinessManagement from "./BusinessManagement";
import DocumentGenerator from "./DocumentGenerator";
import LegalUpdates from "./LegalUpdates";
import SubscriptionDashboard from "./SubscriptionDashboard";
import SettingsDashboard from "./SettingsDashboard"

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  const renderContent = () => {
    switch (selectedSection) {
      case "Dashboard":
        return <LegalDashboard />;
      case "Compliance Tracking":
        return <ComplianceTracking />;
      case "Business Management":
        return <BusinessManagement />;
      case "Document Generator":
        return <DocumentGenerator />;
      case "E-Signature":
        return <h2>E-Signature Section</h2>;
      case "Legal Updates":
        return <LegalUpdates />;
      case "Subscription & Billing":
        return <SubscriptionDashboard />;
      case "Settings":
        return <SettingsDashboard />;
      default:
        return <h2>Home</h2>;
    }
  };

  return (
    <div className="dashboard-main">
      <div className="menu-sidebar">
        <div className="menu-main">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu-container">
            <h3>Main Menu</h3>
            <div className="menu-links">
              <button
                onClick={() => setSelectedSection("Dashboard")}
                className={selectedSection === "Dashboard" ? "active" : ""}
              >
                <FiHome /> Dashboard
              </button>
              <button
                onClick={() => setSelectedSection("Compliance Tracking")}
                className={
                  selectedSection === "Compliance Tracking" ? "active" : ""
                }
              >
                <FiCheckCircle /> Compliance Tracking
              </button>
              <button
                onClick={() => setSelectedSection("Business Management")}
                className={
                  selectedSection === "Business Management" ? "active" : ""
                }
              >
                <FiBriefcase /> Business Management
              </button>
              <button
                onClick={() => setSelectedSection("Document Generator")}
                className={
                  selectedSection === "Document Generator" ? "active" : ""
                }
              >
                <FiFileText /> Document Generator
              </button>
              <button
                onClick={() => setSelectedSection("E-Signature")}
                className={selectedSection === "E-Signature" ? "active" : ""}
              >
                <FiPenTool /> E-Signature
              </button>
              <button
                onClick={() => setSelectedSection("Legal Updates")}
                className={selectedSection === "Legal Updates" ? "active" : ""}
              >
                <Scale /> Legal Updates
              </button>
              <button
                onClick={() => setSelectedSection("Subscription & Billing")}
                className={
                  selectedSection === "Subscription & Billing" ? "active" : ""
                }
              >
                <FiCreditCard /> Subscription & Billing
              </button>
            </div>

            <div className="dashboard-border"></div>

            <div className="other">
              <h3>Other</h3>
              <div className="others">
                <button
                  onClick={() => setSelectedSection("Settings")}
                  className={selectedSection === "Settings" ? "active" : ""}
                >
                  <FiSettings /> Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-contents">
        <div className="top-content">
          <h4>{selectedSection}</h4>
          <div className="profile-bar">
            <button className="ask-btn">Ask AI</button>
            <div className="notification">
              <Bell color="#0d99ff" />
            </div>
            <div className="profile">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
        <div className="dashboard-borders"></div>
        <div className="mid-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
