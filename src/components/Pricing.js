import React from "react";
import "./Pricing.css";

const Pricing = () => {
    return (
        <div className="pricing-main">
            <div className="pricing-container">
                <div className="pricing-top">
                    <h5>Pricing</h5>
                    <h2>
                        <span>Simple</span> and <span>Affordable</span> Pricing Plans
                    </h2>
                    <p>Choose a plan that fits your needs and budget.</p>
                </div>
                <div className="prices">
                    <div className="pricing-card basic">
                        <h5>Basic</h5>
                        <div className="per">
                            <h2>R499</h2>
                            <h4>/month</h4>
                        </div>
                        <div className="price-content">
                            <ul>
                                <li> Essential features</li>
                                <li> Limited support</li>
                                <li> Single user access</li>
                                <li> Basic analytics</li>
                            </ul>
                        </div>
                        <button className="sign-up">Sign Up</button>
                    </div>
                    <div className="pricing-card professional">
                        <h5>Professional</h5>
                        <div className="per">
                            <h2>R999</h2>
                            <h4>/month</h4>
                        </div>
                        <div className="price-content">
                            <ul>
                                <li> Advanced features</li>
                                <li> Priority support</li>
                                <li> Multiple users</li>
                                <li> Detailed reports</li>
                            </ul>
                        </div>
                        <button className="sign-up">Sign Up</button>
                    </div>
                    <div className="pricing-card enterprise">
                        <h5>Enterprise</h5>
                        <div className="per">
                            <h2>R2,499</h2>
                            <h4>/month</h4>
                        </div>
                        <div className="price-content">
                            <ul>
                                <li> All professional features</li>
                                <li> Dedicated support</li>
                                <li> Unlimited users</li>
                                <li> Custom analytics</li>
                            </ul>
                        </div>
                        <button className="sign-up">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
