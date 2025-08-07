
import {
  Navigation,
  Terms
} from '../components';

const Home = () => {
  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] overflow-x-hidden">
      <Navigation />
      <Terms />
    </div>
  );
};

export default Home;