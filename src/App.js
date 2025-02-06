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

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home />
      <Features />
      <Contact />
      <FAQ />
      <Pricing /> 
      <HowWorks />
      <Footer /> */}
     <StartUp />
      <StarterPlan /> 
      <SignIn />
      <SubscriptionPlan />
    </div>
  );
}

export default App;
