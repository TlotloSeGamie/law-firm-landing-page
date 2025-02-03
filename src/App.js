import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Contact from './components/Contact';
import Questions from './components/FAQ';
import Pricing from './components/Pricing';
import HowWorks from './components/HowWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Features />
      <Contact />
      <Questions />
      <Pricing /> 
      <HowWorks />
      <Footer />
    </div>
  );
}

export default App;
