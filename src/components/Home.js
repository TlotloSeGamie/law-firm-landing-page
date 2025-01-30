import React from "react";
import './Home.css';
import Navbar from "./Navbar";


const Home = () => {
    return(
        <div>
                <Navbar />
            <div className="home-main-conatainer">
                <div className="home-container">
                    <div className="content">
                        <div className="main-text">
                            <h2 className="main-text">Simplify Your <span>Legal Compliance</span> and <span>Grow Your Business</span> with Ease</h2>
                            <p>Stay on top of legal requirements, generate documents, and get real-time updates—all in one secure platform designed for small businesses
                            </p>
                        </div>
                        <div className="start-learn-btn">
                            <button className="get-started-btn">Get Started</button>
                            <a href="learn">Learn More</a>
                        </div>
                    </div>
                    <h1>Image/ Icon</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;