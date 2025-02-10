import {React, useState} from "react";
import './BusinessManagement.css';
import { FaChevronRight } from "react-icons/fa";

import profile from '../assets/profile-image.png';


const BusinessManagement = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedBusiness, setSelectedBusiness] = useState("Select Business");
    
    const handleSelect = (businessName) => {
        setSelectedBusiness(businessName);
        setShowOptions(false); 
      };  
    return(
        <div className='business-main'>
            <div className='business-container'>
                <div className="top-content">
                <h4>Home <FaChevronRight size={12}/> <span>BusinessManagement</span></h4>
                <div className="profile-bar">
                    <button className="ask-btn">Ask AI</button>
                    <div className="notification">🔔</div>
                    <div className="profile">
                    <img src={profile} alt="profile" />
                    </div>
                </div>
                </div>
                <div className="mid-content">
                    <div className="business-legal">
                    <div className="business-name">
                        <h3>Evergreen Solutions (Pty) Ltd</h3>
                        Registration No: 2017/42437/07
                    </div>

                    <div className="dropdown">
                        <button className="select-button" onClick={() => setShowOptions(!showOptions)}>
                        {selectedBusiness}
                        </button>

                        {showOptions && (
                        <div className="dropdown-options">
                            <div onClick={() => handleSelect("NovaEdge Consulting (Pty) Ltd")}>
                            NovaEdge Consulting (Pty) Ltd
                            </div>
                            <div onClick={() => handleSelect("Vertex Innovation")}>
                            Vertex Innovation
                            </div>
                        </div>
                        )}
                    </div>
                    </div>
                    <div className='register-documents-btn'>
                        <button className='legal-documents-btn'>Legal Documents</button>
                        <button className='register-now-btn'>Register Now</button>
                    </div>
                </div>
                <div className="borders"></div>
                    <div className="table">
                        <div className='company-text'>
                            <h3>Company Directors
                                <p>Key individuals responsible for leading and managing the business.</p>
                            </h3>
                        </div>
                    <table className="compliance-list">
                        <thead>
                        <tr>
                            <th>Director Name</th>
                            <th>Role</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Date Added</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>CEO</td>
                            <td>081 5567 1101</td>
                            <td>doe@gmail.com</td>
                            <td>01/01/2023</td>
                            <td><button className="view">View</button></td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>Director</td>
                            <td>081 567 1101</td>
                            <td>smith@gmail.com</td>
                            <td>01/012023</td>
                            <td><button className="view">View</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                    <div className="compliance-storage">
                    <h3>Company Shareholders
                        <p>individuals or entities that own a stake in the business.</p>
                    </h3>
                        <div className="table">
                        <table className="Document-list">
                        <thead>
                            <tr>
                            <th>Director Name</th>
                            <th>Share(%)</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Date Added</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>John Doe</td>
                            <td>40%</td>
                            <td>081 5567 1101</td>
                            <td>doe@gmail.com</td>
                            <td>01/01/2023</td>
                            <td><button className="view">View</button></td>
                            </tr>
                            <tr>
                            <td>Jane Smith</td>
                            <td>60%</td>
                            <td>081 567 1101</td>
                            <td>smith@gmail.com</td>
                            <td>01/012023</td>
                            <td><button className="view">View</button></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BusinessManagement;