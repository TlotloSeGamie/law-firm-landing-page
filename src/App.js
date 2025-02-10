import './App.css';
import Home from './components/Home';
import Features from './components/Features';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import HowWorks from './components/HowWorks';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import StartUp from './components/StartUp';
import StarterPlan from './components/StarterPlan';
import SignIn from './components/SignIn';
import SubscriptionPlan from './components/SubscriptionPlan';
import AccountSecure from './components/AccountSecure';
import Dashboard from './components/Dashboard';
import ComplianceTracking from './components/ComplianceTracking';
import BusinessManagement from './components/BusinessManagement'


function App() {
  return (
    <div className="App">
     <Navbar />
      <Home />
     <Features />
       <Pricing />
      <HowWorks />
      <FAQ /> 
      <Contact />
      <Footer />
      <StartUp />
      <StarterPlan /> 
      <SignIn />
      <SubscriptionPlan /> 
      <AccountSecure /> 
      <Dashboard/> 
     <ComplianceTracking /> 
       <BusinessManagement />
    </div>
  );
}

export default App;
