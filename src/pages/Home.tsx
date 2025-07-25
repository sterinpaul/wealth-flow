
import {
  Navigation,
  Hero,
  ValueEcosystem,
  WhyWealthFlow,
  Testimonials,
  FAQ,
} from '../components';
import Testimonials2 from '../components/Testimonials2';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <ValueEcosystem />
      <WhyWealthFlow />
      <Testimonials />
      <Testimonials2 />
      <FAQ />
    </div>
  );
};

export default Home;