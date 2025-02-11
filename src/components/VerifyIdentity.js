import React from "react";
import logo from "../assets/logoipsum.png";
import verified from "../assets/undraw_two-factor-authentication_8tds 1.png";
import "./VerifyIdentity.css";
import { FaFileUpload } from "react-icons/fa";
import { FileUp } from "lucide-react";

const VerifyIdentity = () => {
  return (
    <div className="verify-main">
      <div className="verify-container">
        <div className="logo-text">
            <img src={logo} alt="logo" />
            <h2>Verify Your Identity</h2>
        </div>
        <div className="upload-id">
        <div className="flex items-center justify-center p-4 bg-gray-600 rounded-lg shadow-md">
            <FileUp className="w-10 h-10 stroke-[1.5] text-gray-700" />
          </div>
          <p>
            Upload your ID to complete your registration. Access will be granted
            once verified by the admin
          </p>
          <button className="upload-btn">PDF</button>
        </div>
        <button className="submit">Submit</button>
      </div>
      <div className="secure-trusted">
        <h2>Secure & Trusted Verification</h2>
        <img src={verified} alt="verified" />
      </div>
    </div>
  );
};

export default VerifyIdentity;
