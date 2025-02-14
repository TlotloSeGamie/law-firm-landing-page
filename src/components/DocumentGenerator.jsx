import { React, useState } from "react";
import "./DocumentGenerator.css";
import clipboard from '../assets/task-add-01-stroke-rounded(1) 1.png';

const DocumentGenerator = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [activeTab, setActiveTab] = useState("documents"); // Track active tab

  return (
    <div className="document-main">
      <div className="document-container"></div>
      
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
        <button 
          className={activeTab === "documents" ? "your-documents active" : "your-documents"} 
          onClick={() => setActiveTab("documents")}
        >
          Your Documents
        </button>
        <button 
          className={activeTab === "templates" ? "templates active" : "templates"} 
          onClick={() => setActiveTab("templates")}
        >
          Templates
        </button>
      </div>

      <div className="compliance-storage">
        <div className="table">
          {activeTab === "documents" ? (
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
                  <td><button className="download">Download</button></td>
                </tr>
                <tr>
                  <td>Legal Agreement</td>
                  <td>Jan 29, 2025, 11:15</td>
                  <td><button className="download">Download</button></td>
                </tr>
                <tr>
                  <td>Tax Clearance Certificate</td>
                  <td>Jan 29, 2025, 11:15</td>
                  <td><button className="download">Download</button></td>
                </tr>
              </tbody>
            </table>
          ) : (
            <h3 className="template-view">Template View</h3> // Placeholder for templates
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentGenerator;
