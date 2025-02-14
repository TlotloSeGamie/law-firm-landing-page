import React from "react";
import "./Home.css";
import contract from "../assets/undraw_contract_upwc 1.png";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Features from './Features';
import Pricing from './Pricing';
import HowWorks from './HowWorks';
import FAQ from './FAQ';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();
  const handlStartUpRoute = () => {
    navigate("/sign-up");
  };
  return (
    <div>
      <Navbar />
      <div className="home-main-conatainer">
        <div className="home-container">
          <div className="content">
            <div className="main-text">
              <h2 className="main-text">
                Simplify Your <span>Legal Compliance</span> and{" "}
                <span>Grow Your Business</span> with Ease
              </h2>
              <p>
                Stay on top of legal requirements, generate documents, and get
                real-time updates—all in one secure platform designed for small
                businesses
              </p>
            </div>
            <div className="start-learn-btn">
              <button
                className="get-started-btn"
                onClick={handlStartUpRoute}
              >
                Get Started
              </button>
              <a href="learn">Learn More</a>
            </div>
          </div>
          <div className="image">
            {/* <h1>Image/ Icon</h1> */}
            <img src={contract} alt="Contract" />
          </div>
        </div>
      </div>

      <Features />
      <Pricing />
      <HowWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
