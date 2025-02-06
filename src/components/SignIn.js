import React from "react";
import './SignIn.css';
import { FcGoogle } from "react-icons/fc";
import EffortIn from '../assets/welcome.png';


const SignIn = () => {
    return(
        <div className="sign-main">
            <div className="sign-container">
                <div className="logo-line">
                    <h3>LOGOGIPSUM</h3>
                    <p>Already have an account? <a href="sign-up">Sign up</a></p>
                </div>
                <div className="welcome">
                    <h2>Welcome Back</h2>
                    <p>Get started with StartUp legal and take control of your business compliance</p>
                </div>
                <div className="google">
                    <FcGoogle size={44} /> <p>Sign up with Google</p>
                </div>
                <div className="borders">
                    <div className="border-line"></div>
                    <p>or</p>
                    <div className="border-line"></div>
                </div>
                <form className="sign-up-form">
                         <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter email"
                            required
                        />

                        <label htmlFor="id-number">ID number/passport</label>
                        <input
                            type="text"
                            name="idNumber"
                            placeholder="Enter ID number/passport"
                            required
                        />
                        <button className="continue" type="submit">Continue</button>
                    </form>
            </div>
            <div className="image-container">
                <h2>Empower Your Business with Legal Compliance</h2>
                <div className="image-icon">
                <   img src={EffortIn} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;