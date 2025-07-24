import { 
  Navigation,
  Hero,
  ValueEcosystem,
  WhyWealthFlow,
  FAQ,
} from './components';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <ValueEcosystem />
      <WhyWealthFlow />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default App;