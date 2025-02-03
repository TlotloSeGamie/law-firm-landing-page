import React from "react";
import './HowWorks.css';


const HowWorks = () => {
    return(
        <div className="how-main">
            <div className="how-container">
                <h5>How it Works</h5>
                <h2>How The <span>Start Up</span> Legal Works</h2>
                <p>Simply your legal journey in just few easy steps.</p>
            </div>
            <div className="steps">
                <div className="step">
                    <h1>image/ icon</h1>
                    <h3>Sign Up & Cusyomize Your Plan</h3>
                    <p>Create tour and choose the subscription plan that best fits your business needs</p>
                </div>
                <div className="step">
                    <h1>image/ icon</h1>
                    <h3>Managae Your Business Seemlessly</h3>
                    <p>Acces compliance tracking documnet generation and CIPC intergration-tailered to your business</p>
                </div>
                <div className="step">
                    <h1>image/ icon</h1>
                    <h3>Stay Complaint & Focusnon Growth</h3>
                    <p>Get real-time arlets and AI updates to manage legal basics while growing your business</p>
                </div>
            </div>
        </div>
    );
};

export default HowWorks;
