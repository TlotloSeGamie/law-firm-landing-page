import { React, useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <h3>{item.question}</h3>
                <span className="arrow">{openIndex === index ? "v" : "›"}</span>
              </div>
              {openIndex === index && <p>{item.answer}</p>}
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
    "StartUp Legal is a legaltech platform designed to simplify the legal compliance process for South African SMEs. It offers automated compliance tracking, document generation, CIPC integration, AI-powered legal updates, and more.",
},
  {
    question: "How do I sign up?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
},
  {
    question: "Is my business's data secure on this platform?",
    answer:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
},
  {
    question: "How does the AI-powered legal update work?",
    answer:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
},
];

export default FAQ;
