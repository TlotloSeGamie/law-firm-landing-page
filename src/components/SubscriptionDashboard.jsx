import React from "react";
import "./SubscriptionDashboard.css";
import { FileText } from "lucide-react";


const SubscriptionDashboard = () => {
  const [activePlan, setActivePlan] = React.useState("Professional");

  return (
    <div className="subscription-dashboard-main">
      <h2>Subscription Plans</h2>
      <div className="subscription-paid">
        <div
          className={`basic-card ${activePlan === "Basic" ? "active" : ""}`}
          onClick={() => setActivePlan("Basic")}
        >
          <div className="pay">
            <h4>Basic</h4>
            <p>R499/month</p>
          </div>
          <p className="pay-month">Every month</p>
          <div className="upgrade-more"> 
            <button className="upgrade-btn">Upgrade</button>
            <a href="learn-more">Learn more</a>
          </div>
        </div>
        <div
          className={`professional-card ${
            activePlan === "Professional" ? "active" : ""
          }`}
          onClick={() => setActivePlan("Professional")}
        >
          <div className="pay">
            <h4>Professional</h4>
            <p>R999/month</p>
          </div>
          <p className="pay-month">02 days remaining</p>
          <div className="upgrade-more">
            <button className="upgrade-btn">Cancel Subscription</button>
            <a href="learn-more">Learn more</a>
          </div>
        </div>
        <div
          className={`enterprise-card ${
            activePlan === "Enterprise" ? "active" : ""
          }`}
          onClick={() => setActivePlan("Enterprise")}
        >
          <div className="pay">
            <h4>Enterprise</h4>
            <p>R2,499/month</p>
          </div>
          <p className="pay-month">Every month</p>
          <div className="upgrade-more">
            <button className="upgrade-btn">Upgrade</button>
            <a href="learn-more">Learn more</a>
          </div>
        </div>
      </div>
      <div className="billing-table">
        <h2>Billing History</h2>
        <div className="table-history">
          <table className="billing-history">
            <thead>
              <tr>
                <th>Date</th>
                <th>Details</th>
                <th>Amount</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08/07/2024</td>
                <td>Professional plan</td>
                <td>R999.00</td>
                <td>
                  <button className="invoice-btn"><FileText size={24} color="#0d9affb6" />Invoice</button>
                </td>
              </tr>
              <tr>
                <td>10/062024</td>
                <td>Professional plan</td>
                <td>R999.00</td>
                <td>
                  <button className="invoice-btn"><FileText size={24} color="#0d9affb6" />Invoice</button>
                </td>
              </tr>
              <tr>
                <td>03/05/2024</td>
                <td>Professional plan</td>
                <td>R999.00</td>
                <td>
                  <button className="invoice-btn"><FileText size={24} color="#0d9affb6" />Invoice</button>
                </td>
              </tr>
              <tr>
                <td>01/04/2024</td>
                <td>Professional plan</td>
                <td>R999.00</td>
                <td>
                  <button className="invoice-btn"><FileText size={24} color="#0d9affb6" />Invoice</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDashboard;
