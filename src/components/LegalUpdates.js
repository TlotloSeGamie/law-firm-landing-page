import React, { useState } from "react";
import "./LegalUpdates.css";
import { FaBell, FaChevronRight, FaSearch } from "react-icons/fa";
import profile from "../assets/profile-image.png";
import deadline1 from "../assets/Rectangle 232.png";
import deadline2 from "../assets/Rectangle 232 (2).png";
import deadline3 from "../assets/Rectangle 232 (1).png";

const LegalUpdates = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="legal-updates-main">
      <div className="legal-updates-container">
        {/* Top Section */}
        <div className="top-content">
          <h4>
            Home <FaChevronRight size={12} /> <span>Legal Updates</span>
          </h4>
          <div className="profile-bar">
            <button className="ask-btn">Ask AI</button>
            <div className="notification">
              <FaBell className="icon" />
            </div>
            <div className="profile">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>

        <div className="border"></div>

        {/* Title Section */}
        <div className="legal-updates-text">
          <h2>Stay Compliant with the Latest Legal Updates</h2>
          <p>
            Get real-time regulatory changes, compliance deadlines, and expert insights
            tailored for your business.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Navigation Tabs */}
        <div className="news-nav">
          <a href="#">All</a>
          <a href="#compliance">Compliance</a>
          <a href="#deadlines">Deadlines</a>
          <a href="#regulations">Regulations</a>
          <a href="#science">Science</a>
        </div>

        {/* News Section */}
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
                  <p>99 min ago</p>
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
