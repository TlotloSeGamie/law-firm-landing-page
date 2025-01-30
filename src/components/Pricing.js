import React from "react";
import './Pricing.css';


const Pricing = () => {
    return(
        <div className="pricing-main">
            <div className="pricing-container">
                <div className="pricing-top">
                    <h5>Pricing</h5>
                    <h2><span>Simole</span> and <span>Affordable</span> Pricing Pans</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
                </div>
                <div className="prices">
                    <div className="basic">
                        <h5>Basic</h5>
                        <div className="per">
                            <h2>R499</h2><h4>/month</h4>
                        </div>
                        <div className="price-content">
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <button className="sign-up">sign up</button>
                    </div>
                    <div className="professional">
                        <h5>Professional</h5>
                        <div className="per">
                            <h2>R999</h2><h4>/month</h4>
                        </div>
                        <div className="price-content">
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <button className="sign-up">sign up</button>
                    </div>
                    <div className="enterprise">
                        <h5>Enterprise</h5>
                        <div className="per">
                            <h2>R2, 499</h2><h4>/month</h4>
                        </div>
                        <div className="price-content">
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <button className="sign-up">sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;