import {React, useState} from "react";
import "./ComplianceTracking.css";
import { Landmark, Scale, Calendar, AlertTriangle   } from "lucide-react";


const ComplianceTracking = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("Select Business");

  const handleSelect = (businessName) => {
    setSelectedBusiness(businessName);
    setShowOptions(false); 
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-contents">
        <div className="mid-content">
        <div className="business-legal">
          <div className="business-name">
            <h3>Evergreen Solutions (Pty) Ltd</h3>
            Registration No: 2017/42437/07
          </div>

          <div className="dropdown">
            <button className="select-button" onClick={() => setShowOptions(!showOptions)}>
              {selectedBusiness}
            </button>

            {showOptions && (
              <div className="dropdown-options">
                <div onClick={() => handleSelect("NovaEdge Consulting (Pty) Ltd")}>
                  NovaEdge Consulting (Pty) Ltd
                </div>
                <div onClick={() => handleSelect("Vertex Innovation")}>
                  Vertex Innovation
                </div>
              </div>
            )}
          </div>
        </div>

          <div className="subscription-report">
            <div className="report-box">
              <h4>
              Tax Number
              <Landmark size={46} 
                style={{ color: '#0D99FF', background: '#1ea1ff3f', borderRadius: '50%', padding: '10px' }} 
          />
              </h4>
              <p className="tax-no">9098 765 432</p>
            </div>
            <div className="report-box">
              <h4>Annual Return Status
              <Scale size={46} 
                   style={{ color: 'purple', background: 'rgba(128, 0, 128, 0.199)', borderRadius: '50%', padding: '10px' }} 
           />
              </h4>
              <p>In Business</p>
            </div>
            <div className="report-box">
              <h4>Financial Year End Date
              <Calendar size={46} 
                style={{ color: '#FBBC05', background: 'rgba(255, 255, 0, 0.144)', borderRadius: '50%', padding: '10px' }} 
           />
              </h4>
              <p>March 10, 2026</p>
            </div>
            <div className="report-box">
              <h4>Overdue Compliance
              <AlertTriangle size={46} 
                style={{ color: 'red', background: 'rgba(255, 0, 0, 0.192)', borderRadius: '50%', padding: '10px' }} 
           />
              </h4>
              <p className="tasks-left">2 Tasks Overdue</p>
            </div>
          </div>
        </div>

        <div className="compliance-last-content">
          <div className="content-texts">
             <h3>Compliance Task List </h3> 
             
          </div>
          <div className="table">
              <table className="compliance-list">
                <thead>
                  <tr>
                    <th>Task name</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CIPC Annual Return Filing</td>
                    <td>March 15, 2025</td>
                    <td className="status-pending">Pending</td>
                    <td><button className="view">View</button></td>
                  </tr>
                  <tr>
                    <td>Business Address Update</td>
                    <td>April 5, 2025</td>
                    <td className="status-completed">Completed</td>
                    <td><button className="view">View</button></td>
                  </tr>
                  <tr>
                    <td>Trademark Renewal</td>
                    <td>May 10, 2025</td>
                    <td className="status-overdue">Overdue</td>
                    <td><button className="view">View</button></td>
                  </tr>
                  <tr>
                    <td>ID Verification</td>
                    <td>Feb 25, 2025</td>
                    <td className="status-pending">Pending</td>
                    <td><button className="view">View</button></td>
                  </tr>
                  <tr>
                    <td>Director Update submission</td>
                    <td>March 2, 2025</td>
                    <td className="status-pending">Pending</td>
                    <td><button className="view">View</button></td>
                  </tr>
                </tbody>
              </table>
          </div>
            <div className="compliance-storage">
              <h3>Compliance Documents Storage</h3>
                        <div className="table">
                <table className="Document-list">
                  <thead>
                    <tr>
                      <th>Document Name</th>
                      <th>Updated Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CIPC Compliance Report</td>
                      <td>Jan 15, 2025</td>
                      <td><button className="download">Download</button></td>
                    </tr>
                    <tr>
                      <td>BEE Affidavit</td>
                      <td>Feb 5, 2025</td>
                      <td><button className="view-document">View</button></td>
                    </tr>
                    <tr>
                      <td>Tax Clearance Certificate</td>
                      <td>Feb 10, 2025</td>
                    </tr>
                  </tbody>
                </table>
                        </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceTracking;
