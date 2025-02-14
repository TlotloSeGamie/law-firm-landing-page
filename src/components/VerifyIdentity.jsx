import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoipsum.png";
import verified from "../assets/undraw_two-factor-authentication_8tds 1.png";
import "./VerifyIdentity.css";
import { FileUp, Trash2 } from "lucide-react";

const VerifyIdentity = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
  };

  const navigate = useNavigate();
  const handleApprovalRoute = () => {
    navigate("/account-approval");
  };
  return (
    <div className="verify-main">
      <div className="verify-container">
        <div className="logo-text">
          <img src={logo} alt="logo" />
          <h2>Verify Your Identity</h2>
        </div>
        <div className="upload-id" onClick={!selectedFile ? handleUploadClick : undefined} style={{ cursor: "pointer" }}>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept=".pdf,.jpg,.png"
          />
          {!selectedFile ? (
            <>
              <div className="flex items-center justify-center p-4 bg-gray-600 rounded-lg shadow-md">
                <FileUp className="w-10 h-10 stroke-[1.5] text-gray-700" />
              </div>
              <p>
                Upload your ID to complete your registration. Access will be granted
                once verified by the admin.
              </p>
            </>
          ) : (
            <div className="flex items-center justify-center p-4 bg-gray-600 rounded-lg shadow-md" onClick={handleDeleteFile}>
              <Trash2 className="w-10 h-10 stroke-[1.5] text-red-600 cursor-pointer" />
            </div>
          )}
          <button className="upload-btn">{selectedFile ? selectedFile.name : "PDF"}</button>
        </div>
        <button className="submit" onClick={handleApprovalRoute}>Submit</button>
      </div>
      <div className="secure-trusted">
        <h2>Secure & Trusted Verification</h2>
        <img src={verified} alt="verified" />
      </div>
    </div>
  );
};

export default VerifyIdentity;
