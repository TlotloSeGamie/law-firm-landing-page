import React from "react";
import {
  FiHome,
  FiCheckCircle,
  FiBriefcase,
  FiPenTool,
  FiBookOpen,
  FiCreditCard,
  FiSettings,
  FiFileText,
} from "react-icons/fi";
import "./Dashboard.css";
import logo from "../assets/Frame.png";

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      {/* Sidebar Menu */}
      <div className="menu-sidebar">
        <div className="menu-main">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu-container">
            <h3>Main Menu</h3>

            <div className="menu-links">
              <a href="dashboard">
                <FiHome /> Dashboard
              </a>
              <a href="compliance">
                <FiCheckCircle /> Compliance Tracking
              </a>
              <a href="business-management">
                <FiBriefcase /> Business Management
              </a>
              <a href="e-signature">
                <FiPenTool /> E-Signature
              </a>
              <a href="legal-updates">
                <FiBookOpen /> Legal Updates
              </a>
              <a href="subscription-billing">
                <FiCreditCard /> Subscription & Billing
              </a>
            </div>
            <div className="border"></div>
            <div className="other">
              <h3>Other</h3>
              <div className="others">
                <a href="settings">
                  <FiSettings /> Settings
                </a>
                <a href="document-generator">
                  <FiFileText /> Document Generator
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-contents">
        <div className="top-content">
          <h4>Home</h4>
          <div className="profile-bar">
            <button className="ask-btn">Ask AI</button>
            <div className="notification">🔔</div>
            <div className="profile">👤</div>
          </div>
        </div>
        <div className="borders"></div>
        {/* Mid Content Section */}
        <div className="mid-content">
          <div className="welcoming-legal">
            <div className="date-name">
              <h4>Thu, 23 January</h4>
              <h1>Good Morning, Frankie</h1>
            </div>
            <button className="legal-btn">Legal Document</button>
          </div>

          <div className="subscription-report">
            <div className="report-box">
              <h4>Annual Return Status</h4>
              <p>In Business</p>
            </div>
            <div className="report-box">
              <h4>Edited Documents</h4>
              <p>05</p>
            </div>
            <div className="report-box">
              <h4>Upcoming Deadlines</h4>
              <p>March 10, 2025</p>
            </div>
            <div className="report-box">
              <h4>Days Until Payment</h4>
              <p>2 days left</p>
            </div>
          </div>
        </div>

        {/* Last Content Section */}
        <div className="last-content">
          <div className="content-texts">
            <h3>Recently Edited Documents </h3> Track your latest document
            updates and saved changes in one place.
          </div>
          <div className="table">
            <table className="recent-saved-documents">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Last Modified</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Employment Contract</td>
                  <td>Jan 29, 2025, 11:15</td>
                  <td>
                    <button className="view">View</button>
                  </td>
                </tr>
                <tr>
                  <td>Non-Disclosure Agreement</td>
                  <td>Jan 30, 2025, 14:45</td>
                  <td>
                    <button className="view">View</button>
                  </td>
                </tr>
                <tr>
                  <td>Partnership Agreement</td>
                  <td>Jan 28, 2025, 09:30</td>
                  <td>
                    <button className="view">View</button>
                  </td>
                </tr>
                <tr>
                  <td>Trademark Application</td>
                  <td>Jan 27, 2025, 16:50</td>
                  <td>
                    <button className="view">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
