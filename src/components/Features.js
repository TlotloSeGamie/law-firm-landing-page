import React from "react";
import "./Features.css";
import { FaClipboardCheck, FaFileSignature, FaBuilding, FaBookOpen } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";


const Features = () => {
  return (
    <div className="features-main">
      <div className="features-container">
        <div className="texts">
          <h5>Features</h5>
          <h1>
            Powerful Tools to Simplify <span>Your Legal Journey</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.at
          </p>
        </div>
        <div className="features-nav">
          <ul>
            <li>
              <FaClipboardCheck color="#159cf7" /> <span>Automated Compliance Tracking</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li>
              <FaFileSignature color="#159cf7" /> <span>Document Generation & E-Signatures</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li>
              <FaBuilding color="#159cf7" /> <span>Post-Time CIPC Registration</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li>
              <AiOutlineRobot color="#159cf7" /> <span>AI-Powered Legal Updates</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li>
              <FaBookOpen color="#159cf7" /> <span>Educational Resources</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
