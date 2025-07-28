
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
} from '../components';

const Home = () => {
  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] overflow-x-hidden">
      <Navigation />
      <Hero />
      <ValueEcosystem />
      <WhyWealthFlow />
      <Testimonials />
      <TradingAcademy />
      <VerifiedAutomation />
      <Community />
      <FAQ />
    </div>
  );
};

export default Home;