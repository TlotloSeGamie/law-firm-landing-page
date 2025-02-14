import React, { useEffect } from "react";
import "./AccountApprove.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Frame.png";
import safe from "../assets/undraw_safe_0mei 1.png";

const AccountApprove = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 5000); 
  
      return () => clearTimeout(timer);
    }, [navigate]);
    
  return (
    <div className="acount-aprove-main">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="progress">
        <h1>Account Approveal in Progress</h1>
        <img src={safe} alt="safe" />
      </div>
      <p>
        Your account is currently under review. An admin will verify your
        information and approve your access shortly. You’ll be notified once
        your account is approved.
      </p>
    </div>
  );
};

export default AccountApprove;
