import React, { useState } from "react";
import "./StarterPlan.css";
import Empower from '../assets/business.png';

const StarterPlan = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    registrationNumber: "",
    businessType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "registrationNumber" && !/^\d*$/.test(value)) {
      return; // Prevents non-numeric input
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business Name is required.";
    }
    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = "Registration Number is required.";
    } else if (!/^\d+$/.test(formData.registrationNumber)) {
      newErrors.registrationNumber = "Registration Number must be numbers only.";
    }
    if (!formData.businessType) {
      newErrors.businessType = "Please select a Business Type.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!", formData);
      // Proceed with form submission (API call, etc.)
    }
  };

  return (
    <div className="starter-plan-main">
      <div className="starter-plan-container">
        <div className="logo-line">
          <h3>LOGOGIPSUM</h3>
          <p>
            Already have an account? <a href="sign-in">Sign in</a>
          </p>
        </div>
        <div className="busisness-setup">
          <div className="business-text">
            <h2>Set Up Your Business Profile</h2>
            <p>
              Provide your business details to access compliance tracking and
              legal services tailored to your needs.
            </p>
          </div>
        </div>
        <form className="business-details" onSubmit={handleSubmit}>
          <label htmlFor="business-name">Business Name</label>
          <input
            type="text"
            name="businessName"
            placeholder="Enter Business Name"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
          {errors.businessName && <p className="error">{errors.businessName}</p>}

          <label htmlFor="registration-number">Registration Number</label>
          <input
            type="text"
            name="registrationNumber"
            placeholder="Enter Registration Number"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
          />
          {errors.registrationNumber && <p className="error">{errors.registrationNumber}</p>}

          <div className="input-group">
            <label htmlFor="business-type">Business Type</label>
            <select
              id="business-type"
              name="businessType"
              className="select-field"
              value={formData.businessType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Choose business type</option>
              <option value="sole-proprietor"> Sole Proprietor</option>
              <option value="private-company"> Private Company (Pty Ltd)</option>
              <option value="non-profit-organisation"> Non-Profit Organisation (NPO/NPC)</option>
              <option value="partnership"> Partnership</option>
            </select>
            {errors.businessType && <p className="error">{errors.businessType}</p>}
          </div>

          <button type="submit" className="continue">Continue</button>
        </form>
      </div>
      <div className="image-container">
        <h2>Empower Your Business with Legal Compliance</h2>
        <div className="image-icon">
          <img src={Empower} alt="Empower" />
        </div>
      </div>
    </div>
  );
};

export default StarterPlan;
