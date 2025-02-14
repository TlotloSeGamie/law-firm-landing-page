import React from "react";
import "./LegalDashboard.css"
import { FaBalanceScale, FaRegHourglass, FaWallet, FaPlus } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi'


const LegalDashboard = () => {
  return (
    <div className="mid-content">
      <div className="welcoming-legal">
        <div className="date-name">
          <h4>Thu, 23 January</h4>
          <h1>Good Morning, Frankie</h1>
        </div>
        <button className="legal-btn">
           <FaPlus />Legal Document</button>
      </div>

      <div className="subscription-report">
        <div className="report-box">
          <h4>Annual Return Status
             <FaBalanceScale size={46} 
                   style={{ color: 'purple', background: 'rgba(128, 0, 128, 0.199)', borderRadius: '50%', padding: '10px' }} 
          /></h4>
          <p>In Business</p>
        </div>
        <div className="report-box">
          <h4>Edited Documents 
            <FiFileText size={46} 
                  style={{ color: 'green', background: 'rgba(0, 128, 0, 0.158)', borderRadius: '50%', padding: '10px' }} 
          /></h4>
          <p>05</p>
        </div>
        <div className="report-box">
          <h4>Upcoming Deadlines  
            <FaRegHourglass size={46} 
                style={{ color: '#FBBC05', background: 'rgba(255, 255, 0, 0.144)', borderRadius: '50%', padding: '10px' }} 
          /></h4>
          <p>March 10, 2025</p>
        </div>
        <div className="report-box">
          <h4>Days Until Payment <FaWallet size={46} 
                style={{ color: '#0D99FF', background: '#1ea1ff3f', borderRadius: '50%', padding: '10px' }} 
          /></h4>
          <p className="box-days">2 days left</p>
        </div>
      </div>

      <div className="last-content">
        <div className="content-texts">
          <h3>Recently Edited Documents</h3>
          <p>Track your latest document updates and saved changes in one place.</p>
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
                <td><button className="view">View</button></td>
              </tr>
              <tr>
                <td>Non-Disclosure Agreement</td>
                <td>Jan 30, 2025, 14:45</td>
                <td><button className="view">View</button></td>
              </tr>
              <tr>
                <td>Partnership Agreement</td>
                <td>Jan 28, 2025, 09:30</td>
                <td><button className="view">View</button></td>
              </tr>
              <tr>
                <td>Trademark Application</td>
                <td>Jan 27, 2025, 16:50</td>
                <td><button className="view">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LegalDashboard;
