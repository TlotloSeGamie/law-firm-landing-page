import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import StartUp from './components/StartUp';
import StarterPlan from './components/StarterPlan';
import SubscriptionPlan from './components/SubscriptionPlan';
import AccountSecure from './components/AccountSecure';
import VerifyIdentity from './components/VerifyIdentity';
import AccountApprove from './components/AccountApprove';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<StartUp />} />
          <Route path="/starter-plan" element={<StarterPlan />} />
          <Route path="/subscription-plan" element={<SubscriptionPlan />} />
          <Route path="/account-secure" element={<AccountSecure />} />
          <Route path="/verify-identity" element={<VerifyIdentity />} />
          <Route path="/account-approval" element={<AccountApprove/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
