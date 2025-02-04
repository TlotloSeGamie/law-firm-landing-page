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
                            <input
                                type="text"
                                name="card-number"
                                placeholder="Enter Card Number"
                                required
                            />
                        <div className="expire">
                            <label htmlFor="expiration-date">Expiration Date</label>
                                <input
                                    type="text"
                                    name="expiration-date"
                                    placeholder="MM/YY"
                                    required
                                />
                            <label htmlFor="cvv">CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="000"
                                    required
                                />
                        </div>
                    </div>
                    <div className="subscription-btn">
                        <button className="subscribe-btn">Subscribe</button>
                        <p>By providing your card information,you allow us to charg your card for future payments in accordance with their terms.</p>
                    </div>
                </div>
                <div className="subscription-plan">
                    <h4>Starter plan</h4>
                    <div className="starter-plans">
                        <input 
                            type="radio"
                            id="basic"
                            name="basic"
                            value="basic"
                        />
                        <label for="basic">
                            Basic plan
                            <p>R499/month</p>
                        </label>
                        <input 
                            type="radio"
                            id="professional"
                            name="professional"
                            value="professional"
                        />
                        <label for="professional">
                            Professional plan
                            <p>R499/month</p>
                        </label>
                        <input 
                            type="radio"
                            id="enterprise"
                            name="enterprise"
                            value="enterprise"
                        />
                        <label for="enterprise">
                            Enterprise plan
                            <p>R499/month</p>
                        </label>
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
    );
};

export default SubscriptionPlan;