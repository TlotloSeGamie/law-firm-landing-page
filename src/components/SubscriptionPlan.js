import React from "react";
import './SubscriptionPlan.css';
import Logo from '../assets/logoipsum.png';
import { FaCcMastercard } from "react-icons/fa";



const SubscriptionPlan = () => {
    return(
        <div className="subscription-main">
            <div className="subscription-main-container">
                <div className="subscription-container">
                    <div className="logoipsum">
                        {/* <img src={Logo} alt="logo" /> */}
                        <h3>LOGOGIPSUM</h3>
                        <h2>Choose the Right Plan for Your Business</h2>
                        <p>Select a plan that fits your business needs, whether your're just getting started or ready to scale</p>
                    </div>
                    <div className="bill">
                        <label htmlFor="bill-to">Bill To</label>
                            <input
                                type="text"
                                name="bill-to"
                                placeholder="Enter Full Names"
                                required
                            />
                        <label htmlFor="card-number">Card Number</label>
                        <div className="input-container">
                            <input
                                type="text"
                                name="card-number"
                                placeholder="Enter Card Number"
                                required
                            />
                            <svg className="card-icon" width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="24" r="14" fill="#EA001B" />
                                <circle cx="32" cy="24" r="14" fill="#FFA200" fillOpacity="0.8 " />
                            </svg>
                        </div>
                        <div className="expire">
                        <div className="expire-field">
                            <label htmlFor="expiration-date">Expiration Date</label>
                            <input
                                type="text"
                                name="expiration-date"
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div className="expire-field">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                placeholder="000"
                                required
                            />
                        </div>
                    </div>

                    </div>
                    <div className="subscription-btn">
                        <button className="subscribe-btn">Subscribe</button>
                        <p>By providing your card information,you allow us to charg your card for future payments in accordance with their terms.</p>
                    </div>
                </div>
                <div className="subscription-planning">
                    <div className="subscription-plan">
                        <h4>Starter plan</h4>
                        <div className="starter-plans">
                            <div className="plans">
                                <div className="plans-zar">
                                    <input
                                        type="radio"
                                        id="basic"
                                        name="basic"
                                        value="basic"
                                    />
                                </div>
                                <div className="plans-zar">
                                    <label for="basic">
                                        <div className="p-texts">
                                            <p className="p-one"><span>Basic plan </span>
                                                R499/month</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="plans">
                                <div className="radio-check">
                                    <input
                                        type="radio"
                                        id="professional"
                                        name="professional"
                                        value="professional"
                                    />
                                </div>
                                <div className="plans-zar">
                                    <label for="professional">
                                        <div className="p-texts">
                                            <p className="p-one"><span>Professional plan </span>
                                                R499/month</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="plans">
                                <div className="radio-check">
                                    <input
                                        type="radio"
                                        id="enterprise"
                                        name="enterprise"
                                        value="enterprise"
                                    />
                                </div>
                                <div className="plans-zar">
                                    <label for="enterprise">
                                        <div className="p-texts">
                                            <p className="p-one"><span>Enterprise plan </span> 
                                                R499/month</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="border"></div>
                        <div className="subscription-features">
                            <h4>Features</h4>
                            <ul>
                                <li>Priority CIPC services.</li>
                                <li>5 Digital certifications/ commissioning per month.</li>
                                <li>Education resources.</li>
                                <li>Advanced compliance tracking tools.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlan;