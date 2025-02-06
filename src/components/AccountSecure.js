import {React, useState} from "react";
import './AccountSecure.css';
import mobile from '../assets/undraw_mobile-encryption_flk2 1.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const AccountSecure = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <div className="account-main">
            <div className="account-container">
                <div className="secure-container">
                    <div className="logo-line">
                        <h3>LOGOGIPSUM</h3>
                        <p>Already have an account? <a href="sign-in">Sign in</a></p>
                    </div>
                    <div className="secure-texts">
                        <h1>Secure Your Account</h1>
                        <p className="info-text">Create a strong password to keep your business data safe and secure.</p>
                    </div>
                    <form className="passwords">
                        <label htmlFor="password">Password</label>
                        <div className="password-field">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter password"
                                required
                            />
                            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <label htmlFor="confirm-password">Confirm Password</label>
                        <div className="password-field">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirm-password"
                                placeholder="Confirm password"
                                required
                            />
                            <span className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <button className="sign-up">Sign Up</button>
                    </form>
                </div>
            </div>
            
            <div className="image-container">
                <h2>Your Security Matters</h2>
                <div className="image-icon">
                    <img src={mobile} alt="Secure Account" />
                </div>
            </div>
        </div>
    );
};

export default AccountSecure;
