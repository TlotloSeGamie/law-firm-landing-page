import React from "react";
import "./Features.css";
import { FaClipboardCheck, FaFileSignature, FaBuilding, FaBookOpen } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";


const Features = () => {
  return (
    <div className="features-main" id="features">
      <div className="features-container">
        <div className="texts">
          <h5>Features</h5>
          <h1>
            Powerful Tools to Simplify <span>Your Legal Journey</span>
          </h1>
          <p>
          Automate your compliance, generate legal documents, and stay up-to-date with real-time notifications everything you need, all in one platform
          </p>
        </div>
        <div className="features-nav">
          <ul>
            <li>
              <FaClipboardCheck color="#159cf7" /> <span>Automated Compliance Tracking</span>
              <p>Stay on top of your business’s compliance with automated reminders and alerts. </p>
            </li>
            <li>
              <FaFileSignature color="#159cf7" /> <span>Document Generation & E-Signatures</span>
              <p>Create, customize, and sign legal documents securely in minutes.</p>
            </li>
            <li>
              <FaBuilding color="#159cf7" /> <span>Post-Time CIPC Registration</span>
              <p>Manage company registration and updates in real-time through seamless CIPC integration.</p>
            </li>
            <li>
              <AiOutlineRobot color="#159cf7" /> <span>AI-Powered Legal Updates</span>
              <p>Stay updated with tailored legal notifications and regulatory changes for your business.</p>
            </li>
            <li>
              <FaBookOpen color="#159cf7" /> <span>Educational Resources</span>
              <p>Create, customize, and sign legal documents securely in minutes.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
