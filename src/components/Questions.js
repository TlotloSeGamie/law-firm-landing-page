import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions-main">
      <div className="q-top">
        <h5>Frequently Asked Questions</h5>
        <h2>
          Got Questions? We've Got <span>Answers!</span>
        </h2>
        <p>
          Here are some frequently asked questions to help you get started with StartUp legal.
        </p>
      </div>
      <div className="q-content">
        <div className="faq-card">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is StartUp?",
    answer:
      "StartUp is a platform designed to assist entrepreneurs with legal, business, and compliance needs, offering AI-powered updates and expert guidance.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Signing up is easy! Click on 'Get Started', fill in your details, and start using our services immediately.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time through your account settings.",
  },
  {
    question: "Is my business's data secure on this platform?",
    answer:
      "Absolutely! We use industry-leading security protocols to keep your business data safe and encrypted.",
  },
  {
    question: "How does the AI-powered legal update work?",
    answer:
      "Our AI continuously scans legal updates and informs you of relevant changes that might impact your business.",
  },
];

export default Questions;
