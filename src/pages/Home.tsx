
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Navigation,
  Hero,
  ValueEcosystem,
  WhyWealthFlow,
  Testimonials,
  FAQ,
  TradingAcademy,
  VerifiedAutomation,
  Community,
  ContactUs,
} from '../components';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the section if specified in the state
    if (location.state && location.state.section) {
      const element = document.getElementById(location.state.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Clear the state after scrolling
        navigate(location.pathname, { replace: true });
      }
    }
    
  }, [location.state, navigate, location.pathname]);

  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] overflow-x-hidden">
      <Navigation />
      {/* <Hero /> */}
      <ValueEcosystem />
      <WhyWealthFlow />
      <Testimonials />
      <TradingAcademy />
      <Community />
      <VerifiedAutomation />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default Home;