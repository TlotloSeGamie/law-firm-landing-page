import React, { useState } from "react";
import "./LegalUpdates.css";
import { FaSearch } from "react-icons/fa";
import deadline1 from "../assets/Rectangle 232.png";
import deadline2 from "../assets/Rectangle 232 (2).png";
import deadline3 from "../assets/Rectangle 232 (1).png";

const LegalUpdates = () => {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");


  return (
    <div className="legal-updates-main">
      <div className="legal-updates-container">
        <div className="legal-updates-text">
          <h2>Stay Compliant with the Latest Legal Updates</h2>
          <p>
            Get real-time regulatory changes, compliance deadlines, and expert insights
            tailored for your business.
          </p>
        </div>

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="news-nav">
      <a 
        href="#" 
        className={activeTab === "all" ? "active" : ""} 
        onClick={() => setActiveTab("all")}
      >
        All
      </a>
      <a 
        href="#compliance" 
        className={activeTab === "compliance" ? "active" : ""} 
        onClick={() => setActiveTab("compliance")}
      >
        Compliance
      </a>
      <a 
        href="#deadlines" 
        className={activeTab === "deadlines" ? "active" : ""} 
        onClick={() => setActiveTab("deadlines")}
      >
        Deadlines
      </a>
      <a 
        href="#regulations" 
        className={activeTab === "regulations" ? "active" : ""} 
        onClick={() => setActiveTab("regulations")}
      >
        Regulations
      </a>
      <a 
        href="#science" 
        className={activeTab === "science" ? "active" : ""} 
        onClick={() => setActiveTab("science")}
      >
        Science
      </a>
    </div>

        <div className="news-container">
          {[deadline1, deadline3, deadline2, deadline1, deadline3, deadline2].map(
            (img, index) => (
              <div className="news" key={index}>
                <img src={img} alt="deadline" />
                <h5>CIPC Annual Return Deadline Approaching - File Before [Date]</h5>
                <p>
                  Stay compliant by filing your annual returns before the due date to avoid penalties.
                </p>
                <div className="read-btn">
                  <button className="read-more-btn">Read More</button>
                  <p>9 min ago</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalUpdates;
