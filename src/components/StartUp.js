import React, { useState } from "react";
import './StartUp.css';
import { FcGoogle } from "react-icons/fc";
import Effortless from '../assets/effortless-legal.png';

const StartUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        idNumber: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = "Phone number must contain only numbers";
        }

        if (!formData.idNumber.trim()) {
            newErrors.idNumber = "ID number/passport is required";
        } else if (!/^\d+$/.test(formData.idNumber)) {
            newErrors.idNumber = "ID number/passport must contain only numbers";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if ((name === "phone" || name === "id-number") && !/^\d*$/.test(value)) {
            return;
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully", formData);
        }
    };

    return (
        <div className="startup-main">
            <div className="startup-container">
                <div className="logo-line">
                    <h3>LOGOGIPSUM</h3>
                    <p>Already have an account? <a href="sign-in">Sign in</a></p>
                </div>
                <div className="lets-start">
                    <div className="started-text">
                        <h2>Let's get you started</h2>
                        <p>Get started with StartUp legal and take control of your business compliance</p>
                    </div>
                    <div className="google">
                        <FcGoogle size={54} /> <p>Sign up with Google</p>
                    </div>
                    <div className="borders">
                        <div className="border-line"></div>
                        <p>or</p>
                        <div className="border-line"></div>
                    </div>
                    <form className="sign-up-form" onSubmit={handleSubmit}>
                        <label htmlFor="full-name">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter Full Names"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        {errors.fullName && <p className="error">{errors.fullName}</p>}

                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}

                        <label htmlFor="id-number">ID number/passport</label>
                        <input
                            type="text"
                            name="idNumber"
                            placeholder="Enter ID number/passport"
                            value={formData.idNumber}
                            onChange={handleChange}
                            required
                        />
                        {errors.idNumber && <p className="error">{errors.idNumber}</p>}

                        <button className="continue" type="submit">Continue</button>
                    </form>
                </div>
            </div>
            <div className="image-container">
                <h2>Effortless Legal Management for Your Business</h2>
                <div className="image-icon">
                    <img src={Effortless} />
                </div>
            </div>
        </div>
    );
};

export default StartUp;
