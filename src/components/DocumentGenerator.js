import { React, useState } from "react";
import "./DocumentGenerator.css";
import { FaBell, FaChevronRight } from "react-icons/fa";
// import { FileUp  } from "lucide-react";
import clipboard from '../assets/task-add-01-stroke-rounded(1) 1.png';
import profile from "../assets/profile-image.png";

const DocumentGenerator = () => {
  const [showOptions, setShowOptions] = useState(false);


  return (
    <div className="document-main">
      <div className="document-container">
        <div className="top-content">
          <h4>
            Home <FaChevronRight size={12} /> <span>BusinessManagement</span>
          </h4>
          <div className="profile-bar">
            <button className="ask-btn">Ask AI</button>
            <div className="notification">
              <FaBell className="w-6 h-6 text-gray-700" />
            </div>{" "}
            <div className="profile">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="signature-container">
        <div className="signature-text">
          <h3>Legal Document Generator</h3>
          Easily create, edit, and manage legally compliant business documents.
        </div>
        <div className="upload-document" onClick={() => setShowOptions(!showOptions)}>
      <img src={clipboard} alt="clipboard" />
      <p>New Document</p>

      {showOptions && (
        <div className="options-container">
          <button className="option-button">Create a New Document</button>
          <button className="option-button">Upload Document</button>
        </div>
      )}
      </div>
      </div>
      <div className="documents-templates">
        <button className="your-documents">Your Documents</button>
        <button className="templates">Templates</button>
      </div>
      <div className="compliance-storage">
        <div className="table">
          <table className="Document-list">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Last Edited</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Project NDA</td>
                <td>Jan 29, 2025, 11:15</td>
                <td>
                  <button className="download">Download</button>
                </td>
              </tr>
              <tr>
                <td>Legal Agreement</td>
                <td>Jan 29, 2025, 11:15</td>
                <td>
                <button className="download">Download</button>
                </td>
              </tr>
              <tr>
                <td>Tax Clearance Certificate</td>
                <td>Jan 29, 2025, 11:15</td>
                <button className="download">Download</button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DocumentGenerator;
